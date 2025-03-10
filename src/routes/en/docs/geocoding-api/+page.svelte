<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	const params = { name: 'Berlin', count: '10', language: 'en', format: 'json' };
	const action = 'https://geocoding-api.open-meteo.com/v1/search';
	const paramsDefault = { ...params };
	$: apiUrl = `${action}?${new URLSearchParams(params)}`;
	let debounceTimeout: number | undefined;

	onDestroy(() => {
		clearInterval(debounceTimeout);
	});

	onMount(() => {
		// Restore parameters from URL hash like `#name=Bern&count=10&language=en&format=json`
		if (window.location.hash.length > 0) {
			for (const [key, value] of new URLSearchParams(window.location.hash.substring(1))) {
				if (params.hasOwnProperty(key)) {
					params[key as keyof typeof params] = value;
				}
			}
		}
	});

	// Fetch is automatically called after `params` changes due to reactive assignment
	$: results = (async () => {
		if (debounceTimeout) {
			clearTimeout(debounceTimeout);
		}
		await new Promise((resolve) => {
			debounceTimeout = setTimeout(resolve, 300);
		});

		// Always set format=json to fetch data
		const fetchUrl = `${action}?${new URLSearchParams({ ...params, ...{ format: 'json' } })}`;
		const result = await fetch(fetchUrl);

		if (!result.ok) {
			throw new Error(await result.text());
		}

		// Set URL state if any attribute is different than default
		const differentThanDefault = objectDifference(params, paramsDefault);
		if (Object.keys(differentThanDefault).length != 0) {
			window.location.hash = `${new URLSearchParams(differentThanDefault)}`;
		}

		return await result.json();
	})();

	// Only considers keys of the first object
	function objectDifference<T extends Record<string, any>>(a: T, b: T): Partial<T> {
		const diff: Partial<T> = {};
		for (const key in a) {
			if (a[key] !== b[key]) {
				diff[key] = a[key];
			}
		}
		return diff;
	}
</script>

<svelte:head>
	<title>Geocoding API | Open-Meteo.com</title>
	<link rel="canonical" href="https://open-meteo.com/en/docs/geocoding-api" />
</svelte:head>

<form
	id="geocoding_form"
	method="get"
	action="https://geocoding-api.open-meteo.com/v1/search"
	on:submit|preventDefault
>
	<div class="row">
		<h2>Search for cities or postal code</h2>
		<div class="col-md-3">
			<div class="form-floating position-relative">
				<input
					type="text"
					class="form-control"
					name="name"
					id="name"
					aria-label="Location name"
					bind:value={params.name}
				/>
				<label for="name">Name</label>
			</div>
		</div>
		<div class="col-3">
			<div class="form-floating mb-3">
				<select
					class="form-select"
					name="language"
					id="language"
					aria-label="Language"
					data-default="en"
					bind:value={params.language}
				>
					<option selected value="en">English</option>
					<option value="de">German</option>
					<option value="fr">French</option>
					<option value="es">Spanish</option>
					<option value="it">Italian</option>
					<option value="pt">Portuguese</option>
					<option value="ru">Russion</option>
					<option value="tr">Turkish</option>
					<option value="hi">Hindi</option>
				</select>
				<label for="language">Language</label>
			</div>
		</div>
		<div class="col-3">
			<div class="form-floating mb-3">
				<select
					class="form-select"
					name="count"
					id="count"
					aria-label="Number of results"
					data-default="10"
					bind:value={params.count}
				>
					<option value="1">1</option>
					<option selected value="10">10</option>
					<option value="20">20</option>
					<option value="50">50</option>
					<option value="100">100</option>
				</select>
				<label for="count">Number of results</label>
			</div>
		</div>
		<div class="col-3">
			<div class="form-floating mb-3">
				<select
					class="form-select"
					name="format"
					id="format"
					aria-label="Format"
					data-default="json"
					bind:value={params.format}
				>
					<option value="json" selected>json</option>
					<option value="protobuf">protobuf</option>
				</select>
				<label for="format">Format</label>
			</div>
		</div>
	</div>
</form>

