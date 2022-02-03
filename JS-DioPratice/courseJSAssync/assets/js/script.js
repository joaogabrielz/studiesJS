const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL); //{mode: opaque} //{mode: 'no-cors'}
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);

//metodo sem try..cat

// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

// const btn = document.getElementById('change-cat');

// const getCats = async () => {
// 	const data = await fetch(BASE_URL)
// 		.then(res => res.json())
// 		.catch(e => console.log(e))

// 		return data.webpurl;
// };

// const loadImg = async () => {
// 	const img = document.getElementsByTagName('img')[0];
// 	img.src = await getCats();
// };

// loadImg();

// btn.addEventListener('click', loadImg);
