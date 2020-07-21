export default function({ $axios, redirect }) {
	$axios.onRequest(config => {
		console.log('Making request' + config);
	});

	$axios.onError(error => {
		const code = parseInt(error.response && error.response.status);
		if (code === 400) {
			redirect('/400');
		}
	});
}
