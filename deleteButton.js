function addRemoveButtonFunctionality (){


function removeItem(arr, name) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === name) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}


const productList = document.querySelector('#product-list');
productList.onclick = function (event){
  
  if(event.target && event.target.classList.contains('#deleteButton')){

  const name= event.target.dataset.name
   const products= getProducts();
   removeItem(products, name);
   APP.renderProductList(products);

  }
}
}

window.addEventListener('load', addRemoveButtonFunctionality);
