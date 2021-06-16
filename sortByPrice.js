mainPage.innerHTML += `
<button id= "sortByPrice"> Sorteaza dupa pret</button>

`

function addSortFunctionality (){

  function sortPhones(sortType){
    switch(sortType) {
  case 'sortByPrice':
  function compare(phone1, phone2) {
    if (phone1.price < phone2.price) {
      return -1;
    }
    if (phone1.price > phone2.price) {
      return 1;
    }

    return 0;
  }

  const products= getProducts();
  products.sort(compare);
  APP.renderProductList(products);
  setProducts(products);
    break;


  default:

 }
}


  const sortByPriceButton= document.querySelector('#sortByPrice');
  sortByPriceButton.addEventListener('click', function(){
   sortPhones('sortByPrice')
  })

}

window.addEventListener('load', addSortFunctionality);
