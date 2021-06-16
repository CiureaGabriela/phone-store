
window.APP = {};

window.mainPage = document.querySelector('#root');

APP.products = [
	{

		name: 'Iphone XS',
		price:2000,
		anAparitie:2018,
		dataAdaugare: '2018-05-20',
		image: "https://www.visible.com/shop/assets/images/shop/webp/iPhoneX-SpaceGray-Front.webp",
		id: Math.random()
	},
	{
		name: 'Huawei P30',
		price:1100,
		anAparitie:2019,
		dataAdaugare: '2019-06-22',
		image:"https://www.visible.com/shop/assets/images/shop/catalogue/GalaxyA51-Black-Front.png",
		id: Math.random()
	},
	{
		name: 'Alcatel 1C',
		price:1000,
		anAparitie:2019,
		dataAdaugare:'2019-05-15',
		image:"https://www.visible.com/shop/assets/images/shop/catalogue/iPhone8-SpaceGray-Front.png",
		id: Math.random()
	},
	{
		name: 'Samsung S10',
		price:3200,
		anAparitie:2021,
		dataAdaugare:'2021-08-15',
		image:"https://www.visible.com/shop/assets/images/shop/catalogue/S20+-CosmicGray-Front.png",
		id: Math.random()
	},
	{
		name: 'Motorola moto g power ',
		price:3600,
		anAparitie:2020,
		dataAdaugare:'2020-08-10',
		image:"https://www.visible.com/shop/assets/images/shop/catalogue/MotorolaEdge-SolarBlack-Front.png",
		id: Math.random()
	},
	{
		name: 'Samsung Galaxy S20',
		price:4200,
		anAparitie:2021,
		dataAdaugare:'2021-08-15',
    image:"https://www.visible.com/shop/assets/images/shop/catalogue/GalaxyS20FE5G-CloudNavy-Front.png",
		id: Math.random()

	}
];
function setProducts(products){

	const stringProducts = JSON.stringify(products);
	localStorage.setItem("products", stringProducts);

}

 function getProducts(){
	 const returnedProducts = localStorage.getItem("products");
	 return JSON.parse(returnedProducts);

 }
if (localStorage.getItem("products")  === null){
  setProducts(APP.products);

}


function startRendering() {

	const localStorageProducts = getProducts();
	APP.renderProductList(localStorageProducts);

}

window.addEventListener('load', startRendering);
