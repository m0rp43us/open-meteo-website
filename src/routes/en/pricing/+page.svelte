<svelte:head>
    <title>Pricing | Open-Meteo.com</title> 
    <link rel="canonical" href="https://open-meteo.com/en/pricing" />
</svelte:head>

<div class="px-4 py-5 text-center text-white" style="
            background-image: url('/images/snowy.webp');
            background-size: cover;
            background-position: center;
            height: 500px;
          ">
    <svg style="filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));" xmlns="http://www.w3.org/2000/svg" width="96"
        height="96" fill="currentColor" class="bi bi-cloud-rain mb-4" viewBox="0 0 16 16">
        <path
            d="M2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm2.75 2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-2.75-2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-.22-7.223a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973z" />
    </svg>
    <h1 class="display-5" style="text-shadow: 3px 3px 2px rgba(0, 0, 0, .7);">Pricing</h1>
    <div class="col-lg-6 mx-auto">
        <p class="lead mb-4" style="text-shadow: 3px 3px 2px rgba(0, 0, 0, .7);">Commercial use licenses, support and dedicated API capacity
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="#plans" class="btn button btn-primary btn-lg px-4 me-sm-3">API Plans</a>
            <a href="#terms" class="btn btn-outline-light btn-lg px-4">Terms &#x26; License</a>
        </div>
    </div>
</div>
<!--<div class="mb-5" style="border-bottom: 1px solid #ddd">
    <div class="container px-4 py-1">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><a class="link-secondary" href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Pricing</li>
            </ol>
        </nav>
    </div>
</div>-->
<div class="container px-4 py-3">
<div class="alert alert-warning" role="alert">
    ⚠️ 🚧 👷The commercial API subscription is in development. Support, dedicated API endpoints and API keys are available, but the API usage dashboard or self-management of API keys, are not yet done! In case you need any assistance, don't hesitate and contact us at <a href="mailto:info@open-meteo.com">info@open-meteo.com</a>!  
  </div>
</div>

<div class="container px-4 py-3" id="plans">
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
    <stripe-pricing-table class="row" pricing-table-id="prctbl_1MJg0iLNZMSyEuRUvpoeTHOb"
        publishable-key="pk_live_51MJeWDLNZMSyEuRU9z4cAidPizoNKshAoYEoTCcD6f94ShOpnqwpShwYfgpPMfISmiXFLNWWM8u769epiIwaMeV900ZFxKd8rR">
    </stripe-pricing-table>
</div>

<div class="container px-4 py-2">
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
            <h2>Free for non-commercial</h2>
            <p>Open-Meteo APIs are free for non-commercial use. We do not restrict
                access, but ask for fair use and attribution.</p>
            <p>If your application exceeds 10'000 requests per day, please contact us. We reserve the right to block
                applications and IP addresses that misuse our service.</p>
        </div>
        <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    class="bi bi-lightning" viewBox="0 0 16 16">
                    <path
                        d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                </svg>
            </div>
            <h2>Commercial Use License</h2>
            <p>Commercial customers benefit from dedicated API servers and support. If you have any questions or need
                assistance, please contact <a href="mailto:info@open-meteo.com">info@open-meteo.com</a>.</p>
            <p>For evaluation, prototypes and development you are welcome to use the free tier. For production system,
                you will receive an API key to ensure you application get weather data reliably.</p>
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
            <h2>Large API Call Volume</h2>
            <p>Millions of API calls are included in the API price and you wont be charged for every single API call.
                We recommend to update the weather forecast API hourly to get best accuracy.</p>
            <p>API calls with more than 10 weather variables or long time-series from the historical weather API, may
                count as more than one. See below for more details.</p>
        </div>
        <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-archive"
                    viewBox="0 0 16 16">
                    <path
                        d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
            <h2>High Availability</h2>
            <p>With premium grade API servers, the API is designed for 99.9% availability. Statistics are available at:
                <a href="https://status.open-meteo.com/">https://status.open-meteo.com/</a>.</p>
            <p>For demanding use-cases, more API instances will be provisioned to guarantee reliable API operation.</p>
        </div>
        <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-tsunami"
                    viewBox="0 0 16 16">
                    <path
                        d="M.036 12.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zm0 2a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zM2.662 8.08c-.456 1.063-.994 2.098-1.842 2.804a.5.5 0 0 1-.64-.768c.652-.544 1.114-1.384 1.564-2.43.14-.328.281-.68.427-1.044.302-.754.624-1.559 1.01-2.308C3.763 3.2 4.528 2.105 5.7 1.299 6.877.49 8.418 0 10.5 0c1.463 0 2.511.4 3.179 1.058.67.66.893 1.518.819 2.302-.074.771-.441 1.516-1.02 1.965a1.878 1.878 0 0 1-1.904.27c-.65.642-.907 1.679-.71 2.614C11.076 9.215 11.784 10 13 10h2.5a.5.5 0 0 1 0 1H13c-1.784 0-2.826-1.215-3.114-2.585-.232-1.1.005-2.373.758-3.284L10.5 5.06l-.777.388a.5.5 0 0 1-.447 0l-1-.5a.5.5 0 0 1 .447-.894l.777.388.776-.388a.5.5 0 0 1 .447 0l1 .5a.493.493 0 0 1 .034.018c.44.264.81.195 1.108-.036.328-.255.586-.729.637-1.27.05-.529-.1-1.076-.525-1.495-.426-.42-1.19-.77-2.477-.77-1.918 0-3.252.448-4.232 1.123C5.283 2.8 4.61 3.738 4.07 4.79c-.365.71-.655 1.433-.945 2.16-.15.376-.301.753-.463 1.13z" />
                </svg>
            </div>
            <h2>Multiple Payment Methods</h2>
            <p>Payment is possible with credit card, Apple Pay, Google Pay, SOFORT or SEPA. You will receive a PDF
                invoice after purchase and can cancel any time. All subscriptions are handled by Stripe and you can
                manage your subscription in the <a href="https://billing.stripe.com/p/login/00gbIQ79OcpM9eEbII">customer
                    portal</a>.
            </p>
        </div>
        <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    class="bi bi-cloud-haze2" viewBox="0 0 512 512">
                    <path
                        d="M503 394L280 44C275 36 265 32 256 32C247 32 237 36 232 44L9 394C-2 411 -3 433 7 451C17 469 36 480 56 480H456C476 480 495 469 505 451C515 433 514 411 503 394ZM256 66L347 208H256C251 208 246 210 243 214L208 261L173 214C171 212 168 210 165 209L256 66ZM477 436C473 443 465 448 456 448H56C47 448 39 443 35 436C31 428 31 418 36 411L145 240H152L195 298C198 302 203 304 208 304S218 302 221 298L264 240H367L476 411C481 418 481 428 477 436Z" />
                </svg>
            </div>
            <h2>Predicable Cost, Cancel Anytime</h2>
            <p>The API subscription price is fixed and you will not face any overcharges. If you need more API calls,
                you can upgrade your API subscription any time.</p>
        </div>
    </div>
