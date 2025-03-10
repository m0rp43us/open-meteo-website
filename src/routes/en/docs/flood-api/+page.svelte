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
    <title>Flood API | Open-Meteo.com</title> 
    <link rel="canonical" href="https://open-meteo.com/en/docs/flood-api" />
</svelte:head>


  <form id="api_form" method="get" action="https://flood-api.open-meteo.com/v1/flood">
    <div class="row">
      <h2>Select Coordinates or City</h2>
      <div class="col-md-3">
        <div class="form-floating">
          <input type="number" step="0.0001" class="form-control" name="latitude" id="latitude" value="59.91">
          <label for="latitude">Latitude</label>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-floating">
          <input type="number" step="0.0001" class="form-control" name="longitude" id="longitude" value="10.75">
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
      <h2>Daily Weather Variables</h2>
      <div class="col-md-6">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="river_discharge" id="river_discharge" name="daily"
            checked>
          <label class="form-check-label" for="river_discharge">
            River Discharge
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="river_discharge_mean" id="river_discharge_mean" name="daily"
            >
          <label class="form-check-label" for="river_discharge_mean">
            River Discharge Mean
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="river_discharge_median" id="river_discharge_median" name="daily"
            >
          <label class="form-check-label" for="river_discharge_median">
            River Discharge Median
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="river_discharge_max" id="river_discharge_max" name="daily"
            >
          <label class="form-check-label" for="river_discharge_max">
            River Discharge Maximum
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="river_discharge_min" id="river_discharge_min" name="daily"
            >
          <label class="form-check-label" for="river_discharge_min">
            River Discharge Minimum
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="river_discharge_p25" id="river_discharge_p25" name="daily"
            >
          <label class="form-check-label" for="river_discharge_p25">
            River Discharge 25<sup>th</sup> Percentile
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="river_discharge_p75" id="river_discharge_p75" name="daily"
            >
          <label class="form-check-label" for="river_discharge_p75">
            River Discharge 75<sup>th</sup> Percentile
          </label>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="ensemble" name="ensemble" value="true">
          <label class="form-check-label" for="ensemble">All 50 Ensemble Members</label>
        </div>
        <p class="mt-2"><small class="text-muted">Note: Statistical and ensemble forecasts are only available for forecasts.</small></p>
      </div>
    </div>

    <div class="row py-3 px-0">
      <div class="accordion" id="accordionVariables">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading-models">
            <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapse-models" aria-expanded="false" aria-controls="collapse-models">
              Flood models&nbsp;<span class="badge rounded-pill bg-secondary checkboxcounter"
                data-count-checkboxes-of="#collapse-models">0/x</span>
            </button>
          </h2>
          <div id="collapse-models" class="accordion-collapse collapse"
            aria-labelledby="heading-models" data-bs-parent="#accordionVariables">
            <div class="accordion-body row">
              <div class="col-md-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="seamless_v3" id="seamless_v3"
                    name="models">
                  <label class="form-check-label" for="seamless_v3">
                    GloFAS v3 Seamless
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="forecast_v3"
                    id="forecast_v3" name="models">
                  <label class="form-check-label" for="forecast_v3">
                    GloFAS v3 Forecast
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="consolidated_v3"
                    id="consolidated_v3" name="models">
                  <label class="form-check-label" for="consolidated_v3">
                    GloFAS v3 Consolidated
                  </label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="seamless_v4"
                    id="seamless_v4" name="models" disabled>
                  <label class="form-check-label" for="seamless_v4">
                    GloFAS v4 Seamless
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="forecast_v4"
                    id="forecast_v3" name="models" disabled>
                  <label class="form-check-label" for="forecast_v4">
                    GloFAS v4 Forecast
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="consolidated_v4"
                    id="consolidated_v4" name="models">
                  <label class="form-check-label" for="consolidated_v4">
                    GloFAS v4 Consolidated
                  </label>
                </div>
              </div>
              <div class="col-md-12">
                <p class="mt-2"><small class="text-muted">Note: <mark>Seamless</mark> combines forecast and consolidated historical data. Per default, GloFAS version 3 with seamless data from 1984 until 7 months of forecast is used. For Version 4, no forecast is available yet.</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row py-3 px-0">
      <h2>Settings</h2>
      <div class="col-3">
        <div class="form-floating">
          <input type="text" class="form-control" data-provide="datepicker" data-date-format="yyyy-mm-dd"
            data-date-start-date="1984-01-01" data-default="" name="start_date" id="start_date"><span
            class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
          <label for="start_date">Start date</label>
        </div>
      </div>
      <div class="col-3">
        <div class="form-floating">
          <input type="text" class="form-control" data-provide="datepicker" data-date-format="yyyy-mm-dd"
            data-date-start-date="1984-01-01" data-default="" name="end_date" id="end_date"><span
            class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
          <label for="end_date">End date</label>
        </div>
      </div>
      <div class="col-3">
        <div class="form-floating mb-3">
          <select class="form-select" name="past_days" id="past_days" aria-label="Past days" data-default="0">
            <option selected value="0">0</option>
            <option value="1">1 day</option>
            <option value="7">1 week</option>
            <option value="31">1 month</option>
            <option value="92">3 months</option>
            <option value="183">6 months</option>
            <option value="356">1 year</option>
          </select>
          <label for="past_days">Past days</label>
        </div>
      </div>
      <div class="col-3">
        <div class="form-floating mb-3">
          <select class="form-select" name="forecast_days" id="forecast_days" aria-label="Forecast days"
            data-default="92">
            <option value="1">1 day</option>
            <option value="7">7 days</option>
            <option value="14">2 weeks</option>
            <option value="31">1 month</option>
            <option selected value="92">3 months</option>
            <option value="183">6 months</option>
          </select>
          <label for="forecast_days">Forecast days</label>
        </div>
      </div>
      <div class="col-3">
        <div class="form-floating mb-3">
          <select class="form-select" name="timeformat" id="timeformat" aria-label="Timeformat" data-default="iso8601">
            <option selected value="iso8601">ISO 8601 (e.g. 2022-12-31)</option>
            <option value="unixtime">Unix timestamp</option>
          </select>
          <label for="timeformat">Timeformat</label>
        </div>
      </div>
      <!--<div class="col-3">
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
      </div>-->
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
    <h2 id="data-sources">Data Source</h2>
    <p>This API uses reanalysis and forecast data from the <a href="https://www.globalfloods.eu" target="_blank">Global Flood Awareness System (GloFAS)</a>. Per default, GloFAS version 3 with seamless data from 1984 until 7 months of forecast is used. Data from version 4 have been available since 16. November 2022, but only as historical reanalysis data.</p>
    <p>Please note: Due to the 5-10 km resolution the closest river might not be selected correctly. Varying coordiantes by 0.1° can help to get a more representable discharge rate. The GloFAS website provides additional maps to help understand how rivers are covered in this dataset.</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Weather Model</th>
            <th scope="col">Region</th>
            <th scope="col">Spatial Resolution</th>
            <th scope="col">Temporal Resolution</th>
            <th scope="col">Data Length</th>
            <th scope="col">Update frequency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><a href="https://cds.climate.copernicus.eu/cdsapp#!/dataset/cems-glofas-historical?tab=overview" target="_blank">GloFAS v3 Reanalysis</a></th>
            <td>Global</td>
            <td>0.1° (~11 km)</td>
            <td>Daily</td>
            <td>1984 - July 2022</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row"><a href="https://cds.climate.copernicus.eu/cdsapp#!/dataset/cems-glofas-forecast?tab=overview" target="_blank">GloFAS v3 Forecast</a></th>
            <td>Global</td>
            <td>0.1° (~11 km)</td>
            <td>Daily</td>
            <td>30 days forecast</td>
            <td>Daily</td>
          </tr>
          <tr>
            <th scope="row"><a href="https://cds.climate.copernicus.eu/cdsapp#!/dataset/cems-glofas-seasonal?tab=overview" target="_blank">GloFAS v3 Seasonal Forecast</a></th>
            <td>Global</td>
            <td>0.1° (~11 km)</td>
            <td>Daily</td>
            <td>7 months forecast</td>
            <td>Monthly</td>
          </tr>
          <tr>
            <th scope="row"><a href="https://cds.climate.copernicus.eu/cdsapp#!/dataset/cems-glofas-historical?tab=overview" target="_blank">GloFAS v4 Reanalysis</a></th>
            <td>Global</td>
            <td>0.05° (~5 km)</td>
            <td>Daily</td>
            <td>1984 - July 2022</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">GloFAS v4 Forecast *</th>
            <td>Global</td>
            <td>0.05° (~5 km)</td>
            <td>Daily</td>
            <td>30 days forecast</td>
            <td>Daily</td>
          </tr>
          <tr>
            <th scope="row">GloFAS v4 Seasonal Forecast *</th>
            <td>Global</td>
            <td>0.05° (~5 km)</td>
            <td>Daily</td>
            <td>7 months forecast</td>
            <td>Monthly</td>
          </tr>
        </tbody>
      </table>
      <small class="text-muted">* Forecasts of version 4 are not yet available</small>
    </div>

    <h2 id="api-documentation" class="mt-5">API Documentation</h2>
    <p>The API endpoint <mark>/v1/flood</mark> accepts a geographical coordinate and returns river discharge data from the largest river in a 5 km area for the given coordinates.
      All URL parameters are listed below:</p>
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
            <th scope="row">daily</th>
            <td>String array</td>
            <td>No</td>
            <td></td>
            <td>A list of weather variables which should be returned. Values can be comma separated, or multiple
              <mark>&daily=</mark> parameter in the URL can be used.
            </td>
          </tr>
          <tr>
            <th scope="row">timeformat</th>
            <td>String</td>
            <td>No</td>
            <td><mark>iso8601</mark></td>
            <td>If format <mark>unixtime</mark> is selected, all time values are returned in UNIX epoch time in seconds.
              Please note that all time is then in GMT+0!
            </td>
          </tr>
          <tr>
            <th scope="row">past_days</th>
            <td>Integer</td>
            <td>No</td>
            <td><mark>0</mark></td>
            <td>If <mark>past_days</mark> is set, past data can be returned.</td>
          </tr>
          <tr>
            <th scope="row">forecast_days</th>
            <td>Integer (0-16)</td>
            <td>No</td>
            <td><mark>92</mark></td>
            <td>Per default, only 92 days are returned. Up to 210 days of forecast are possible.</td>
          </tr>
          <tr>
            <th scope="row">start_date<br />end_date</th>
            <td>String (yyyy-mm-dd)</td>
            <td>No</td>
            <td></td>
            <td>The time interval to get data. A day must be specified as an ISO8601 date (e.g.
              <mark>2022-06-30</mark>). Data are available from 1984-01-01 until 7 month forecast.
            </td>
          </tr>
          <tr>
            <th scope="row">ensemble</th>
            <td>Boolean</td>
            <td>No</td>
            <td></td>
            <td>If <mark>True</mark> all forecast ensemble members will be returned</td>
          </tr>
          <tr>
            <th scope="row">cell_selection</th>
            <td>String</td>
            <td>No</td>
            <td><mark>nearest</mark></td>
            <td>Set a preference how grid-cells are selected. The default <mark>land</mark> finds a suitable grid-cell on land with <a href="https://openmeteo.substack.com/p/improving-weather-forecasts-with" title="Elevation based grid-cell selection explained">similar elevation to the requested coordinates using a 90-meter digital elevation model</a>. 
              <mark>sea</mark> prefers grid-cells on sea. <mark>nearest</mark> selects the nearest possible grid-cell.
            </td>
        </tbody>
      </table>
    </div>
    <p>Additional optional URL parameters will be added. For API stability, no required parameters will be added in the
      future!</p>


      <h3 class="mt-5">Daily Parameter Definition</h3>
      <p>The parameter <mark>&daily=</mark> accepts the
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
              <th scope="row">river_discharge</th>
              <td>m³/s</td>
              <td>Daily river discharge rate in m³/s</td>
            </tr>
            <tr>
              <th scope="row">river_discharge_mean<br/>river_discharge_median<br/>river_discharge_max<br/>river_discharge_min<br/>river_discharge_p25<br/>river_discharge_p75</th>
              <td>m³/s</td>
              <td>Statistical analysis from ensemble members for river discharge rate in m³/s. Only available for forecasts and not for consolidated historical data.</td>
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
  "generationtime_ms": 2.2119,
  "timezone": "Europe/Berlin",
  "timezone_abbreviation": "CEST",
  "hourly": {
    "time": ["2022-07-01T00:00", "2022-07-01T01:00", "2022-07-01T02:00", ...],
    "temperature_2m": [13, 12.7, 12.7, 12.5, 12.5, 12.8, 13, 12.9, 13.3, ...]
  },
  "hourly_units": {
    "temperature_2m": "°C"
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
            <th scope="row">daily</th>
            <td>Object</td>
            <td>For each selected weather variable, data will be returned as a floating point array. Additionally a
              <mark>time</mark> array will be returned with ISO8601 timestamps.
            </td>
          </tr>
          <tr>
            <th scope="row">daily_units</th>
            <td>Object</td>
            <td>For each selected weather variable, the unit will be listed here.</td>
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
