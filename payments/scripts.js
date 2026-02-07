// Checkout confirmation flow
(function () {
  const form = document.getElementById('checkoutForm');
  const confirmBtn = document.getElementById('confirmBtn');
  const overlay = document.getElementById('successOverlay');
  const closeOverlay = document.getElementById('closeOverlay');
  const statusMessage = document.getElementById('statusMessage');
  const orderProductImage = document.getElementById('orderProductImage');
  const orderProductName = document.getElementById('orderProductName');
  const orderProductMeta = document.getElementById('orderProductMeta');
  const orderProductPrice = document.getElementById('orderProductPrice');
  const orderSubtotal = document.getElementById('orderSubtotal');
  const orderDelivery = document.getElementById('orderDelivery');
  const orderTotal = document.getElementById('orderTotal');

  if (!form || !confirmBtn || !overlay) return;

  function showOverlay() {
    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    statusMessage && (statusMessage.textContent = 'Order placed successfully.');
  }

  function hideOverlay() {
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
  }

  hideOverlay();

  const product = (() => {
    try {
      return JSON.parse(localStorage.getItem('buyme_selected_product'));
    } catch (e) {
      return null;
    }
  })();

  const deliveryCharge = 49;
  if (product && orderProductName && orderProductPrice) {
    const price = Number(product.price) || 0;
    orderProductName.textContent = product.name || 'Selected product';
    if (orderProductImage) {
      orderProductImage.src = product.image || orderProductImage.src;
      orderProductImage.alt = product.name || 'Product image';
    }
    if (orderProductMeta) orderProductMeta.textContent = '1 × Standard';
    orderProductPrice.textContent = `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (orderSubtotal) orderSubtotal.textContent = `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (orderDelivery) orderDelivery.textContent = `$${deliveryCharge.toFixed(2)}`;
    if (orderTotal) orderTotal.textContent = `$${(price + deliveryCharge).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isValid = form.checkValidity();
    if (!isValid) {
      form.reportValidity();
      return;
    }

    confirmBtn.disabled = true;
    confirmBtn.setAttribute('aria-busy', 'true');

    setTimeout(() => {
      confirmBtn.disabled = false;
      confirmBtn.setAttribute('aria-busy', 'false');
      showOverlay();
    }, 600);
  });

  closeOverlay?.addEventListener('click', () => {
    hideOverlay();
  });
})();
