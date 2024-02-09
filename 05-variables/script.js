let cartQuantity = 0

function showCartQuantity() {
  console.log(`Cart quantity: ${cartQuantity}`)
}

function addToCart() {
  cartQuantity++
  showCartQuantity()
}

function addToCartBy2() {
  cartQuantity += 2
  showCartQuantity()
}

function addToCartBy3() {
  cartQuantity += 3
  showCartQuantity()
}

function addToCartBy4() {
  cartQuantity += 4
  showCartQuantity()
}

function addToCartBy5() {
  cartQuantity += 5
  showCartQuantity()
}

function substractBy2() {
  cartQuantity -= 2
  showCartQuantity()
}

function substractBy3() {
  cartQuantity -= 3
  showCartQuantity()
}

function resetCart() {
  console.log('Cart was reset.')
  cartQuantity = 0
  showCartQuantity()
}

function buyEverything() {
  if (cartQuantity > 10) {
    alert('You cannot buy more than 10 items')
  } else if (cartQuantity <= 0) {
    alert('You need to select items before buying')
  } else {
    alert('Thank you for your purchase!')
  }
}