</div>

<div class="container px-4 py-5" id="icon-grid">
    <h2 id="weathervariables" class="pb-2 border-bottom">Frequently asked questions</h2>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4 py-5">
        <div class="col d-flex align-items-start">
            <div>
                <h3 class="fw-bold mb-0">How does the subscription process work?</h3>
                <p>After you subscribed, you can use the Open-Meteo API for commercial purposes. You will receive an email with an PDF invoice. After the payment was processed (typically within a couple of hours) you will receive you API key and instructions to use the dedicated customer API. You can cancel the the subscription at any time in the <a
                    href="https://billing.stripe.com/p/login/00gbIQ79OcpM9eEbII">customer portal</a>.</p>
            </div>
        </div>
        <div class="col d-flex align-items-start">
            <div>
                <h3 class="fw-bold mb-0">What happens if I exceed my monthly call volume?</h3>
                <p>If you reach 80%, 90% and 100% of your monthly call volume you will be notified via email. With the
                    generous amount of API calls, it is less likely that you will reach this limit.</p>
                <p>To get more calls, you can upgrade your API subscription in the <a
                        href="https://billing.stripe.com/p/login/00gbIQ79OcpM9eEbII">customer portal</a>. For high
                    volume API quotas, please get in touch!</p>
            </div>
        </div>
        <div class="col d-flex align-items-start">
            <div>
                <h3 class="fw-bold mb-0">What is the difference between the free and customer API?</h3>
                <p>The free API is available to the general public for non-commercial use and does not offer any service
                    guarantees. The customer API service if tailored for commercial use and offers dedicated API server
                    instances to ensure enough resources are available and the API operates reliably.</p>
                <p>The customer API is using different domains like <mark>customer-api.open-meteo.com</mark> and API
                    keys in the URL <mark>&apikey=abc123</mark>. Otherwise the syntax is exactly the same.</p>
            </div>
        </div>
        <div class="col d-flex align-items-start">
            <div>
                <h3 class="fw-bold mb-0">Why are historical and climate data in the more expensive tier?</h3>
                <p>The effort and amount of data for a historical weather data are significantly higher and more expensive to maintain. Although this data is still offered for free for non-commercial use, the higher reliability requirements of the customer API, increases cost.</p><p>Businesses working historical weather analysis, require a higher number of monthly calls in many cases. Therefore historical weather data is only offered in the professional API plan with 5 million API calls.</p>
            </div>
        </div>
        <div class="col d-flex align-items-start">
            <div>
                <h3 class="fw-bold mb-0">How is one API call defined?</h3>
                <p>In most cases, one HTTP API request is one API call. However, you could select 200 weather variables at once and heavily utilize the API. Therefore API queries with more than 10 weather variables or more than 7 days of data, count as more than just one.</p>
                <p>The calculation uses fractional API calls, meaning that 15 weather variables count as <mark>1.5</mark> API calls or 4 weeks of weather data counts as <mark>3.0</mark> API calls.</p>
                <p>This distinction is important to build future feature like APIs for multiple locations at once.</p>
            </div>
        </div>

        <div class="col d-flex align-items-start">
            <div>
                <h3 class="fw-bold mb-0">Do I have to give attribution to Open-Meteo?</h3>
                <p>Open-Meteo is based on open data licensed as <a href="https://creativecommons.org/licenses/by/4.0/"
                    target="_blank">Attribution 4.0 International (CC BY 4.0)</a>. This license requires you to give appropriate credit and indicate if changes to data were made. You can however use and redistribute data including for commercial purposes.</p>
            </div>
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
            <p><strong>Free for non-commercial:</strong> You may not use the API services for commercial purposes. For
                further
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
            <p><strong>Attribution:</strong> You must give appropriate credit, provide a link to the license, and
                indicate if
                changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor
                endorses you or your use.</p>
            <p>You must include a link next to any location, Open-Meteo data are displayed like:</p>
            <p><code>&lt;a href=&quot;https://open-meteo.com/&quot;&gt;Weather data by Open-Meteo.com&lt;/a&gt;</code>
            </p>
            <p class="lead">Open-Meteo is open-source</p>
            <p>Source code is available on <a href="https://github.com/open-meteo/open-meteo" target="_blank">GitHub</a>
                under
                the GNU Affero General Public License Version 3 AGPLv3 or any later version. You can <a
                    href="https://github.com/open-meteo/open-meteo/blob/main/LICENSE" target="_blank">find the license
                    here</a>.
            </p>
        </div>
    </div>
</div>
