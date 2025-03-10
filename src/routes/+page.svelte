<svelte:head>
    <title>Free Open-Source Weather API | Open-Meteo.com</title> 
    <link rel="canonical" href="https://open-meteo.com/" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  
  onMount(async () => {
      const Tab = await import('bootstrap/js/dist/tab');
  });
</script>

<div class="px-4 py-5 mb-5 text-center text-white" style="
          background-image: url('/images/convective_clouds.webp');
          background-size: cover;
          background-position: center;
          height: 500px;
        ">
  <svg style="filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));" xmlns="http://www.w3.org/2000/svg" width="96"
    height="96" fill="currentColor" class="bi bi-cloud-sun mb-4" viewBox="0 0 16 16">
    <path
      d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
    <path
      d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
  </svg>
  <h1 class="display-5" style="text-shadow: 3px 3px 2px rgba(0, 0, 0, .7);">Free Weather API</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4" style="text-shadow: 3px 3px 2px rgba(0, 0, 0, .7);">Open-Meteo is an open-source weather API
      with free access for non-commercial use. No API key is required. You can use it immediately!</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <a href="/en/features" class="btn btn-primary btn-lg px-4 me-sm-3 mr-2">Features</a>
      <a href="/en/docs" class="btn btn-outline-light btn-lg px-4">Documentation</a>
    </div>
  </div>
</div>

