let cartQuantity = 0;

function showCartQuantity() {
  console.log(`Cart quantity: ${cartQuantity}`);
}

function addToCart() {
  cartQuantity++;
  showCartQuantity();
}

function addToCartBy2() {
  cartQuantity += 2;
  showCartQuantity();
}

function addToCartBy3() {
  cartQuantity += 3;
  showCartQuantity();
}

function resetCart() {
  console.log('Cart was reset.'); 
  cartQuantity = 0;
  showCartQuantity();
}
