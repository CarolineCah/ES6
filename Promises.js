//Challenge create a promise

const userData = new Promise((resolve, reject)  => {
	const error = true;

	if(error) {
	reject('500 Level Error');
	} else {
	resolve({
		firstName: 'Caroline',
		age: 24,
		email: 'carolinecah@gmail.com'
	});
	}
});

userData
	.then((data) => console.log(data))
	.catch((error) => console.log(error));