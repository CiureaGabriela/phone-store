mainPage.innerHTML += `
<div class="cart-overlay">
  <div class="cart">
   <span class="close-card"> <i class="fa fa-window-close"></i> </span>
     <h2>Your Cart</h2>
     <div class="cart-content">
        <img src="https://www.visible.com/shop/assets/images/shop/webp/iPhoneX-SpaceGray-Front.webp" alt="picture">
        <div class="">
          <h3>LG phone</h3>
          <h4>2453 RON</h4>
          <span class="remove-item">remove</span>
        </div>
        <div class="">
          <i class="fa fa-chevron-up"></i>
          <p class="item-amount">1</p>
          <i class="fa fa-chevron-down"></i>

        </div>
        </div>
        <div class="cart-footer">
          <h3>Your total :$ <span class="cart-total">0</span></h3>
          <button class="clear-cart">Clear cart</button>

        </div>

  </div>
`;



const products= getProducts();
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-card");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productList = document.querySelector("#product-list ");


  const cartButton =  document.querySelectorAll(".bag-button");

// // for(let i=0 ;i>products.length; i++){
// cartButton.addEventListener("click", function(){
// console.log(clicked);
//
// })







// window.addEventListener('load',addCartFunctionality);
