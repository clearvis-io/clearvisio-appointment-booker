<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
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
    <div id="embedded" style="width: 500px"></div>
    <script type="module">
      import ClearvisioAppointmentBooker from './build/index.js';

      function createBooker(bookerStyle, parentElement) {
        new ClearvisioAppointmentBooker({
          storeCode: '<?php echo $_ENV['API_STORE_CODE']; ?>',
          apiPath: '/api.php',
          style: bookerStyle,
          parentElement: parentElement,
          cssUrls: [ './build/style.css' ]
        });
      };

      createBooker('embedded-safe', document.getElementById('embedded'));
    </script>
  </body>
</html>
