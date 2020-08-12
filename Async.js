//Async & Await Challenge

const apiUrl = "https://api.chucknorris.io/joke/random";

async function getJoke() {
	const response = await fetch(apiUrl);
	const data = await response.json();

	console.log(data.value);
}

getJoke();