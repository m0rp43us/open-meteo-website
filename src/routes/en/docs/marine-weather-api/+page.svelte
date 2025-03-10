<script lang="ts">
  import { onMount } from 'svelte';
  import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css';

  onMount(async () => {
    const datepicker = await import("bootstrap-datepicker");
    const weather = await import("$lib/weather");
    const Dropdown = await import('bootstrap/js/dist/dropdown');
    const Collapse = await import('bootstrap/js/dist/collapse');
    const Tab = await import('bootstrap/js/dist/tab');
    weather.init(Dropdown.default)
});
</script>

<svelte:head>
    <title>Marine Weather API | Open-Meteo.com</title> 
    <link rel="canonical" href="https://open-meteo.com/en/docs/marine-weather-api" />
</svelte:head>


  <form id="api_form" method="get" action="https://marine-api.open-meteo.com/v1/marine">
    <div class="row">
      <h2>Select Coordinates or City</h2>
      <div class="col-md-3">
        <div class="form-floating">
          <input type="number" step="0.0001" class="form-control" name="latitude" id="latitude" value="54.3213">
          <label for="latitude">Latitude</label>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-floating">
          <input type="number" step="0.0001" class="form-control" name="longitude" id="longitude" value="10.1348">
          <label for="longitude">Longitude</label>
        </div>
      </div>
      <div class="col-md-6">
        <div class="input-group mb-3">
          <div class="form-floating dropdown">
            <input type="text" class="form-control" id="select_city" autocomplete="off" spellcheck="false" aria-label="Select city" data-bs-toggle="dropdown"/>
            <ul id="select_city_results" class="dropdown-menu" aria-labelledby="select_city">
              <li><span class="dropdown-item">Start typing to search for locations</span></li>
            </ul>
            <label for="select_city">Select city</label>
          </div>
          <button class="btn btn-outline-secondary" type="button" id="detect_gps">Detect GPS Position</button>
        </div>
      </div>
    </div>
    <div class="row py-3 px-0">
      <h2>Hourly Marine Variables</h2>
      <div class="col-md-4">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wave_height" id="wave_height" name="hourly" checked>
          <label class="form-check-label" for="wave_height">
            Wave Height
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wave_direction" id="wave_direction" name="hourly">
          <label class="form-check-label" for="wave_direction">
            Wave Direction
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wave_period" id="wave_period" name="hourly">
          <label class="form-check-label" for="wave_period">
            Wave Period
          </label>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wind_wave_height" id="wind_wave_height" name="hourly">
          <label class="form-check-label" for="wind_wave_height">
            Wind Wave Height
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wind_wave_direction" id="wind_wave_direction"
            name="hourly">
          <label class="form-check-label" for="wind_wave_direction">
            Wind Wave Direction
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wind_wave_period" id="wind_wave_period" name="hourly">
          <label class="form-check-label" for="wind_wave_period">
            Wind Wave Period
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wind_wave_peak_period" id="wind_wave_peak_period"
            name="hourly">
          <label class="form-check-label" for="wind_wave_peak_period">
            Wind Wave Peak Period
          </label>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="swell_wave_height" id="swell_wave_height"
            name="hourly">
          <label class="form-check-label" for="swell_wave_height">
            Swell Wave Height
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="swell_wave_direction" id="swell_wave_direction"
            name="hourly">
          <label class="form-check-label" for="swell_wave_direction">
            Swell Wave Direction
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="swell_wave_period" id="swell_wave_period"
            name="hourly">
          <label class="form-check-label" for="swell_wave_period">
            Swell Wave Period
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="swell_wave_peak_period" id="swell_wave_peak_period"
            name="hourly">
          <label class="form-check-label" for="swell_wave_peak_period">
            Swell Wave Peak Period
          </label>
        </div>
      </div>
    </div>

    <div class="row py-3 px-0">
      <h2>Daily Marine Variables <small class="text-muted">(*)</small></h2>
      <div class="col-md-4">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wave_height_max" id="wave_height_max" name="daily">
          <label class="form-check-label" for="wave_height_max">
            Wave Height Max
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wave_direction_dominant" id="wave_direction_dominant"
            name="daily">
          <label class="form-check-label" for="wave_direction_dominant">
            Wave Direction Dominant
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wave_period_max" id="wave_period_max" name="daily">
          <label class="form-check-label" for="wave_period_max">
            Wave Period Max
          </label>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wind_wave_height_max" id="wind_wave_height_max"
            name="daily">
          <label class="form-check-label" for="wind_wave_height_max">
            Wind Wave Height Max
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wind_wave_direction_dominant"
            id="wind_wave_direction_dominant" name="daily">
          <label class="form-check-label" for="wind_wave_direction_dominant">
            Wind Wave Direction Dominant
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wind_wave_period_max" id="wind_wave_period_max"
            name="daily">
          <label class="form-check-label" for="wind_wave_period_max">
            Wind Wave Period Max
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="wind_wave_peak_period_max"
            id="wind_wave_peak_period_max" name="daily">
          <label class="form-check-label" for="wind_wave_peak_period_max">
            Wind Wave Peak Period Max
          </label>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="swell_wave_height_max" id="swell_wave_height_max"
            name="daily">
          <label class="form-check-label" for="swell_wave_height_max">
            Swell Wave Height Max
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="swell_wave_direction_dominant"
            id="swell_wave_direction_dominant" name="daily">
          <label class="form-check-label" for="swell_wave_direction_dominant">
            Swell Wave Direction Dominant
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="swell_wave_period_max" id="swell_wave_period_max"
            name="daily">
          <label class="form-check-label" for="swell_wave_period_max">
            Swell Wave Period Max
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="swell_wave_peak_period_max"
            id="swell_wave_peak_period_max" name="daily">
          <label class="form-check-label" for="swell_wave_peak_period_max">
            Swell Wave Peak Period Max
          </label>
        </div>
      </div>
      <small class="text-muted">* Parameter <mark>timezone</mark> is mandatory</small>
    </div>

    <div class="row py-3 px-0">
      <h2>Settings</h2>
      <div class="col-3">
        <div class="form-floating mb-3">
          <select class="form-select" name="timeformat" id="timeformat" aria-label="Timeformat" data-default="iso8601">
            <option selected value="iso8601">ISO 8601 (e.g. 2022-12-31)</option>
            <option value="unixtime">Unix timestamp</option>
          </select>
          <label for="timeformat">Timeformat</label>
        </div>
      </div>
      <div class="col-3">
        <div class="form-floating mb-3">
          <select class="form-select" name="timezone" id="timezone" aria-label="Timezone" data-default="GMT">
            <option value="America/Anchorage">America/Anchorage</option>
            <option value="America/Los_Angeles">America/Los_Angeles</option>
            <option value="America/Denver">America/Denver</option>
            <option value="America/Chicago">America/Chicago</option>
            <option value="America/New_York">America/New_York</option>
            <option value="America/Sao_Paulo">America/Sao_Paulo</option>
            <option selected value="GMT">GMT+0</option>
            <option value="auto">Automatically detect time zone</option>
            <option value="Europe/London">Europe/London</option>
            <option value="Europe/Berlin">Europe/Berlin</option>
            <option value="Europe/Moscow">Europe/Moscow</option>
            <option value="Africa/Cairo">Africa/Cairo</option>
            <option value="Asia/Bangkok">Asia/Bangkok</option>
            <option value="Asia/Singapore">Asia/Singapore</option>
            <option value="Asia/Tokyo">Asia/Tokyo</option>
            <option value="Australia/Sydney">Australia/Sydney</option>
            <option value="Pacific/Auckland">Pacific/Auckland</option>
          </select>
          <label for="timezone">Timezone</label>
        </div>
      </div>
      <div class="col-3">
        <div class="form-floating mb-3">
          <select class="form-select" name="past_days" id="past_days" aria-label="Past days" data-default="0">
            <option selected value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">1 week</option>
            <option value="14">2 weeks</option>
            <option value="31">1 month</option>
            <option value="61">2 months</option>
            <option value="92">3 months</option>
          </select>
          <label for="past_days">Past days</label>
        </div>
      </div>
      <div class="col-3">
        <div class="form-floating">
          <input type="text" class="form-control" data-provide="datepicker" data-date-format="yyyy-mm-dd"
            data-date-start-date="2022-06-08" value="" data-default="" name="start_date" id="start_date"><span
            class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
          <label for="start_date">Start date</label>
        </div>
      </div>
      <div class="col-3">
        <div class="form-floating">
          <input type="text" class="form-control" data-provide="datepicker" data-date-format="yyyy-mm-dd"
            data-date-start-date="2022-06-08" value="" data-default="" name="end_date" id="end_date"><span
            class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
          <label for="end_date">End date</label>
        </div>
      </div>
      <div class="col-12 pb-3 debug-hidden">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="localhost" name="localhost" value="true">
          <label class="form-check-label" for="localhost">Use localhost server</label>
        </div>
      </div>
    </div>

    <div class="col-12">
      <button type="submit" class="btn btn-primary">Preview Chart</button>
      <button type="submit" class="btn btn-outline-primary" name="format" value="xlsx">Download XLSX</button>
      <button type="submit" class="btn btn-outline-primary" name="format" value="csv">Download CSV</button>
    </div>
  </form>



  <div class="col-12 my-4">
    <div id="container" style="height: 400px; width: 100%"></div>
  </div>

  <div class="col-12">
    <label for="api_url" class="form-label">API URL (<a id="api_url_link" target="_blank" href="#">Open in new
        tab</a>)</label>
    <input type="text" class="form-control" id="api_url" readonly>
    <div id="emailHelp" class="form-text">You can copy this API URL into your application</div>
  </div>

  <div class="col-12 py-5">
    <h2 id="api-documentation">API Documentation</h2>
    <p>The API endpoint <mark>/v1/marine</mark> accepts a geographical coordinate, a list of weather variables and
      responds with a JSON hourly marine weather forecast for 7 days. Time always starts at 0:00 today. All URL
      parameters are listed below:</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Parameter</th>
            <th scope="col">Format</th>
            <th scope="col">Required</th>
            <th scope="col">Default</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">latitude, longitude</th>
            <td>Floating point</td>
            <td>Yes</td>
            <td></td>
            <td>Geographical WGS84 coordinate of the location</td>
          </tr>
          <tr>
            <th scope="row">hourly</th>
            <td>String array</td>
            <td>No</td>
            <td></td>
            <td>A list of weather variables which should be returned. Values can be comma separated, or multiple
              <mark>&hourly=</mark> parameter in the URL can be used.
            </td>
          </tr>
          <tr>
            <th scope="row">daily</th>
            <td>String array</td>
            <td>No</td>
            <td></td>
            <td>A list of daily weather variable aggregations which should be returned. Values can be comma separated,
              or multiple <mark>&daily=</mark> parameter in the URL can be used. If daily weather variables are
              specified, parameter <mark>timezone</mark> is required.</td>
          </tr>
          <tr>
            <th scope="row">timeformat</th>
            <td>String</td>
            <td>No</td>
            <td><mark>iso8601</mark></td>
            <td>If format <mark>unixtime</mark> is selected, all time values are returned in UNIX epoch time in seconds.
              Please note that all timestamp are in GMT+0! For daily values with unix timestamps, please apply
              <mark>utc_offset_seconds</mark> again to get the correct date.
            </td>
          </tr>
          <tr>
            <th scope="row">timezone</th>
            <td>String</td>
            <td>No</td>
            <td><mark>GMT</mark></td>
            <td>If <mark>timezone</mark> is set, all timestamps are returned as local-time and data is returned starting
              at 00:00 local-time. Any time zone name from the <a
                href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">time zone
                database</a> is supported. If <mark>auto</mark> is set as a time zone, the coordinates will be
              automatically resolved to the local time zone.</td>
          </tr>
          <tr>
            <th scope="row">past_days</th>
            <td>Integer (0-2)</td>
            <td>No</td>
            <td><mark>0</mark></td>
            <td>If <mark>past_days</mark> is set, yesterday or the day before yesterday data are also returned.</td>
          </tr>
          <tr>
            <th scope="row">start_date<br />end_date</th>
            <td>String (yyyy-mm-dd)</td>
            <td>No</td>
            <td></td>
            <td>The time interval to get weather data. A day must be specified as an ISO8601 date (e.g.
              <mark>2022-06-30</mark>).
            </td>
          </tr>
          <tr>
            <th scope="row">cell_selection</th>
            <td>String</td>
            <td>No</td>
            <td><mark>sea</mark></td>
            <td>Set a preference how grid-cells are selected. The default <mark>land</mark> finds a suitable grid-cell on land with <a href="https://openmeteo.substack.com/p/improving-weather-forecasts-with" title="Elevation based grid-cell selection explained">similar elevation to the requested coordinates using a 90-meter digital elevation model</a>. 
              <mark>sea</mark> prefers grid-cells on sea. <mark>nearest</mark> selects the nearest possible grid-cell.
            </td>
        </tbody>
      </table>
    </div>
    <p>Additional optional URL parameters will be added. For API stability, no required parameters will be added in the
      future!</p>


    <h3 class="mt-5">Hourly Parameter Definition</h3>
    <p>The parameter <mark>&hourly=</mark> accepts the following values. Most weather variables are given as an
      instantaneous value for the indicated hour. Some variables like precipitation are calculated from the preceding
      hour as an average or sum.</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Variable</th>
            <th scope="col">Valid time</th>
            <th scope="col">Unit</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">wave_height<br />wind_wave_height<br />swell_wave_height</th>
            <td>Instant</td>
            <td>Meter</td>
            <td>Wave height of significant mean, wind and swell waves</td>
          </tr>
          <tr>
            <th scope="row">wave_direction<br />wind_wave_direction<br />swell_wave_direction</th>
            <td>Instant</td>
            <td>°</td>
            <td>Mean direction of mean, wind and swell waves</td>
          </tr>
          <tr>
            <th scope="row">wave_period<br />wind_wave_period<br />swell_wave_period</th>
            <td>Instant</td>
            <td>Seconds</td>
            <td>Period between mean, wind and swell waves.</td>
          </tr>
          <tr>
            <th scope="row">wind_wave_peak_period<br />swell_wave_peak_period</th>
            <td>Instant</td>
            <td>Seconds</td>
            <td>Peak period between wind and swell waves.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="mt-5">Daily Parameter Definition</h3>
    <p>Aggregations are a simple 24 hour aggregation from hourly values. The parameter <mark>&daily=</mark> accepts the
      following values:</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Variable</th>
            <th scope="col">Unit</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">wave_height_max<br />wind_wave_height_max<br />swell_wave_height_max</th>
            <td>Meter</td>
            <td>Maximum wave height on a given day for mean, wind and swell waves</td>
          </tr>
          <tr>
            <th scope="row">wave_direction_dominant<br />wind_wave_direction_dominant<br />swell_wave_direction_dominant
            </th>
            <td>°</td>
            <td>Dominant wave direction of mean, wind and swell waves</td>
          </tr>
          <tr>
            <th scope="row">wave_period_max<br />wind_wave_period_max<br />swell_wave_period_max</th>
            <td>Seconds</td>
            <td>Maximum wave period of mean, wind and swell</td>
          </tr>
          <tr>
            <th scope="row">wind_wave_peak_period_max<br />swell_wave_peak_period_max</th>
            <td>Seconds</td>
            <td>Maximum peak period between wind and swell waves.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="mt-5">JSON Return Object</h3>
    <p>On success a JSON object will be returned.</p>
    <pre>
      <code>
{`
  "latitude": 52.52,
  "longitude": 13.419,
  "elevation": 44.812,
  "generationtime_ms": 2.2119,
  "utc_offset_seconds": 0,
  "timezone": "Europe/Berlin",
  "timezone_abbreviation": "CEST",
  "hourly": {
    "time": ["2022-07-01T00:00", "2022-07-01T01:00", "2022-07-01T02:00", ...],
    "wave_height": [1, 1.7, 1.7, 1.5, 1.5, 1.8, 2.0, 1.9, 1.3, ...]
  },
  "hourly_units": {
    "wave_height": "m"
  },
`}
      </code>
    </pre>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Parameter</th>
            <th scope="col">Format</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">latitude, longitude</th>
            <td>Floating point</td>
            <td>WGS84 of the center of the weather grid-cell which was used to generate this forecast. This coordinate might be a few kilometers away from the requested coordinate.</td>
          </tr>
          <tr>
            <th scope="row">generationtime_ms</th>
            <td>Floating point</td>
            <td>Generation time of the weather forecast in milliseconds. This is mainly used for performance monitoring
              and improvements.</td>
          </tr>
          <tr>
            <th scope="row">utc_offset_seconds</th>
            <td>Integer</td>
            <td>Applied timezone offset from the <mark>&timezone=</mark> parameter.</td>
          </tr>
          <tr>
            <th scope="row">timezone<br />timezone_abbreviation</th>
            <td>String</td>
            <td>Timezone identifier (e.g. <mark>Europe/Berlin</mark>) and abbreviation (e.g. <mark>CEST</mark>)</td>
          </tr>
          <tr>
            <th scope="row">hourly</th>
            <td>Object</td>
            <td>For each selected weather variable, data will be returned as a floating point array. Additionally a
              <mark>time</mark> array will be returned with ISO8601 timestamps.
            </td>
          </tr>
          <tr>
            <th scope="row">hourly_units</th>
            <td>Object</td>
            <td>For each selected weather variable, the unit will be listed here.</td>
          </tr>
          <tr>
            <th scope="row">daily</th>
            <td>Object</td>
            <td>For each selected daily weather variable, data will be returned as a floating point array. Additionally
              a <mark>time</mark> array will be returned with ISO8601 timestamps.</td>
          </tr>
          <tr>
            <th scope="row">daily_units</th>
            <td>Object</td>
            <td>For each selected daily weather variable, the unit will be listed here.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 class="mt-5">Errors</h3>
    <p>In case an error occurs, for example a URL parameter is not correctly specified, a JSON error object is returned
      with a HTTP 400 status code.</p>
    <pre>
      <code>
{`
  "error": true,
  "reason": "Cannot initialize WeatherVariable from invalid String value tempeture_2m for key hourly"
`}
      </code>
    </pre>
  </div>

  <h2 id="citation">Citation & Acknowledgement</h2>
  <p>Generated using ICON Wave forecast from the <a href="https://www.dwd.de/EN/service/copyright/copyright_node.html"
      target="_blank">German Weather Service DWD</a>.</p>
  <p>All users of Open-Meteo data must provide a clear attribution to DWD as well as a reference to Open-Meteo.</p>

