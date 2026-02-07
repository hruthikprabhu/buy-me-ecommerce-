// Product details page
(function () {
    const product = (() => {
        try {
            return JSON.parse(localStorage.getItem('buyme_selected_product'));
        } catch (e) {
            return null;
        }
    })();

    if (!product) {
        window.location.href = 'home.html';
        return;
    }

    const $ = (id) => document.getElementById(id);

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    $('productImage').src = product.image;
    $('productImage').alt = product.name;
    $('productName').textContent = product.name;
    $('productNameBreadcrumb').textContent = product.name;
    $('productPrice').textContent = `$${product.price}`;
    $('productOriginalPrice').textContent = product.originalPrice ? `$${product.originalPrice}` : '';
    $('productDiscount').textContent = discount > 0 ? `${discount}% OFF` : '';

    $('productDescription').textContent =
        `Discover the ${product.name}. Built for performance, comfort, and everyday use with premium materials and trusted quality.`;

    const features = [
        'Premium build quality',
        'Fast, reliable performance',
        'Modern design and styling',
        'Warranty included'
    ];
    const featureList = $('productFeatures');
    featureList.innerHTML = '';
    features.forEach((feature) => {
        const li = document.createElement('li');
        li.innerHTML = `<i data-lucide="check-circle"></i>${feature}`;
        featureList.appendChild(li);
    });

    const stars = Array.from({ length: 5 }, (_, i) => {
        const filled = i < Math.floor(product.rating || 0);
        return `<i data-lucide="star" class="star ${filled ? 'filled' : ''}"></i>`;
    }).join('');

    $('productStars').innerHTML = stars;
    $('productRatingText').textContent = `(${product.rating || '0.0'})`;

    document.getElementById('addToCartBtn')?.addEventListener('click', () => {
        const count = parseInt(localStorage.getItem('cartCount') || '0', 10) + 1;
        localStorage.setItem('cartCount', String(count));
        alert('Added to cart');
    });

    document.getElementById('buyNowBtn')?.addEventListener('click', () => {
        window.location.href = 'payments/payment.html';
    });

    document.getElementById('addToWishlistBtn')?.addEventListener('click', () => {
        const existing = JSON.parse(localStorage.getItem('wishlist') || '[]');
        if (!existing.includes(product.name)) {
            existing.push(product.name);
        }
        localStorage.setItem('wishlist', JSON.stringify(existing));
        alert('Added to wishlist');
    });

    const intent = new URLSearchParams(window.location.search).get('intent');
    if (intent === 'buy') {
        document.getElementById('buyNowBtn')?.focus();
    }

    lucide.createIcons();
})();
