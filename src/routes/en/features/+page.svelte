<svelte:head>
    <title>Features | Open-Meteo.com</title> 
    <link rel="canonical" href="https://open-meteo.com/en/features" />
</svelte:head>

<div class="px-4 py-5 text-center text-white" style="
            background-image: url('/images/features_background.webp');
            background-size: cover;
            background-position: center;
            height: 500px;
          ">
  <svg style="filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));" xmlns="http://www.w3.org/2000/svg" width="96"
    height="96" fill="currentColor" class="bi bi-cloud-rain mb-4" viewBox="0 0 16 16">
    <path
      d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z" />
  </svg>
  <h1 class="display-5" style="text-shadow: 3px 3px 2px rgba(0, 0, 0, .7);">Features</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4" style="text-shadow: 3px 3px 2px rgba(0, 0, 0, .7);">Easily integrate high accuracy weather
      forecasts in your applications. Simple JSON APIs for hourly data, globally available at up to 1 km resolution.
    </p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <a href="/en/docs" class="btn button btn-primary btn-lg px-4 me-sm-3">API Documentation</a>
      <a href="#terms" class="btn btn-outline-light btn-lg px-4">Terms &#x26; License</a>
    </div>
  </div>
</div>
<!--<div class="mb-5" style="border-bottom: 1px solid #ddd">
  <div class="container px-4 py-1">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a class="link-secondary" href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Features</li>
      </ol>
    </nav>
  </div>
</div>-->

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
      <h2>Local Models</h2>
      <p>Open-Meteo combines local (1 km resolution) and global (11 km) weather models from national weather services.
        For every location on earth, the best forecast is available.</p>
      <p>National weather services include <a href="https://www.dwd.de/" title="German Weather Service">Deutscher Wetter
          Dienst (DWD)</a>, <a href="https://www.noaa.gov/" title="American Weather Service">National Oceanic and
          Atmospheric Administration (NOAA)</a>, <a href="https://meteofrance.com/"
          title="French Weather Service">Meteofrance</a> and <a href="https://weather.gc.ca"
          title="Canadian Weather Serice">Canadian Meteorological Center (CMC)</a>.</p>
    </div>
    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-lightning"
          viewBox="0 0 16 16">
          <path
            d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
        </svg>
      </div>
      <h2>High Resolution</h2>
      <p>Open-Meteo APIs select the highest resolution weather model for your location. For locations in Europe and the
        US, 2 km high resolution models are used.</p>
      <p>Weather data are provided in hourly resolution with 7 days forecast. Typically, the first 2-3 days hours are
        calculated with high resolution weather models, followed by global weather models up to 180 hours. Our APIs
        integrate data seamlessly to offer a simple hourly 7-day forecast.</p>
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
      <h2>Hourly Updates</h2>
      <p>To continuously correct weather forecasts, our local 1 km resolution models update every hour. Open-Meteo
        forecasts are always up to date.</p>
      <p>Weather models use real-time measurements, airplane data, buoys, rain radar and satellite observations for
        numerical weather predictions.</p>
    </div>
    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-archive"
          viewBox="0 0 16 16">
          <path
            d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>
      <h2>60 years historical data</h2>
      <p>Our <a href="/en/docs/historical-weather-api">Historical Weather API</a> contains more
        then 60 years of hourly weather data at 25 kilometer resolution.</p>
      <p>All APIs continously archive data. You can seamlessly fetch the most recent forecast combined with multiple
        weeks of past data to train machine learning applications.</p>
    </div>
    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-tsunami"
          viewBox="0 0 16 16">
          <path
            d="M.036 12.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zm0 2a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zM2.662 8.08c-.456 1.063-.994 2.098-1.842 2.804a.5.5 0 0 1-.64-.768c.652-.544 1.114-1.384 1.564-2.43.14-.328.281-.68.427-1.044.302-.754.624-1.559 1.01-2.308C3.763 3.2 4.528 2.105 5.7 1.299 6.877.49 8.418 0 10.5 0c1.463 0 2.511.4 3.179 1.058.67.66.893 1.518.819 2.302-.074.771-.441 1.516-1.02 1.965a1.878 1.878 0 0 1-1.904.27c-.65.642-.907 1.679-.71 2.614C11.076 9.215 11.784 10 13 10h2.5a.5.5 0 0 1 0 1H13c-1.784 0-2.826-1.215-3.114-2.585-.232-1.1.005-2.373.758-3.284L10.5 5.06l-.777.388a.5.5 0 0 1-.447 0l-1-.5a.5.5 0 0 1 .447-.894l.777.388.776-.388a.5.5 0 0 1 .447 0l1 .5a.493.493 0 0 1 .034.018c.44.264.81.195 1.108-.036.328-.255.586-.729.637-1.27.05-.529-.1-1.076-.525-1.495-.426-.42-1.19-.77-2.477-.77-1.918 0-3.252.448-4.232 1.123C5.283 2.8 4.61 3.738 4.07 4.79c-.365.71-.655 1.433-.945 2.16-.15.376-.301.753-.463 1.13z" />
        </svg>
      </div>
      <h2>Specialised forecasts</h2>
      <p>Not only standard forecasts for temperature, clouds and rain are available, but also detailed predictions for
        solar radiation, winds at higher altitude, transpiration, soil moisture, soil temperature, waves or air quality.
      </p>
    </div>
    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cloud-haze2"
          viewBox="0 0 512 512">
          <path
            d="M503 394L280 44C275 36 265 32 256 32C247 32 237 36 232 44L9 394C-2 411 -3 433 7 451C17 469 36 480 56 480H456C476 480 495 469 505 451C515 433 514 411 503 394ZM256 66L347 208H256C251 208 246 210 243 214L208 261L173 214C171 212 168 210 165 209L256 66ZM477 436C473 443 465 448 456 448H56C47 448 39 443 35 436C31 428 31 418 36 411L145 240H152L195 298C198 302 203 304 208 304S218 302 221 298L264 240H367L476 411C481 418 481 428 477 436Z" />
        </svg>
      </div>
      <h2>Geocoding, Elevation, Timezones</h2>
      <p>A collection of utility APIs make it easy to resolve city names to coordinates, find the elevation for points
        or automatically resolve coordinates to timezones.</p>
    </div>
  </div>
