mainPage.innerHTML += `
<div  id="form">
<h2 id ="phone">Our Products</h2>
  <form id="add-product">
    <label for="Name"> Nume:</label>
    <input type="text" name="phoneName" id= "Name" required/>
    <label for="Price"> Pret:</label>
    <input type="number" name="phonePrice" id="Price" required/>
    <label for="Year"> Anul aparitiei:</label>
    <input type="number" name="phoneYear" id="Year" required/>
    <label for="Date"> Data adaugare:</label>
    <input  type="text" name="phoneDate" id="Date"/>
    <input id="submitButton" type="submit" value= "ADAUGA"/>
  </form>
  <div/>
`

function addFormFunctionality() {
  const form = document.querySelector('#add-product');

  form.onsubmit = function(event) {

    event.preventDefault();

    const phoneName = event.target.phoneName.value;
    const phonePrice = Number(event.target.phonePrice.value);
    const phoneYear = Number(event.target.phoneYear.value);
    const phoneDate = event.target.phoneDate.value;


    const newPhone = {
      name: phoneName,
      price: phonePrice,
      anAparitie: phoneYear,
      dataAdaugare:phoneDate,
      image:"https://www.visible.com/shop/assets/images/shop/catalogue/BladeX15G-Midnight-Front.png",
      id: Math.random()
    };
     const localStorageProducts = getProducts();
      localStorageProducts.push(newPhone);
      setProducts(localStorageProducts);

    APP.renderProductList(localStorageProducts);

  }
}
// intreaga functionalitate a formularului e adaugata dupa ce se incarca pagina
// pentru a fi siguri ca avem DOM-ul populat (cu innerHTML introducem in DOM)
// si pentru a putea folosi functiile definite in alte fisiere .js
window.addEventListener('load', addFormFunctionality);
