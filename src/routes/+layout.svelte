<script lang="ts">
	import '../app.scss';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(async () => {
		const Dropdown = await import('bootstrap/js/dist/dropdown');
    const Collapse = await import('bootstrap/js/dist/collapse');
	});
</script>

<nav class="navbar navbar-expand-md navbar-light bg-white">
	<div class="container-fluid">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			fill="currentColor"
			class="bi bi-cloud-sun me-2"
			viewBox="0 0 16 16"
		>
			<path
				d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"
			/>
			<path
				d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
			/>
		</svg>
		<a class="navbar-brand" href="/">Open-Meteo</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarCollapse"
			aria-controls="navbarCollapse"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarCollapse">
			<ul class="navbar-nav me-auto mb-2 mb-md-0">
				<li class="nav-item">
					<a href="/" class="nav-link" class:active={$page.url.pathname === '/'} aria-current="page"
						>Home</a
					>
				</li>
				<li class="nav-item">
					<a
						href="/en/features"
						class="nav-link"
						class:active={$page.url.pathname === '/en/features'}>Features</a
					>
				</li>
				<li class="nav-item">
					<a
						href="/en/docs"
						class="nav-link"
						class:active={$page.url.pathname.startsWith('/en/docs')}>API Docs</a
					>
				</li>
				<li class="nav-item">
					<a href="https://openmeteo.substack.com" class="nav-link" target="_blank">Blog</a>
				</li>
			</ul>
			<ul class="navbar-nav ml-sm-auto">
				<li class="nav-item">
					<a
						class="nav-link p-2"
						href="https://github.com/open-meteo/open-meteo"
						target="_blank"
						rel="noopener"
						aria-label="GitHub"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							class="navbar-nav-svg"
							viewBox="0 0 512 499.36"
							role="img"
						>
							<path
								fill="currentColor"
								fill-rule="evenodd"
								d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"
							/>
						</svg>
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link p-2"
						href="https://twitter.com/open_meteo"
						target="_blank"
						rel="noopener"
						aria-label="Twitter"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							class="navbar-nav-svg"
							viewBox="0 0 512 416.32"
							role="img"
						>
							<path
								fill="currentColor"
								d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"
							/>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<slot />

<footer class="container py-5 pt-4 my-md-5 pt-md-5">
	<div class="row">
		<div class="col-6 col-md">
			<p class="h5">Features</p>
			<ul class="list-unstyled text-small">
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/features">Local models</a>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/features#weathervariables"
						>Weather variables</a
					>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/features#fast"
						>Lightning fast APIs</a
					>
				</li>
				<li class="mb-1">
					<a
						class="link-secondary text-decoration-none"
						href="https://status.open-meteo.com"
						target="_blank">Service status and uptime</a
					>
				</li>
			</ul>
		</div>
		<div class="col-6 col-md">
			<p class="h5">Weather APIs</p>
			<ul class="list-unstyled text-small">
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/docs">Weather Forecast API</a>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/docs/historical-weather-api"
						>Historical Weather API</a
					>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/docs/ecmwf-api">ECMWF API</a>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/docs/gfs-api"
						>GFS & HRRR Forecast API</a
					>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/docs/meteofrance-api"
						>MeteoFrance API</a
					>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/docs/dwd-api">DWD ICON API</a>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/docs/gem-api">GEM API</a>
				</li>
			</ul>
		</div>
		<div class="col-6 col-md">
			<p class="h5">Other APIs</p>
			<ul class="list-unstyled text-small">
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/docs/marine-weather-api"
						>Marine Weather API</a
					>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/docs/air-quality-api"
						>Air Quality API</a
					>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/docs/geocoding-api"
						>Geocoding API</a
					>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/docs/elevation-api"
						>Elevation API</a
					>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/docs/flood-api">Flood API</a>
				</li>
			</ul>
		</div>
		<div class="col-6 col-md">
			<p class="h5">About</p>
			<ul class="list-unstyled text-small">
				<li class="mb-1">
					<a
						class="link-secondary text-decoration-none"
						href="https://github.com/open-meteo/open-meteo"
						target="_blank">GitHub</a
					>
				</li>
				<li class="mb-1">
					<a
						class="link-secondary text-decoration-none"
						href="https://openmeteo.substack.com/"
						target="_blank">Blog</a
					>
				</li>
				<li class="mb-1">
					<a
						rel="me"
						class="link-secondary text-decoration-none"
						href="https://twitter.com/open_meteo"
						target="_blank">Twitter</a
					>
				</li>
				<li class="mb-1">
					<a
						rel="me"
						class="link-secondary text-decoration-none"
						href="https://fosstodon.org/@openmeteo"
						target="_blank">Mastodon</a
					>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/features#contact">Contact us</a>
				</li>
				<li class="mb-1">
					<a class="link-secondary text-decoration-none" href="/en/features#terms"
						>Terms &amp; Privacy</a
					>
				</li>
			</ul>
		</div>
	</div>
	<div class="text-center pt-3">
		<small class="d-block text-muted">© 2022-2023 Copyright: Open-Meteo.com</small>
	</div>
</footer>