<div class="col-12 table-responsive" style="min-height: 300px;">
	{#await results}
		<button class="btn btn-primary" type="button" disabled>
			<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
			Loading...
		</button>
	{:then results}
		<table class="table">
			<thead>
				<tr>
					<th />
					<th>Name</th>
					<th>Latitude</th>
					<th>Longitude</th>
					<th>Elevation</th>
					<th>Population</th>
					<th>Admin1</th>
					<th>Admin2</th>
					<th>Admin3</th>
					<th>Admin4</th>
					<th>Feature code</th>
				</tr>
			</thead>
			<tbody>
				{#if (results.results || []).length == 0}
					<tr>
						<td colspan="11"><strong>No locations found</strong></td>
					</tr>
				{:else}
					{#each results.results as location}
						<tr>
							<td class="p-1"
								><img
									height="32"
									src="/images/country-flags/{(
										location.country_code || 'united_nations'
									).toLowerCase()}.svg"
									title={location.country || ''}
									alt={location.country || ''}
								/></td
							>
							<td>{location.name}</td>
							<td>{location.latitude}</td>
							<td>{location.longitude}</td>
							<td>{location.elevation || ''}</td>
							<td>{location.population || ''}</td>
							<td>{location.admin1 || ''}</td>
							<td>{location.admin2 || ''}</td>
							<td>{location.admin3 || ''}</td>
							<td>{location.admin4 || ''}</td>
							<td>{location.feature_code || ''}</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	{:catch error}
		<div class="alert alert-danger" role="alert">
			{error.message}
		</div>
	{/await}
</div>

<div class="col-12">
	<label for="api_url" class="form-label"
		>API URL (<a id="api_url_link" target="_blank" href={apiUrl}>Open in new tab</a>)</label
	>
	<input type="text" class="form-control" id="api_url" value={apiUrl} readonly />
	<div id="emailHelp" class="form-text">You can copy this API URL into your application</div>
</div>

<div class="col-12 py-5">
	<h2 id="api-documentation">API Documentation</h2>
	<p>
		The API endpoint <mark>https://geocoding-api.open-meteo.com/v1/search</mark> accepts a search term
		and returns a list of matching locations. URL parameters are listed below:
	</p>
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
					<th scope="row">name</th>
					<td>String</td>
					<td>Yes</td>
					<td />
					<td
						>String to search for. An empty string or only 1 character will return an empty result.
						2 characters will only match exact matching locations. 3 and more characters will
						perform fuzzy matching. The search string can be a location name or a postal code.</td
					>
				</tr>
				<tr>
					<th scope="row">count</th>
					<td>Integer</td>
					<td>No</td>
					<td><mark>10</mark></td>
					<td>The number of search results to return. Up to 100 results can be retrieved.</td>
				</tr>
				<tr>
					<th scope="row">format</th>
					<td>String</td>
					<td>No</td>
					<td><mark>json</mark></td>
					<td
						>By default, results are returned as JSON. Alternatively, <mark>protobuf</mark> is
						supported for more efficient encoding and transfer. The .proto file to decode the
						protobuf message is available in the
						<a
							href="https://github.com/open-meteo/geocoding-api/blob/main/Sources/App/api.proto"
							target="_blank">geocoding GitHub repository</a
						>.</td
					>
				</tr>
				<tr>
					<th scope="row">language</th>
					<td>String</td>
					<td>No</td>
					<td><mark>en</mark></td>
					<td
						>Return translated results, if available, otherwise return english or the native
						location name. Lower-cased.</td
					>
				</tr>
				<!--<tr>
              <th scope="row">country_codes</th>
              <td>String array</td>
              <td>No</td>
              <td></td>
              <td>Optionally a comma-separated list of country codes, filters all search results to those countries. Country code must be upper-cased. E.g. <mark>&country_codes=DE,AT,CH</mark> to limit search to Germany, Austria and Switzerland.</td>
            </tr>-->
			</tbody>
		</table>
	</div>
	<p>
		Additional optional URL parameters will be added. For API stability, no required parameters will
		be added in the future!
	</p>

	<h3 class="mt-5">JSON Return Object</h3>
	<p>
		On success a JSON object will be returned. Empty fields are not returned. E.g. <mark
			>admin4</mark
		> will be missing if no fourth administrative level is available.
	</p>
	<pre>
      <code>
{`
  "results": [
    {
      "id": 2950159,
      "name": "Berlin",
      "latitude": 52.52437,
      "longitude": 13.41053,
      "elevation": 74.0,
      "feature_code": "PPLC",
      "country_code": "DE",
      "admin1_id": 2950157,
      "admin2_id": 0,
      "admin3_id": 6547383,
      "admin4_id": 6547539,
      "timezone": "Europe/Berlin",
      "population": 3426354,
      "postcodes": [
        "10967",
        "13347"
      ],
      "country_id": 2921044,
      "country": "Deutschland",
      "admin1": "Berlin",
      "admin2": "",
      "admin3": "Berlin, Stadt",
      "admin4": "Berlin"
    },
    {
      ...
    }]
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
					<th scope="row">id</th>
					<td>Integer</td>
					<td>Unique ID for this location</td>
				</tr>
				<tr>
					<th scope="row">name</th>
					<td>String</td>
					<td
						>Location name. Localized following the <mark>&language=</mark> parameter, if possible</td
					>
				</tr>
				<tr>
					<th scope="row">latitude, longitude</th>
					<td>Floating point</td>
					<td>Geographical WGS84 coordinates of this location</td>
				</tr>
				<tr>
					<th scope="row">elevation</th>
					<td>Floating point</td>
					<td>Elevation above mean sea level of this location</td>
				</tr>
				<tr>
					<th scope="row">timezone</th>
					<td>String</td>
					<td
						>Time zone using <a
							href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"
							target="_blank">time zone database</a
						> definitions</td
					>
				</tr>
				<tr>
					<th scope="row">feature_code</th>
					<td>String</td>
					<td
						>Type of this location. Following the <a
							href="https://www.geonames.org/export/codes.html"
							target="_new">GeoNames feature_code definition</a
						></td
					>
				</tr>
				<tr>
					<th scope="row">country_code</th>
					<td>String</td>
					<td
						>2-Character FIPS <a
							href="https://en.wikipedia.org/wiki/List_of_FIPS_country_codes"
							target="_new">country code</a
						>. E.g. <mark>DE</mark> for Germany</td
					>
				</tr>
				<tr>
					<th scope="row">country</th>
					<td>String</td>
					<td
						>Country name. Localized following the <mark>&language=</mark> parameter, if possible</td
					>
				</tr>
				<tr>
					<th scope="row">country_id</th>
					<td>Integer</td>
					<td>Unique ID for this country</td>
				</tr>
				<tr>
					<th scope="row">population</th>
					<td>Integer</td>
					<td>Number of inhabitants</td>
				</tr>
				<tr>
					<th scope="row">postcodes</th>
					<td>String array</td>
					<td>List of postcodes for this location</td>
				</tr>
				<tr>
					<th scope="row">admin1, admin2, admin3, admin4</th>
					<td>String</td>
					<td
						>Name of hierarchical administrative areas this location resides in. Admin1 is the first
						administrative level. Admin2 the second administrative level. Localized following the <mark
							>&language=</mark
						> parameter, if possible</td
					>
				</tr>
				<tr>
					<th scope="row">admin1_id, admin2_id, admin3_id, admin4_id</th>
					<td>Integer</td>
					<td>Unique IDs for the administrative areas</td>
				</tr>
			</tbody>
		</table>
	</div>

	*Note: All IDs can be can be resolved via the API endpoint<a
		href="https://geocoding-api.open-meteo.com/v1/get?id=2950159"
		target="_new">https://geocoding-api.open-meteo.com/v1/get?id=2950159</a
	>

	<h3 class="mt-5">Errors</h3>
	<p>
		In case an error occurs, for example a URL parameter is not correctly specified, a JSON error
		object is returned with a HTTP 400 status code.
	</p>
	<pre>
      <code>
{`
  "error": true,
  "reason": "Parameter count must be between 1 and 100."
`}
      </code>
    </pre>
</div>

<div class="col-6">
	<h3>Attribution</h3>
	<ul>
		<li>Location data based on <a href="https://www.geonames.org" target="_new">GeoNames</a></li>
		<li>
			Country flags from <a href="https://github.com/HatScripts/circle-flags" target="_new"
				>HatScripts/circle-flags</a
			>
		</li>
	</ul>
</div>
