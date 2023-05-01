<img src="https://raw.githubusercontent.com/clearvis-io/clearvisio-appointment-booker/main/logoDark.png">

# Clearvis.io Appointment Booker
Clearvis.io is a cloud based Practice Management Software (PMS) for optical retailers. It provides complete solution for the daily front- and backoffice tasks in an optical retail store. Clearvis.io includes EHR, POS and CRM features and it is suitable for private practices and retail chains as well.

This module is a frontend for the Appointment Booking API of clearvis.io. The API itself is only available for subscribers, this is a simple, configurable, open source frontend for it, that is easy to add to any website or webstore. It allows the registration of a customer, accepting the store's privacy policy and booking of an available appointment matching the customer's desired expectations. (Including selecting the type of examination, the optometrist or opthalmologist and of course the date and time of the examination.)

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
          headerTitle: 'Appointment',
          colors: {
            primary: '#282',
          }
        });
      });
    </script>
  </body>
</html>
```

## Detailed constructor arguments of ClearvisioAppointmentBooker
* **headerTitle**: The title of the appointment booker UI
* **storeCode**: The code of a store in the clearvis.io subscription. (It can be configured on the clearvis.io UI.)
* **apiPath**: The booker sends all API requests to this endpoint. It is recomended, to create a proxy controller on you webserver for this, so API key and CRM URL is hidden from the browser. (See below for an example proxy php file. For deatails of the clearvis.io API see the documentation on the clearvis.io UI.)
* **apiHeaders**: Additional headers sent in the API requests
  ```js
      new ClearvisioAppointmentBooker({
        apiHeaders: {
          'X-MY-SPECIAL-HEADER': 'my special value',
        },
        //...
      });
  ```
* **customerFields**: List of fields in an array that can be set on the customer registration page. The available values are: `[birth, gender, ssn, state, postal_code, city, street_address, mobile, email]`. The default value is: `['mobile', 'email']`.
* **requiredCustomerFields**: List of fields that are required to be set on the customer registration page. (The available values are the same.)
* **country**: The country of the address of the customer, it is required to be set if any of the address parts are available in the customerFields. Two character ISO country codes are accepted. Eg. "HU".
* **language**: The language of the booker UI. If not set, then navigator.language is used. (The available languages are currently en, ro, hu.)
* **showAppointmentComment**: When set to `true` it will show a comment field (The default value is `false`.)
* **translationOverrides**: Plain object storing source-translation pairs for translation overrides. Only English source strings can be overridden, so please switch language to en to find out translation override key.
  ```js
    new ClearvisioAppointmentBooker({
      translationOverrides: {
        'Confirm appointment': : 'YES, BOOK MY APPOINTMENT',
      },
      //...
    });
  ```

* **calendarStepShouldBeHidden**: When set to `true` it will hide the calendar/optometrist selection step, if customers should not be allowed to check free slots by user
* **calendarRoleCheckMode**: Allowed values: hierarchical, exact. Hierarchical mode allows appointment reservation for opthalmologists when the protocol requires optometry role. Exact mode only allows appointments for users with exact same roles. Default: hierachical.
* **showFirstAvailableUserItem**: When set to `false` it will hide "First available user" option on the calendar list. (The default value is `true`.)
* **showExaminerName**: When set to `false` it will hide the examiner's name on the summary screen. (The default value is `true`.)
* **priceComment**: Text that will be showed on summary card below the price of examination
* **showPrice**: When set to `false` it will hide any price related info (The default value is `true`.)
* **privacyPolicyLink**: An optional link which point to a custom privacy policy url, otherwise it is use the configured text from the Clearvis.io instance
* **firstEligibleTime**: Determines the first free time slot that can be selected. Default value is `tomorrow`. The available values are:
  * *now*: The very first free slot will be available for selection
  * *tomorrow*: The first free slot tomorrow will be available for selection
  * *tomorrowNoon*: The first free slot after tomorrow 12:00 will be available for selection
  * *plus24Hours*: The first free slot tomorrow later than the current time will be available for selection
  * *dayAfterTomorrow*: The first free slot the day after tomorrow will be available for selection
* **colors**: Allow overriding some colors of the module. (Complex overriding can be done with css manually or forking the project.) Not all keys are need to be set. The allowed keys are:
  * *background*: Sets the color of the background
  * *contentBackground*: Sets the background color of the segments/card/lists
  * *text*: Sets the color of the normal foreground text
  * *primary*: Sets the color of the header and the primary buttons
  * *danger*: Sets the color of errors dialogs and validation messages
  * *success*: Sets the header color of the success dialog

## Example backend proxy in PHP
```php
<?php
$apiPath = 'https://clearvis.io/xxxx/apiV2';
$apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

$headers = ['X-AUTH-API-TOKEN: ' . $apiKey];
foreach (getallheaders() as $key => $value) {
    $headers[] = $key . ': ' . $value;
}

$result = @file_get_contents(
    $apiPath . $_SERVER['PATH_INFO'] . ($_SERVER['QUERY_STRING'] ? '?' . $_SERVER['QUERY_STRING'] : ''),
    false,
    stream_context_create([
        'http' => [
            'header' => $headers,
            'method' => $_SERVER['REQUEST_METHOD'],
            'content' => file_get_contents('php://input')
        ],
    ])
);

foreach ($http_response_header ?? [] as $header) {
    header($header);
}

echo $result;
```
## Starting development environment

In order to create an environment where you can play with the source code, install docker first and then run:
```bash
$ API_URL=https://<your instance url>/apiV2 API_KEY=<your api key> API_STORE_CODE=<your store code> docker-compose up -d
$ npm run dev
```

This will:
 * Create a docker container with an apache service listening on http://localhost:8080
 * Watch any source code changes and build booker automatically.

## Building manually
1. Clone the git repository from github
2.
```bash
$ npm install
$ npm run build
```
