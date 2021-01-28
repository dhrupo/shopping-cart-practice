document.getElementById('phone-minus').addEventListener('click', () => {
  handleProductChange('phone-count', 'phone-value', true, false);
  calculateTotal();
});

document.getElementById('phone-plus').addEventListener('click', () => {
  handleProductChange('phone-count', 'phone-value', true, true);
  calculateTotal();
});

document.getElementById('case-minus').addEventListener('click', () => {
  handleProductChange('case-count', 'case-value', false, false);
  calculateTotal();
});

document.getElementById('case-plus').addEventListener('click', () => {
  handleProductChange('case-count', 'case-value', false, true);
  calculateTotal();
});

document.getElementById('remove-phone').addEventListener('click', () => {
  deleteProduct('phone');
});

document.getElementById('remove-case').addEventListener('click', () => {
  deleteProduct('case');
});

document.getElementById('check-out').addEventListener('click', () => {
  document.getElementById('amount').innerText = document.getElementById('total').innerText;
  document.getElementById('cart-section').style.display = "none";
  document.getElementById('checkout-details').style.display = "block";
});

document.getElementById('go-back').addEventListener('click', () => {
  document.getElementById('checkout-details').style.display = "none";
  document.getElementById('cart-section').style.display = "block";
})

function handleProductChange(count, value, isPhone, isIncrease) {
  const productCount = parseFloat(document.getElementById(count).value);
  if (productCount > 0 && !isIncrease) {
    document.getElementById(count).value = productCount - 1;
  }
  if (isIncrease) {
    document.getElementById(count).value = productCount + 1;
  }
  const newProductCount = parseFloat(document.getElementById(count).value);
  if (isPhone) {
    document.getElementById(value).innerText = 1219 * newProductCount;
  }
  else {
    document.getElementById(value).innerText = 59 * newProductCount;
  }
}

function calculateTotal() {
  const subtotal = parseFloat(document.getElementById('phone-value').innerText) + parseFloat(document.getElementById('case-value').innerText);
  document.getElementById('subtotal').innerText = subtotal;

  document.getElementById('tax').innerText = Math.round(parseFloat(subtotal * .05));
  const tax = parseFloat(document.getElementById('tax').innerText);
  document.getElementById('total').innerText = tax + subtotal;
}

function deleteProduct(type) {
  let subtotal = 0;
  if (type == 'phone') {
    subtotal = document.getElementById('subtotal').innerText = parseFloat(document.getElementById('case-value').innerText);
  }
  if (type == 'case') {
    subtotal = document.getElementById('subtotal').innerText = parseFloat(document.getElementById('phone-value').innerText);
  }

  document.getElementById(type).style.display = "none";
  document.getElementById('tax').innerText = Math.round(parseFloat(subtotal * .05));
  const tax = parseFloat(document.getElementById('tax').innerText);
  document.getElementById('total').innerText = tax + subtotal;
}