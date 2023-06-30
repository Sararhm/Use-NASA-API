(() => {
	const requestData = { api_key: 'DEMO_KEY' }, API_URL = "https://api.nasa.gov/planetary/apod";

	const qs = (query, parent = document) => parent.querySelector(query);
	const qsa = (query, parent = document) => parent.querySelectorAll(query);

	const CARD = qs(".apod-card");

	if(CARD)
	{
		const Title = qs(".apod-title", CARD);
		const Image = qs(".apod-image", CARD);
		const Desc = qs(".apod-desc", CARD);

		const Info = qs(".apod-more-info", CARD);
		const Copyright = qs(".apod-copyright", Info);
		const HD_Link = qs(".apod-hdurl", Info);
		const Image_Date = qs(".apod-date", Info);

		fetch(API_URL + '?' + new URLSearchParams(requestData), {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then(response => response.json())
		.then(data => {
			Title.innerText = data.title;
			Image.src = data.url;
			Copyright.innerText = `© ${data.copyright}`;
			HD_Link.href = data.hdurl;
			Image_Date.innerText = data.date;
			Desc.innerText = data.explanation;
		})
		.catch((error) => {
			console.error('Error:', error);
		});
	}
})();
