mainPage.innerHTML += `
<button id= "sortByYear"> Sorteaza dupa anul aparitiei</button>
`

function addSortFunctionality (){

  function sortPhones(sortType){
    switch(sortType) {

    case 'sortByYear':
    function compare(phone1, phone2) {
      if (phone1.anAparitie < phone2.anAparitie) {
        return -1;
      }
      if (phone1.anAparitie > phone2.anAparitie) {
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

  const sortByYearButton= document.querySelector('#sortByYear');
  sortByYearButton.addEventListener('click', function(){
   sortPhones('sortByYear')
  })


}

window.addEventListener('load', addSortFunctionality);