</div>

<div class="container px-4 py-5" id="icon-grid">
  <h2 id="weathervariables" class="pb-2 border-bottom">Available Weather Variables</h2>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
    <div class="col d-flex align-items-start">
      <div>
        <h3 class="fw-bold mb-0">Temperature</h3>
        <p>Temperature forecasts from weather models are comparable to weather station measurements at 2 meter above
          ground. The modeled temperature is an average over a small area (1-11 km). Local effect like heat radiation
          from streets and buildings are not represented.</p>
      </div>
    </div>
    <div class="col d-flex align-items-start">
      <div>
        <h3 class="fw-bold mb-0">Apparent temperature</h3>
        <p>High humidity, wind, and direct sunlight influence how temperature is perceived. Apparent temperature is a
          better indicator how temperature is felt for humans.</p>
      </div>
    </div>
    <div class="col d-flex align-items-start">
      <div>
        <h3 class="fw-bold mb-0">Humidity</h3>
        <p>Air moisture is given as relative humidity and dew point temperature.</p>
        <p>Humidity can be very local as well. Humidity is averaged within the weather model resolution of 2 to 11 km.
        </p>
      </div>
    </div>
    <div class="col d-flex align-items-start">
      <div>
        <h3 class="fw-bold mb-0">Wind</h3>
        <p>Wind is comparable to wind speed measurements at 10 meter above ground. It is averaged over an area and over
          one hour. Wind gusts are the maximum wind speeds within one hour.</p>
      </div>
    </div>
    <div class="col d-flex align-items-start">
      <div>
        <h3 class="fw-bold mb-0">Precipitation</h3>
        <p>Rain, showers and snowfall form total precipitation. Showers can be very local and hard to forecast. With 3
          hourly weather models runs, observations from rain radars constantly correct our forecast.</p>
      </div>
    </div>
    <div class="col d-flex align-items-start">
      <div>
        <h3 class="fw-bold mb-0">Clouds</h3>
        <p>Clouds are calculated as a percentage of area covered with clouds on different altitude levels. Low level
          clouds covering 80% or more are perceived as overcast. While high level cirrus clouds do not affect sunshine
          significantly.</p>
      </div>
    </div>
    <div class="col d-flex align-items-start">
      <div>
        <h3 class="fw-bold mb-0">Pressure</h3>
        <p>Atmospheric pressure is given in pascal at any given location. Additionally, the pressure reduced to mean sea
          level (msl) can be used to better compare pressure to the actual weather condition.</p>
      </div>
    </div>
    <div class="col d-flex align-items-start">
      <div>
        <h3 class="fw-bold mb-0">Weather interpretation</h3>
        <p>All weather variables like clouds, fog, rain, or thunderstorm likelihood are combined to an interpreted
          weather condition code. Codes follow WMO criteria including codes for fair weather, cloudy, overcast, drizzle,
          rain, shower, snow, and thunderstorms.</p>
      </div>
    </div>
    <div class="col d-flex align-items-start">
      <div>
        <h3 class="fw-bold mb-0">Many more</h3>
        <p>... like snow depth, sensible &#x26; latent heat flux, evapotranspiration, freezing level height (0°C
          altitude), direct, diffuse and total solar radiation, CAPE, TKE, lifted index, air mass, vapor pressure with
          deficit.</p>
      </div>
    </div>
  </div>