<div class="container col-xxl-8 px-4 py-5">
  <div class="row g-5">
    <div class="col-lg-6">
      <h2 class="display-5 lh-1 mb-3">Hourly 7-day forecast worldwide</h2>
      <p class="lead">Open-Meteo collaborates with national weather services providing open data with 1 to 11 km
        resolution. Our APIs select the best weather models for your location and provide data as a
        simple JSON API.</p>
      <p>Super easy. Enter a location, select weather variables and get a 7-day weather forecast. 60 years historical
        weather data, dozens of weather variables, and multiple weather models buit-in.</p>
      <p>APIs are free without any API key for non-commercial use. You can embed them
        directly into your app, python or react project.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <a href="/en/features" class="btn button btn-primary btn-lg px-4 me-md-2">See features</a>
        <a href="/en/docs" class="btn button btn-outline-secondary btn-lg px-4">Read the docs</a>
      </div>
    </div>
    <div class="col-lg-6 bg-dark text-white p-3 overflow-hidden rounded-3">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="active btn btn-outline-light" id="tab-weather-api-tab" data-bs-toggle="pill"
            data-bs-target="#tab-weather-api" type="button" role="tab" aria-controls="tab-weather-api"
            aria-selected="true">Forecast & Current</button>
        </li>&nbsp;
        <li class="nav-item" role="presentation">
          <button class="btn btn-outline-light" id="tab-last-10-days-tab" data-bs-toggle="pill"
            data-bs-target="#tab-last-10-days" type="button" role="tab" aria-controls="tab-last-10-days"
            aria-selected="false">Last 10 days</button>
        </li>&nbsp;
        <li class="nav-item" role="presentation">
          <button class="btn btn-outline-light " id="tab-historical-weather-data-tab" data-bs-toggle="pill"
            data-bs-target="#tab-historical-weather-data" type="button" role="tab"
            aria-controls="tab-historical-weather-data" aria-selected="false">Historical data</button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="tab-weather-api" role="tabpanel"
          aria-labelledby="tab-weather-api-tab">
          <p>$ curl "<a class="text-white text-decoration-none"
              href="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m">https://api.open-meteo.com/v1/forecast<wbr />?latitude=52.52&amp;longitude=13.41<wbr />&amp;current_weather=true<wbr />&amp;hourly=temperature_2m,relativehumidity_2m,windspeed_10m</a>"</p>
          <pre>
{`
  "current_weather": {
    "time": "2022-01-01T15:00"
    "temperature": 2.4, "weathercode": 3,
    "windspeed": 11.9, "winddirection": 95.0,
  },
  "hourly": {
    "time": ["2022-07-01T00:00","2022-07-01T01:00", ...]
    "windspeed_10m": [3.16,3.02,3.3,3.14,3.2,2.95, ...],
    "temperature_2m": [13.7,13.3,12.8,12.3,11.8, ...],
    "relativehumidity_2m": [82,83,86,85,88,88,84,76, ...],
  }
`}</pre>
        </div>
        <div class="tab-pane fade" id="tab-last-10-days" role="tabpanel" aria-labelledby="tab-last-10-days-tab">
          <p>$ curl "<a class="text-white text-decoration-none"
              href="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m">https://api.open-meteo.com/v1/forecast<wbr />?latitude=52.52&amp;longitude=13.41<wbr /><mark>&amp;past_days=10</mark><wbr />&amp;hourly=temperature_2m,relativehumidity_2m,windspeed_10m</a>"</p>
          <pre>
{`
  "hourly": {
    "time": ["2022-06-19T00:00","2022-06-19T01:00", ...]
    "windspeed_10m": [3.16,3.02,3.3,3.14,3.2,2.95, ...],
    "temperature_2m": [13.7,13.3,12.8,12.3,11.8, ...],
    "relativehumidity_2m": [82,83,86,85,88,88,84,76, ...],
  }
`}</pre>
        </div>
        <div class="tab-pane fade" id="tab-historical-weather-data" role="tabpanel"
          aria-labelledby="tab-historical-weather-data-tab">
          <p>$ curl "<a class="text-white text-decoration-none"
              href="https://archive-api.open-meteo.com/v1/era5?latitude=52.52&longitude=13.41&start_date=2021-01-01&end_date=2021-12-31&hourly=temperature_2m">https://archive-api.open-meteo.com/v1/era5<wbr />?latitude=52.52&amp;longitude=13.41<wbr /><mark>&amp;start_date=2021-01-01<wbr />&amp;end_date=2021-12-31</mark><wbr />&amp;hourly=temperature_2m</a>"
          </p>
          <pre>
{`
  "hourly": {
    "time": ["2022-01-01T00:00","2022-01-01T01:00", ...]
    "temperature_2m": [1.7,1.3,1.8,1.3,1.8, ...],
  }
`}</pre>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container px-4 py-5" id="featured-3">
  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pin-map"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
          <path fill-rule="evenodd"
            d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
        </svg>
      </div>
      <h3>High Resolution</h3>
      <p>Open-Meteo combines global (11 km) and mesoscale (1 km) weather models from national weather
        services into one seamless prediction.
        For every location on earth, the best forecast is available.</p>
      <p>Weather data are provided in hourly resolution with 7 days forecast. Typically, the first 2-3 days are
        calculated with high resolution local weather models, followed by global weather models with up to 16 days of
        forecast. Our APIs
        integrate data seamlessly to offer a simple hourly weather forecast.</p>
    </div>

    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-watch"
          viewBox="0 0 16 16">
          <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z" />
          <path
            d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z" />
        </svg>
      </div>
      <h3>Rapid Updates</h3>
      <p>To continuously correct weather forecasts, our local models update every hour. Open-Meteo
        forecasts are always up to date and capture recent changes in rain radars.</p>
      <p>Weather models use real-time measurements, airplane data, buoys, radar and satellite observations for
        numerical weather predictions. With hourly updates, weather analysis is superior to simple measurement
        stations.</p>
    </div>

    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-archive"
          viewBox="0 0 16 16">
          <path
            d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>
      <h3>60 Years Historical Data</h3>
      <p>Our <a href="/en/docs/historical-weather-api" title="Historical weather data via API">historical weather
          API</a> contains more
        then 60 years of hourly weather data at 25 kilometer resolution. Although based on <a href="https://openmeteo.substack.com/p/60-years-of-historical-weather-as">20 TB of data</a>, you get 60 years of temperature data in the blink of an eye.</p>
      <p>But also our 1 km weather models continously archive data of the last months. You can seamlessly fetch the most recent forecast
        combined with data from the past weeks to train machine learning applications.</p>
    </div>

    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 512 512">
          <path
            d="M336 144C336 126.3 350.3 112 368 112C385.7 112 400 126.3 400 144C400 161.7 385.7 176 368 176C350.3 176 336 161.7 336 144zM336 352C326.5 352 317.2 351.3 308.1 349.8L280.1 376.1C276.5 381.5 270.4 384 264 384H224V424C224 437.3 213.3 448 200 448H160V488C160 501.3 149.3 512 136 512H24C10.75 512 0 501.3 0 488V376C0 369.6 2.529 363.5 7.029 359L162.2 203.9C160.8 194.8 160 185.5 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352zM336 304C406.7 304 464 246.7 464 176C464 105.3 406.7 48 336 48C265.3 48 208 105.3 208 176C208 182.9 208.5 189.7 209.6 196.3L213.4 220.5L47.1 385.9V464H111.1V400H175.1V336H254.1L291.5 298.6L315.7 302.4C322.3 303.5 329.1 304 336 304z" />
        </svg>
      </div>
      <h3>Free API</h3>
      <p>For non-commericial use, Open-Meteo APIs can be used for free without any API key. You do not need to register
        or use a credit-card.</p>
      <p>Please use the service responsibly and give appropriate credit. We do not restrict access, but ask for fair
        use. If you want to use the service commercially or your application exceeds more than 10'000 API calls per day,
        please contact us.</p>
    </div>

    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi bi-github" viewBox="0 0 512 499.36"
          role="img">
          <path fill="currentColor" fill-rule="evenodd"
            d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z">
          </path>
        </svg>
      </div>
      <h3>Open-Source</h3>
      <p>The entire Open-Meteo code is available on <a href="https://github.com/open-meteo/open-meteo"
          title="Open-Meteo GitHub respository">GitHub</a> under <a
          href="https://github.com/open-meteo/open-meteo/blob/main/LICENSE">AGPLv3 licence</a>. You are welcome to run
        your own weather API, contribute and help improve Open-Meteo!</p>
      <p>Data are offered under <a href="https://creativecommons.org/licenses/by/4.0/"
          title="CC BY 4.0 Licence Information">Attribution 4.0 International (CC BY 4.0)</a> licence can be shared and
        adapted freely even for commercial use.</p>
    </div>

    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-lightbulb"
          viewBox="0 0 16 16">
          <path
            d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
        </svg>
      </div>
      <h3>Easy to use</h3>
      <p>Our HTTP based JSON APIs are dead simple. You only need to be familiar with geographic coordinates (like
        52.52°N 13.405°E for Berlin), how to make HTTP request and the JSON data format.</p>
      <p>Documentation with all parameters and an in-depth explanation is available in our <a href="/en/docs">docs</a>.
        It works with any Python, PHP, JavaScript, React, Flutter or Java app.
      </p>
    </div>
  </div>
</div>

<div class="px-4 py-5 my-5 text-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" class="bi bi-mailbox"
    viewBox="0 0 16 16">
    <path
      d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
    <path
      d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
  </svg>
  <h1 id="contact" class="display-5 fw-bold">Stay up to date!</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">Open-Meteo is advancing rapidly and adding constantly new features, weather variables and data
      sources. Do you want to stay up to date? Subscribe to our <a href="https://openmeteo.substack.com/"
        target="_blank">blog</a> or follow us on <a href="https://twitter.com/open_meteo" target="_blank">Twitter</a>.
    </p>
  </div>
  <iframe title="Subscribe to blog" src="https://openmeteo.substack.com/embed" width="100%" height="320" s
    frameborder="0" scrolling="no"></iframe>
</div>