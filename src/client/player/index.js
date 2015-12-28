// Import Soundworks library modules (client side)
import { client, ClientCheckin, Welcome, Loader, ClientControl } from 'soundworks/client';
// Import Soundfield modules (client side)
import PlayerPerformance from './PlayerPerformance.js';

// Files to load
const audioFiles = ['sounds/sound-welcome.mp3', 'sounds/sound-others.mp3'];

const init = () => {
  // Initialize the client
  client.init('player');
  // Instantiate the modules
  const welcome = new Welcome({ fullScreen: false });
  const checkin = new ClientCheckin({ showDialog: false });
  const loader = new Loader({ files: audioFiles });
  const performance = new PlayerPerformance(loader);

  // Start the scenario and order the modules
  client.start((serial, parallel) =>
    serial(
      // Initialization step: we launch in parallel the welcome module,
      // the loading of the files, and the checkin
      parallel(welcome, loader, checkin),
      // When the initialization step is done, we launch the performance
      performance
    )
  );
}

// Init app when document id ready
window.addEventListener('load', init);
