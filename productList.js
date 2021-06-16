
mainPage.innerHTML += `
	<div id="product-list">
	</div>
	<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
`;

APP.renderProductList = (productArray) => {

	const productList = document.querySelector('#product-list');
	productList.innerHTML = '';

	productArray.forEach( (elem) => {

		product = new Product(elem.name, elem.price, elem.anAparitie, elem.dataAdaugare, elem.image, elem.id);

		product.renderProduct();
	});
}
