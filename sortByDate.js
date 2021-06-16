mainPage.innerHTML += `

<button id= "sortByDate"> Sorteaza dupa data</button>

`

function addSortFunctionality (){

  function sortPhones(sortType){
    switch(sortType) {

      case 'sortByDate':
      function compare(phone1, phone2) {
        var c = new Date(phone1.dataAdaugare);
        var d = new Date(phone2.dataAdaugare);
          return c-d;

      }
    const products= getProducts();
      products.sort(compare);
      APP.renderProductList(products);
      setProducts(products);
        break;

  default:

 }
}

  const sortByDateButton= document.querySelector('#sortByDate');
  sortByDateButton.addEventListener('click', function(){
   sortPhones('sortByDate')
  })

}

window.addEventListener('load', addSortFunctionality);
