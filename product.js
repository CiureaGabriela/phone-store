class Product {

	constructor(name, price,anAparitie,dataAdaugare, image,id) {
		this.name = name;
		this.price = price;
		this.anAparitie= anAparitie;
		this.dataAdaugare= dataAdaugare;
		this.image= image;
		this.id = id;


	}

	renderProduct() {
		const productList = document.querySelector('#product-list');
		productList.innerHTML += `
		<div class="product">
		 <ul>
			<li> ${this.name}
		  <p class= "price-color">Price: ${this.price}</p>
		  <p>Anul aparitiei : ${this.anAparitie}</p>
		  <p>Data: ${this.dataAdaugare}</p>
			<div class=" img-container">
			  <img class="img-product" src="${this.image}" alt= "logo" width="80px" >

				<button class ="bag-button" data-id ="${this.id}" ><i class= "fa fa-shopping-cart"> </i>
					add to bag
				</button >
				</div>
		  </li>
		 </ul>


		<div/>
		`;
	}
}
