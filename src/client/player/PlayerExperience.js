import * as soundworks from 'soundworks/client';

const audioContext = soundworks.audioContext;

const viewTemplate = `
  <canvas class="background"></canvas>
  <div class="foreground">
    <div class="section-top flex-middle"></div>
    <div class="section-center flex-center">
      <p id="title" class="huger"><%= title %></p>
    </div>
    <div class="section-bottom flex-middle"></div>
  </div>
`;

// this experience plays a sound synchronized across every client 
// connected to the experience
export default class PlayerExperience extends soundworks.Experience {
  constructor(assetsDomain, audioFiles) {
    super();

    // services
    this.platform = this.require('platform', { features: ['web-audio'] });
    this.checkin = this.require('checkin', { showDialog: false });
    this.sync = this.require('sync');
    this.audioBufferManager = this.require('audio-buffer-manager', {
      assetsDomain: assetsDomain,
      files: audioFiles,
    });
  }

  init() {
    // initialize the view
    this.viewTemplate = viewTemplate;
    this.viewContent = { title: `Let's go!` };
    this.viewCtor = soundworks.CanvasView;
    this.viewOptions = { preservePixelRatio: true };
    this.view = this.createView();
  }

  start() {
    super.start(); // don't forget this

    if (!this.hasStarted)
      this.init();

    this.show();

    const updateRate = 2.0; // in seconds
    setInterval( () => {
      // create source node
      let audioBuffer = this.audioBufferManager.getAudioBuffer('default', 0);
      let src = audioContext.createBufferSource();
      src.buffer = audioBuffer;
      src.connect(audioContext.destination);

      // get current time
      const now = this.sync.getSyncTime();
      // console.log( 'time:', now );
      let timeInBuffer = now % audioBuffer.duration;
      let soundDuration = updateRate + 0.5; // 0.5 to overlap

      // start source in sync. across clients
      src.start(audioContext.currentTime, timeInBuffer, soundDuration);
      
    }, updateRate * 1000);

    const updateRate2 = 0.05; // in seconds
    setInterval( () => {
      const now = this.sync.getSyncTime();
      document.getElementById('title').innerHTML = Math.round(now);
    }, updateRate2 * 1000);

  }
}
