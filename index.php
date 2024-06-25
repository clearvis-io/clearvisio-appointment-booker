<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link href="./build/style.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clearvisio Appointment Booker Development Environment</title>
  </head>
  <body>
    <h1>Clearvisio Appointment Booker Development Environment</h1>
    <p>This development environment is configured to proxy api requests to the following backend:
    </p>
    <ul>
        <li>API_URL: <?php echo $_ENV['API_URL'] ? $_ENV['API_URL'] : 'Not configured, please specificy API_URL env var before startup.'; ?></li>
        <li>API_KEY: <?php echo $_ENV['API_KEY'] ? $_ENV['API_KEY'] : 'Not configured, please specificy API_KEY env var before startup.'; ?></li>
        <li>API_STORE_CODE: <?php echo $_ENV['API_STORE_CODE'] ? $_ENV['API_STORE_CODE'] : 'Not configured, please specificy API_STORE_CODE env var before startup.'; ?></li>
    </ul>
    <p>Click this button to start booking an appointment:
    </p>
    <button id="bookAppointmentsFullScreen">Book my appointment! fullscreen</button>
    <button id="bookAppointmentsModal">Book my appointment! modal</button>
    <button id="bookAppointmentsEmbedded">Book my appointment! embedded</button>
    <button id="bookAppointmentsEmbeddedSafe">Book my appointment! embeddedSafe</button>
    <div id="embedded">
      Placeholder of embedded modal!
    </div>
    <script type="module">
      import ClearvisioAppointmentBooker from './build/index.js';

      function createBooker(bookerStyle, parentElement) {
        window.booker = new ClearvisioAppointmentBooker({
          storeCode: '<?php echo $_ENV['API_STORE_CODE']; ?>',
          apiPath: '/api.php',
          style: bookerStyle,
          parentElement: parentElement
        });
      };

      document.getElementById('bookAppointmentsFullScreen').addEventListener('click', () => {
        createBooker('fullscreen');
      });
      document.getElementById('bookAppointmentsModal').addEventListener('click', () => {
        createBooker('modal-view');
      });
      document.getElementById('bookAppointmentsEmbedded').addEventListener('click', () => {
        window.location.href = '/embedded.php';
      });
      document.getElementById('bookAppointmentsEmbeddedSafe').addEventListener('click', () => {
        window.location.href = '/embeddedSafe.php';
      });
    </script>
  </body>
</html>
