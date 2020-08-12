//Challenge Fetch

fetch('http://jsonplaceholder.typicode.com/comments', {
	.then((response) => response.json())
	.then((data) => console.log(data))

fetch('http://jsonplaceholder.typicode.com/comments', {
	method: 'POST',
	body: JSON.stringify({
		name: 'Comment 105',
		email: 'carolinesemail@gmail.com',
		body: 'Dopest comment in the game',
		postId: 1
	})
	})
	.then((response) => response.json())
	.then((data) => console.log(data))

