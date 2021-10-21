# Clearvis.io Appointment Booker
WIP

## Simple usage example
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link href="./clearvisio-appointment-booker/dist/style.css" rel="stylesheet">
    <title>Hello, world!</title>
  </head>
  <body>
    <button id="bookAppointments">Appointments!</button>
    <script type="module">
      import ClearvisioAppointmentBooker from './clearvisio-appointment-booker/dist/index.js';

      document.getElementById('bookAppointments').addEventListener('click', () => {
        new ClearvisioAppointmentBooker({
          storeCode: 'DEMO',
          apiPath: '/myProxiedApi.php',
          country: 'HU',
          header: {title: 'Appointment'}
        });
      });
    </script>
  </body>
</html>
```

## Detailed constructor arguments of ClearvisioAppointmentBooker
* **header**: The title and subtitle of the appointment booker UI (eg. `{title: 'TITLE', subtitle: 'subtitle'}`) Subtitle is not required
* **storeCode**: The code of a store in the clearvis.io subscription. (It can be configured on the clearvis.io UI.)
* **apiPath**: The booker sends all API requests from to this endpoint. It is recomended, to create a proxy controller on you webserver for this, so API key is hidden from the browser. (An example proxy php code file will be provided in a future update. For deatails of the clearvis.io API see the documentation on the clearvis.io UI.)
* **apiHeaders**: Additional headers sent in the API requests
  ```js
      new ClearvisioAppointmentBooker({
        apiHeaders: {
          'X-MY-SPECIAL-HEADER': 'my special value',
        },
        //...
      });
  ```
* **customerFields**: List of fields in an array that can be set on the customer registration page. The available values are: [birth, gender, ssn, state, postal_code, city, street_address, mobile, email]. The default value is: `['mobile', 'email']`.
* **requiredCustomerFields**: List of fields that are required to be set on the customer registration page. (The available values are the same.)
* **country**: The country of the address of the customer, it is required to be set if any of the address parts are available in the customerFields. Two character ISO country codes are accepted. Eg. "HU".
* **language**: The language of the booker UI. If not set, then navigator.language is used. (The available languages are currently en and hu.)


## Building manually
1. Clone the git repository from github
2. 
```bash
$ npm install
$ npm run build
```
