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
    <title>MET Norway API | Open-Meteo.com</title> 
    <link rel="canonical" href="https://open-meteo.com/en/docs/metno-api" />
</svelte:head>

<div class="alert alert-primary" role="alert">
  The API makes use of MET Nordic weather models exclusively for North Europe, offering exceptional short-term weather forecasts with hourly updates and 1 km resolution. However, for longer forecasts of up to 16 days, the <a href="/en/docs">generic Weather Forecast API</a> transparently combines MET Nordic with other weather models to take advantage of hourly updates.
</div>

  <form id="api_form" method="get" action="https://api.open-meteo.com/v1/metno">
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
      <h2>Hourly Weather Variables</h2>
      <div class="col-md-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="temperature_2m" id="temperature_2m" name="hourly"
            checked>
          <label class="form-check-label" for="temperature_2m">
            Temperature (2 m)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="apparent_temperature" id="apparent_temperature"
            name="hourly">
          <label class="form-check-label" for="apparent_temperature">
            Apparent Temperature
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="dewpoint_2m" id="dewpoint_2m" name="hourly">
          <label class="form-check-label" for="dewpoint_2m">
            Dewpoint (2 m)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="relativehumidity_2m" id="relativehumidity_2m" name="hourly">
          <label class="form-check-label" for="relativehumidity_2m">
            Relative Humidity (2 m)
          </label>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="weathercode" id="weathercode" name="hourly">
          <label class="form-check-label" for="weathercode">
            Weathercode
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="cloudcover" id="cloudcover" name="hourly">
          <label class="form-check-label" for="cloudcover">
            Cloud Cover
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="pressure_msl" id="pressure_msl" name="hourly">
          <label class="form-check-label" for="pressure_msl">
            Sealevel Pressure
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="surface_pressure" id="surface_pressure"
            name="hourly">
          <label class="form-check-label" for="surface_pressure">
            Surface Air Pressure
          </label>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="precipitation" id="precipitation" name="hourly">
          <label class="form-check-label" for="precipitation">
            Precipitation (rain + snow)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="snowfall" id="snowfall" name="hourly">
          <label class="form-check-label" for="snowfall">
            Snowfall
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="et0_fao_evapotranspiration"
            id="et0_fao_evapotranspiration" name="hourly">
          <label class="form-check-label" for="et0_fao_evapotranspiration">
            Reference Evapotranspiration (ET₀)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="vapor_pressure_deficit" id="vapor_pressure_deficit"
            name="hourly">
          <label class="form-check-label" for="vapor_pressure_deficit">
            Vapor Pressure Deficit
          </label>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="windspeed_10m" id="windspeed_10m" name="hourly">
          <label class="form-check-label" for="windspeed_10m">
            Wind Speed (10 m)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="winddirection_10m" id="winddirection_10m"
            name="hourly">
          <label class="form-check-label" for="winddirection_10m">
            Wind Direction (10 m)
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="windgusts_10m" id="windgusts_10m" name="hourly">
          <label class="form-check-label" for="windgusts_10m">
            Wind Gusts (10 m)
          </label>
        </div>
      </div>
    </div>


    <div class="row py-3 px-0">
      <div class="accordion" id="accordionVariables">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading-solar-variables">
            <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapse-solar-variables" aria-expanded="false" aria-controls="collapse-solar-variables">
              Solar Radiation Variables &nbsp;<span class="badge rounded-pill bg-secondary checkboxcounter"
                data-count-checkboxes-of="#collapse-solar-variables">0/x</span>
            </button>
          </h2>
          <div id="collapse-solar-variables" class="accordion-collapse collapse"
            aria-labelledby="heading-solar-variables" data-bs-parent="#accordionVariables">
            <div class="accordion-body row">
              <div class="col-md-6">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="shortwave_radiation" id="shortwave_radiation"
                    name="hourly">
                  <label class="form-check-label" for="shortwave_radiation">
                    Shortwave Solar Radiation
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="direct_radiation" id="direct_radiation"
                    name="hourly">
                  <label class="form-check-label" for="direct_radiation">
                    Direct Solar Radiation
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="diffuse_radiation" id="diffuse_radiation"
                    name="hourly">
                  <label class="form-check-label" for="diffuse_radiation">
                    Diffuse Solar Radiation
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="direct_normal_irradiance"
                    id="direct_normal_irradiance" name="hourly">
                  <label class="form-check-label" for="direct_normal_irradiance">
                    Direct Normal Irradiance DNI
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="terrestrial_radiation"
                    id="terrestrial_radiation" name="hourly">
                  <label class="form-check-label" for="terrestrial_radiation">
                    Terrestrial Solar Radiation
                  </label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="shortwave_radiation_instant"
                    id="shortwave_radiation_instant" name="hourly">
                  <label class="form-check-label" for="shortwave_radiation_instant">
                    Shortwave Solar Radiation (Instant)
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="direct_radiation_instant"
                    id="direct_radiation_instant" name="hourly">
                  <label class="form-check-label" for="direct_radiation_instant">
                    Direct Solar Radiation (Instant)
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="diffuse_radiation_instant"
                    id="diffuse_radiation_instant" name="hourly">
                  <label class="form-check-label" for="diffuse_radiation_instant">
                    Diffuse Solar Radiation (Instant)
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="direct_normal_irradiance_instant"
                    id="direct_normal_irradiance_instant" name="hourly">
                  <label class="form-check-label" for="direct_normal_irradiance_instant">
                    Direct Normal Irradiance DNI (Instant)
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="terrestrial_radiation_instant"
                    id="terrestrial_radiation_instant" name="hourly">
                  <label class="form-check-label" for="terrestrial_radiation_instant">
                    Terrestrial Solar Radiation (Instant)
                  </label>
                </div>
              </div>
              <div class="col-md-12">
                <small class="text-muted">Note: Solar radiation is averaged over the past hour. Use <mark>instant</mark>
                  for radiation at the indicated time.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row py-3 px-0">
      <h2>Settings</h2>
      <div class="col-12 pb-3">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="current_weather" name="current_weather" value="true">
          <label class="form-check-label" for="current_weather">Current weather with temperature, windspeed and weather
            code</label>
        </div>
      </div>
      <div class="col-3">
        <div class="form-floating mb-3">
          <select class="form-select" name="temperature_unit" id="temperature_unit" aria-label="Temperature Unit"
            data-default="celsius">
            <option selected value="celsius">Celsius °C</option>
            <option value="fahrenheit">Fahrenheit °F</option>
          </select>
          <label for="temperature_unit">Temperature Unit</label>
        </div>
      </div>
      <div class="col-3">
        <div class="form-floating mb-3">
          <select class="form-select" name="windspeed_unit" id="windspeed_unit" aria-label="Windspeed Unit"
            data-default="kmh">
            <option selected value="kmh">Km/h</option>
            <option value="ms">m/s</option>
            <option value="mph">Mph</option>
            <option value="kn">Knots</option>
          </select>
          <label for="windspeed_unit">Wind Speed Unit</label>
        </div>
      </div>
      <div class="col-3">
        <div class="form-floating mb-3">
          <select class="form-select" name="precipitation_unit" id="precipitation_unit" aria-label="Precipitation Unit"
            data-default="mm">
            <option selected value="mm">Millimeter</option>
            <option value="inch">Inch</option>
          </select>
          <label for="precipitation_unit">Precipitation Unit</label>
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
    <h2 id="data-sources">Data Source</h2>
    <p>This API uses local weather models from the Norwegian Meteorological Institute. The <a href="https://github.com/metno/NWPdocs/wiki/MET-Nordic-dataset" target="_blank">MET Nordic</a> dataset is derived from the 2.5 km MetCoOp ensemble model with ECMWF initialization. With post-processing based on measurement & radar and with updates every hour, the short-term forecast performance skill should be high.</p>
    <p>Unfortunately, only 2.5 days of forecast are available. The Open-Meteo <a href="/en/docs">weather forecast API</a> automatically uses MET Nordic in combination with larger scale models to offer a 7 days forecast.</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Weather Model</th>
            <th scope="col">Region</th>
            <th scope="col">Spatial Resolution</th>
            <th scope="col">Temporal Resolution</th>
            <th scope="col">Forecast Length</th>
            <th scope="col">Update frequency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><a href="https://github.com/metno/NWPdocs/wiki/MET-Nordic-dataset" target="_blank">MET Nordic</a></th>
            <td>Norway, Denmark, Sweden, Finland</td>
            <td>1 km</td>
            <td>Hourly</td>
            <td>2.5 days</td>
            <td>Every hour</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="api-documentation" class="mt-5">API Documentation</h2>
    <p>The API endpoint <mark>/v1/metno</mark> accepts a geographical coordinate, a list of weather variables and
      responds with a JSON hourly weather forecast for 2.5 days. Time always starts at 0:00 today. Data is only available in the Scandinavian region.
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
            <th scope="row">elevation</th>
            <td>Floating point</td>
            <td>No</td>
            <td></td>
            <td>The elevation used for statistical downscaling. Per default, a <a href="https://openmeteo.substack.com/p/improving-weather-forecasts-with" title="Elevation based grid-cell selection explained">90 meter digital elevation model is used</a>. You can manually set the elevation to correctly match mountain peaks. 
              If <mark>&elevation=nan</mark> is specified, downscaling will be disabled and the API uses the average grid-cell height.</td>
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
            <th scope="row">current_weather</th>
            <td>Bool</td>
            <td>No</td>
            <td><mark>false</mark></td>
            <td>Include current weather conditions in the JSON output.</td>
          </tr>
          <tr>
            <th scope="row">temperature_unit</th>
            <td>String</td>
            <td>No</td>
            <td><mark>celsius</mark></td>
            <td>If <mark>fahrenheit</mark> is set, all temperature values are converted to Fahrenheit.</td>
          </tr>
          <tr>
            <th scope="row">windspeed_unit</th>
            <td>String</td>
            <td>No</td>
            <td><mark>kmh</mark></td>
            <td>Other wind speed speed units: <mark>ms</mark>, <mark>mph</mark> and <mark>kn</mark></td>
          </tr>
          <tr>
            <th scope="row">precipitation_unit</th>
            <td>String</td>
            <td>No</td>
            <td><mark>mm</mark></td>
            <td>Other precipitation amount units: <mark>inch</mark></td>
          </tr>
          <tr>
            <th scope="row">timeformat</th>
            <td>String</td>
            <td>No</td>
            <td><mark>iso8601</mark></td>
            <td>If format <mark>unixtime</mark> is selected, all time values are returned in UNIX epoch time in seconds.
              Please note that all time is then in GMT+0! For daily values with unix timestamp, please apply
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
            <td><mark>land</mark></td>
            <td>Set a preference how grid-cells are selected. The default <mark>land</mark> finds a suitable grid-cell on land with <a href="https://openmeteo.substack.com/p/improving-weather-forecasts-with" title="Elevation based grid-cell selection explained">similar elevation to the requested coordinates using a 90-meter digital elevation model</a>. 
              <mark>sea</mark> prefers grid-cells on sea. <mark>nearest</mark> selects the nearest possible grid-cell.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Additional optional URL parameters will be added. For API stability, no required parameters will be added in the
      future!</p>


    <h3 class="mt-5">Hourly Parameter Definition</h3>
    <p>The parameter <mark>&hourly=</mark> accepts the following values. Most weather variables are given as an
      instantaneous value for the indicated hour. Some variables like precipitation are calculated from the preceding
      hour as and average or sum.</p>
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
            <th scope="row">precipitation</th>
            <td>Preceding hour sum</td>
            <td>mm (inch)</td>
            <td>Total precipitation (rain, showers, snow) sum of the preceding hour</td>
          </tr>
          <tr>
            <th scope="row">pressure_msl<br>surface_pressure</th>
            <td>Instant</td>
            <td>hPa</td>
            <td>Atmospheric air pressure reduced to sea level (Mean sea level) and actual pressure at surface level</td>
          </tr>
          <tr>
            <th scope="row">temperature_2m</th>
            <td>Instant</td>
            <td>°C (°F)</td>
            <td>Air temperature at 2 meters above ground</td>
          </tr>
          <tr>
            <th scope="row">relativehumidity_2m</th>
            <td>Instant</td>
            <td>%</td>
            <td>Relative humidity at 2 meters above ground</td>
          </tr>
          <tr>
            <th scope="row">dewpoint_2m</th>
            <td>Instant</td>
            <td>°C (°F)</td>
            <td>Dew point temperature at 2 meters above ground</td>
          </tr>
          <tr>
            <th scope="row">apparent_temperature</th>
            <td>Instant</td>
            <td>°C (°F)</td>
            <td>Apparent temperature is the perceived feels-like temperature combining wind chill factor, relative
              humidity and solar radiation</td>
          </tr>
          <tr>
            <th scope="row">cloudcover</th>
            <td>Instant</td>
            <td>%</td>
            <td>Total cloud cover as an area fraction</td>
          </tr>

          <tr>
            <th scope="row">windspeed_10m</th>
            <td>Instant</td>
            <td>km/h (mph, m/s, knots)</td>
            <td>Wind speed at 10 meters above ground. Wind speed on 10 meters is the standard level..</td>
          </tr>
          <tr>
            <th scope="row">winddirection_10m</th>
            <td>Instant</td>
            <td>°</td>
            <td>Wind direction at 10 meters above ground.</td>
          </tr>
          <tr>
            <th scope="row">windgusts_10m</th>
            <td>Preceding hour max</td>
            <td>km/h (mph, m/s, knots)</td>
            <td>Gusts at 10 meters above ground as a maximum of the preceding hour</td>
          </tr>
          <tr>
            <th scope="row">shortwave_radiation</th>
            <td>Preceding hour mean</td>
            <td>W/m²</td>
            <td>Shortwave solar radiation as average of the preceding hour. This is equal to the total global horizontal
              irradiation </td>
          </tr>
          <tr>
            <th scope="row">direct_radiation<br />direct_normal_irradiance</th>
            <td>Preceding hour mean</td>
            <td>W/m²</td>
            <td>Direct solar radiation as average of the preceding hour on the horizontal plane and the normal plane
              (perpendicular to the sun)</td>
          </tr>
          <tr>
            <th scope="row">diffuse_radiation</th>
            <td>Preceding hour mean</td>
            <td>W/m²</td>
            <td>Diffuse solar radiation as average of the preceding hour. MET Nordic does not offers diffuse and direct radiation directly. It is approximated based on <a href="https://www.ise.fraunhofer.de/content/dam/ise/de/documents/publications/conference-paper/36-eupvsec-2019/Guzman_5CV31.pdf" target="_blank">Razo, Müller Witwer</a></td>
          </tr>
          <tr>
            <th scope="row">vapor_pressure_deficit</th>
            <td>Instant</td>
            <td>kPa</td>
            <td>Vapor Pressure Deificit (VPD) in kilopascal (kPa). For high VPD (&gt;1.6), water transpiration of plants
              increases. For low VPD (&lt;0.4), transpiration decreases</td>
          </tr>
          <tr>
            <th scope="row">et0_fao_evapotranspiration</th>
            <td>Preceding hour sum</td>
            <td>mm (inch)</td>
            <td>ET₀ Reference Evapotranspiration of a well watered grass field. Based on <a
                href="https://www.fao.org/3/x0490e/x0490e04.htm" target="_blank">FAO-56 Penman-Monteith equations</a> ET₀
                  is calculated from temperature, wind speed, humidity and solar radiation. Unlimited soil water is
                  assumed. ET₀ is commonly used to estimate the required irrigation for plants.</td>
          </tr>
          <tr>
            <th scope="row">weathercode</th>
            <td>Instant</td>
            <td>WMO code</td>
            <td>Weather condition as a numeric code. Follow WMO weather interpretation codes. See table below for
              details. Weather code is calculated from cloud cover analysis, precipitation, snowfall and gusts. As MET Nordic has barely no information about atmospheric stability, estimation about thunderstorms is not possible.</td>
          </tr>
          <tr>
            <th scope="row">snowfall</th>
            <td>Preceding hour sum</td>
            <td>cm (inch)</td>
            <td>Snowfall amount of the preceding hour in centimeters. For the water equivalent in millimeter, divide by
              7. E.g. 7 cm snow = 10 mm precipitation water equivalent. Snowfall amount is not provided by MET Nordic directly, instead it is approximated based on total precipitation and temperature</td>
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
            <th scope="row">current_weather</th>
            <td>Object</td>
            <td>Current weather conditions with the attributes: <mark>time</mark>, <mark>temperature</mark>,
              <mark>windspeed</mark>, <mark>winddirection</mark> and <mark>weathercode</mark>
            </td>
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