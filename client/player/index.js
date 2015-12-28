// Import Soundworks library modules (client side)
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _soundworksClient = require('soundworks/client');

// Import Soundfield modules (client side)

var _PlayerPerformanceJs = require('./PlayerPerformance.js');

var _PlayerPerformanceJs2 = _interopRequireDefault(_PlayerPerformanceJs);

// Files to load
var audioFiles = ['sounds/sound-welcome.mp3', 'sounds/sound-others.mp3'];

var init = function init() {
  // Initialize the client
  _soundworksClient.client.init('player');
  // Instantiate the modules
  var welcome = new _soundworksClient.Welcome({ fullScreen: false });
  var checkin = new _soundworksClient.ClientCheckin({ showDialog: false });
  var loader = new _soundworksClient.Loader({ files: audioFiles });
  var performance = new _PlayerPerformanceJs2['default'](loader);

  // Start the scenario and order the modules
  _soundworksClient.client.start(function (serial, parallel) {
    return serial(
    // Initialization step: we launch in parallel the welcome module,
    // the loading of the files, and the checkin
    parallel(welcome, loader, checkin),
    // When the initialization step is done, we launch the performance
    performance);
  });
};

// Init app when document id ready
window.addEventListener('load', init);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jbGllbnQvcGxheWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O2dDQUNzRSxtQkFBbUI7Ozs7bUNBRTNELHdCQUF3Qjs7Ozs7QUFHdEQsSUFBTSxVQUFVLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDOztBQUUzRSxJQUFNLElBQUksR0FBRyxTQUFQLElBQUksR0FBUzs7QUFFakIsMkJBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUV0QixNQUFNLE9BQU8sR0FBRyw4QkFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sT0FBTyxHQUFHLG9DQUFrQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sTUFBTSxHQUFHLDZCQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDakQsTUFBTSxXQUFXLEdBQUcscUNBQXNCLE1BQU0sQ0FBQyxDQUFDOzs7QUFHbEQsMkJBQU8sS0FBSyxDQUFDLFVBQUMsTUFBTSxFQUFFLFFBQVE7V0FDNUIsTUFBTTs7O0FBR0osWUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDOztBQUVsQyxlQUFXLENBQ1o7R0FBQSxDQUNGLENBQUM7Q0FDSCxDQUFBOzs7QUFHRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9jbGllbnQvcGxheWVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IFNvdW5kd29ya3MgbGlicmFyeSBtb2R1bGVzIChjbGllbnQgc2lkZSlcbmltcG9ydCB7IGNsaWVudCwgQ2xpZW50Q2hlY2tpbiwgV2VsY29tZSwgTG9hZGVyLCBDbGllbnRDb250cm9sIH0gZnJvbSAnc291bmR3b3Jrcy9jbGllbnQnO1xuLy8gSW1wb3J0IFNvdW5kZmllbGQgbW9kdWxlcyAoY2xpZW50IHNpZGUpXG5pbXBvcnQgUGxheWVyUGVyZm9ybWFuY2UgZnJvbSAnLi9QbGF5ZXJQZXJmb3JtYW5jZS5qcyc7XG5cbi8vIEZpbGVzIHRvIGxvYWRcbmNvbnN0IGF1ZGlvRmlsZXMgPSBbJ3NvdW5kcy9zb3VuZC13ZWxjb21lLm1wMycsICdzb3VuZHMvc291bmQtb3RoZXJzLm1wMyddO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAvLyBJbml0aWFsaXplIHRoZSBjbGllbnRcbiAgY2xpZW50LmluaXQoJ3BsYXllcicpO1xuICAvLyBJbnN0YW50aWF0ZSB0aGUgbW9kdWxlc1xuICBjb25zdCB3ZWxjb21lID0gbmV3IFdlbGNvbWUoeyBmdWxsU2NyZWVuOiBmYWxzZSB9KTtcbiAgY29uc3QgY2hlY2tpbiA9IG5ldyBDbGllbnRDaGVja2luKHsgc2hvd0RpYWxvZzogZmFsc2UgfSk7XG4gIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXIoeyBmaWxlczogYXVkaW9GaWxlcyB9KTtcbiAgY29uc3QgcGVyZm9ybWFuY2UgPSBuZXcgUGxheWVyUGVyZm9ybWFuY2UobG9hZGVyKTtcblxuICAvLyBTdGFydCB0aGUgc2NlbmFyaW8gYW5kIG9yZGVyIHRoZSBtb2R1bGVzXG4gIGNsaWVudC5zdGFydCgoc2VyaWFsLCBwYXJhbGxlbCkgPT5cbiAgICBzZXJpYWwoXG4gICAgICAvLyBJbml0aWFsaXphdGlvbiBzdGVwOiB3ZSBsYXVuY2ggaW4gcGFyYWxsZWwgdGhlIHdlbGNvbWUgbW9kdWxlLFxuICAgICAgLy8gdGhlIGxvYWRpbmcgb2YgdGhlIGZpbGVzLCBhbmQgdGhlIGNoZWNraW5cbiAgICAgIHBhcmFsbGVsKHdlbGNvbWUsIGxvYWRlciwgY2hlY2tpbiksXG4gICAgICAvLyBXaGVuIHRoZSBpbml0aWFsaXphdGlvbiBzdGVwIGlzIGRvbmUsIHdlIGxhdW5jaCB0aGUgcGVyZm9ybWFuY2VcbiAgICAgIHBlcmZvcm1hbmNlXG4gICAgKVxuICApO1xufVxuXG4vLyBJbml0IGFwcCB3aGVuIGRvY3VtZW50IGlkIHJlYWR5XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXQpO1xuIl19