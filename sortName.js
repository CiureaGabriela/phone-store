mainPage.innerHTML += `

<button id= "sortByName"> Sorteaza dupa nume</button>

`
function addSortFunctionality (){

  function sortPhones(sortType){
    switch(sortType) {


  case 'sortByName':
  function name(phone1, phone2){
  if(phone1.name < phone2.name) { return -1; }
  if(phone1.name > phone2.name) { return 1; }
  return 0;
}


const products= getProducts();
products.sort(name);
APP.renderProductList(products);
setProducts(products);
  break;

  default:

 }
}

  const sortByNameButton= document.querySelector('#sortByName');
  sortByNameButton.addEventListener('click', function(){
   sortPhones('sortByName')
  })

}

window.addEventListener('load', addSortFunctionality);
