mainPage.innerHTML += `

<button id='filter'> Pret >2000 RON </button>
`



function myFunction () {

const result= products.filter(phone => phone.price > 2000);

APP.renderProductList(result);

}

const afiseazaProduse= document.querySelector('#filter');
afiseazaProduse.addEventListener('click', function(){
myFunction ();

  })

APP.renderProductList(products);
window.addEventListener('load', myFunction);