</div>



<div class="container px-4 py-5">
  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-speedometer2"
          viewBox="0 0 16 16">
          <path
            d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
          <path fill-rule="evenodd"
            d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
        </svg>
      </div>
      <h2 id="fast">Lightning Fast APIs</h2>
      <p>Open-Meteo APIs are build to be as fast and scalable as possible. All weather data are stored on speedy NVMe
        disks in optimized time-series formats. API requests perform typically below 10 milliseconds.</p>
      <p>For global availably and local points of presence, Open-Meteo API servers can be added to any cloud provider or
        hosting center easily. Get in touch with us if performance is critical to you.</p>
    </div>
    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-lightbulb"
          viewBox="0 0 16 16">
          <path
            d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
        </svg>
      </div>
      <h2>Easy to use</h2>
      <p>Our HTTP based JSON APIs are dead simple. You only need to be familiar with geographic coordinates (like
        52.52°N 13.405°E for Berlin), how to make HTTP request and the JSON data format.</p>
      <p>Documentation with all parameters and an in-depth explanation is available in our <a href="/en/docs">docs</a>.
      </p>
    </div>
    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
          class="bi bi-file-earmark-diff" viewBox="0 0 16 16">
          <path
            d="M8 5a.5.5 0 0 1 .5.5V7H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V8H6a.5.5 0 0 1 0-1h1.5V5.5A.5.5 0 0 1 8 5zm-2.5 6.5A.5.5 0 0 1 6 11h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
          <path
            d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
        </svg>
      </div>
      <h2>Stable APIs</h2>
      <p>Nothing is worse than API changes. We commit to keep APIs stable. All changes will follow <a
          href="https://semver.org/">semantic versioning</a> and breaking changes will be published as new major
        versions.</p>
      <p>All API changes will be logged on our GitHub repository.</p>
    </div>
  </div>
</div>

<div class="container col-xxl-8 px-4 py-5">
  <div class="row flex-lg-row align-items-top g-5 py-5">
    <div class="col-lg-6">
      <h1 id="terms" class="display-5 lh-1 mb-3">Terms &#x26; Privacy</h1>
      <p class="lead">Open-Meteo APIs are free for non-commercial use. We do not restrict
        access, but ask for fair use.</p>
      <p>If your application exceeds 10'000 requests per day, please contact us. We reserve the right to block
        applications and IP addresses that misuse our service.</p>
      <p><strong>Free for non-commercial:</strong> You may not use the API services for commercial purposes. For further
        questions, please contact us.</p>
      <p>All data is provided as is without any warranty.</p>
      <p>We do not collect any personal data. We do not share any personal information. We do not integrate any
        third-party analytics, ads, beacons or plugins.</p>
      <p class="lead">The site is operated by:
      <p>
      <p>Patrick Zippenfenig<br />
        Hintere Schillgmatte 6<br />
        6463 Bürglen (UR)<br />
        Switzerland</p>
      <p>Contact: <a href="mailto:info@open-meteo.com">info@open-meteo.com</a></p>
    </div>
    <div class="col-lg-6">
      <h1 class="display-5 lh-1 mb-3">License</h1>
      <p class="lead">API data are offered under <a href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank">Attribution 4.0 International (CC BY 4.0)</a></p>
      <p>You are free to <strong>share:</strong> copy and redistribute the material in any medium or format and
        <strong>adapt:</strong> remix, transform, and build upon the material.
      </p>
      <p><strong>Attribution:</strong> You must give appropriate credit, provide a link to the license, and indicate if
        changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor
        endorses you or your use.</p>
      <p>You must include a link next to any location, Open-Meteo data are displayed like:</p>
      <p><code>&lt;a href=&quot;https://open-meteo.com/&quot;&gt;Weather data by Open-Meteo.com&lt;/a&gt;</code></p>
      <p class="lead">Open-Meteo is open-source</p>
      <p>Source code is available on <a href="https://github.com/open-meteo/open-meteo" target="_blank">GitHub</a> under
        the GNU Affero General Public License Version 3 AGPLv3 or any later version. You can <a
          href="https://github.com/open-meteo/open-meteo/blob/main/LICENSE" target="_blank">find the license here</a>.
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
  <h1 id="contact" class="display-5 fw-bold">Next steps</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">Our <a href="/en/docs">documentation</a> provides a good start to help you integrate weather
      forecast into you application. If you need help, have suggestions for improvements or report a bug, please reach
      out to us on our GitHub repository. Or write us an email directly.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <a class="btn btn-primary btn-lg px-4 gap-3" href="https://github.com/open-meteo/open-meteo"
        target="_blank">Support on GitHub</a>
      <a href="mailto:info@open-meteo.com" class="btn btn-outline-secondary btn-lg px-4">Email us</a>
    </div>
  </div>
</div>