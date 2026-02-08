// ====================================
// PRODUCT DATA
// ====================================
let productsData = {
    trending: [
        {
            name: 'Premium Smartphone X Pro',
            price: 799,
            originalPrice: 999,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1761907174062-c8baf8b7edb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        },
        {
            name: 'Wireless Noise-Cancelling Headphones',
            price: 249,
            originalPrice: 349,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        },
        {
            name: 'Ultra HD Smart TV 55"',
            price: 699,
            originalPrice: 899,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1556889487-b6f8d3fc728b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        },
        {
            name: 'Designer Sunglasses Collection',
            price: 159,
            originalPrice: 249,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1766928102358-86e329eef03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        }
    ],
    bestSellers: [
        {
            name: 'Professional DSLR Camera',
            price: 1299,
            originalPrice: 1599,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1632222623518-bbbd5f1f2489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        },
        {
            name: 'Premium Running Sneakers',
            price: 129,
            originalPrice: 179,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1622760807301-4d2351a5a942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        },
        {
            name: 'Smart Fitness Watch',
            price: 299,
            originalPrice: 399,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1633339257099-3697720c2c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        },
        {
            name: 'Ultra-Thin Laptop Pro',
            price: 1499,
            originalPrice: 1899,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1736616980443-537d3af09915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        }
    ],
    newArrivals: [
        {
            name: 'Cute Teddy Bear Collection',
            price: 39,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1753928578920-c3e936415a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        },
        {
            name: 'Premium Tablet Device',
            price: 599,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1714071803623-9594e3b77862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        },
        {
            name: 'Luxury Fashion Collection',
            price: 189,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1724184888115-e76e42f53dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        },
        {
            name: '5G Smartphone Ultra',
            price: 899,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1761907174062-c8baf8b7edb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        }
    ],
    recommended: [
        {
            name: 'Wireless Gaming Headset',
            price: 179,
            originalPrice: 229,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        },
        {
            name: 'Smart Home Camera',
            price: 149,
            originalPrice: 199,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1632222623518-bbbd5f1f2489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        },
        {
            name: 'Casual Summer Sneakers',
            price: 89,
            originalPrice: 129,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1622760807301-4d2351a5a942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        },
        {
            name: 'Designer Accessories Set',
            price: 199,
            originalPrice: 279,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1766928102358-86e329eef03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
        }
    ],
    categories: {
        electronics: [
            { name: 'Smart Home Speaker Pro', price: 129, originalPrice: 169, rating: 4.7, image: 'https://images.unsplash.com/photo-1512446733611-9099a758e7c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Mirrorless Camera Kit', price: 899, originalPrice: 1099, rating: 4.8, image: 'https://images.unsplash.com/photo-1519183071298-a2962e63c147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Bluetooth Soundbar', price: 219, originalPrice: 279, rating: 4.6, image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Gaming Console S', price: 499, originalPrice: 549, rating: 4.9, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' }
        ],
        fashion: [
            { name: 'Premium Leather Jacket', price: 229, originalPrice: 299, rating: 4.7, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Classic Denim Set', price: 89, originalPrice: 129, rating: 4.6, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Signature Sneakers', price: 119, originalPrice: 159, rating: 4.8, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Silk Summer Dress', price: 139, originalPrice: 189, rating: 4.7, image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' }
        ],
        tv: [
            { name: 'Ultra HD OLED TV 65"', price: 1299, originalPrice: 1599, rating: 4.8, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Smart Air Conditioner', price: 549, originalPrice: 699, rating: 4.6, image: 'https://images.unsplash.com/photo-1527515637462-daf0dbff28b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Energy Saver Refrigerator', price: 799, originalPrice: 999, rating: 4.7, image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Front Load Washer', price: 649, originalPrice: 799, rating: 4.6, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' }
        ],
        teddy: [
            { name: 'Classic Brown Teddy', price: 29, originalPrice: 39, rating: 4.9, image: 'https://images.unsplash.com/photo-1500995617113-cf789362a3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Giant Hug Bear', price: 59, originalPrice: 79, rating: 4.8, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Rainbow Plush Friend', price: 24, originalPrice: 34, rating: 4.7, image: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Soft White Teddy', price: 27, originalPrice: 36, rating: 4.8, image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' }
        ],
        mobiles: [
            { name: 'Flagship Phone Z', price: 999, originalPrice: 1199, rating: 4.9, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Compact 5G Phone', price: 699, originalPrice: 849, rating: 4.7, image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Camera Phone Pro', price: 899, originalPrice: 1049, rating: 4.8, image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Budget 5G Max', price: 499, originalPrice: 599, rating: 4.6, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' }
        ],
        clothes: [
            { name: 'Everyday Cotton T-Shirt', price: 29, originalPrice: 39, rating: 4.6, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Slim Fit Chinos', price: 59, originalPrice: 79, rating: 4.7, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Cozy Knit Sweater', price: 69, originalPrice: 89, rating: 4.8, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Tailored Formal Shirt', price: 49, originalPrice: 69, rating: 4.7, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' }
        ],
        accessories: [
            { name: 'Minimalist Watch', price: 149, originalPrice: 199, rating: 4.8, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Leather Wallet', price: 39, originalPrice: 59, rating: 4.6, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Classic Sunglasses', price: 79, originalPrice: 99, rating: 4.7, image: 'https://images.unsplash.com/photo-1511497584788-876760111969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
            { name: 'Canvas Backpack', price: 69, originalPrice: 89, rating: 4.6, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' }
        ]
    }
};

async function loadProductsFromApi() {
    try {
        const response = await fetch('http://localhost:5000/api/products', {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error('Products API unavailable');
        }
        const data = await response.json();
        if (data && data.trending && data.bestSellers && data.newArrivals && data.recommended) {
            productsData = data;
            return true;
        }
        return false;
    } catch (err) {
        console.warn('Failed to load products from API:', err);
        return false;
    }
}

// ====================================
// WISHLIST STATE
// ====================================
let wishlist = new Set();

// ====================================
// PRODUCT LOOKUP
// ====================================
function findProductByName(name) {
    const collections = [
        productsData.trending,
        productsData.bestSellers,
        productsData.newArrivals,
        productsData.recommended,
        ...Object.values(productsData.categories || {})
    ];
    for (const list of collections) {
        const match = list.find((item) => item.name === name);
        if (match) return match;
    }
    return null;
}

function findProductByQuery(query) {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    const collections = [
        productsData.trending,
        productsData.bestSellers,
        productsData.newArrivals,
        productsData.recommended,
        ...Object.values(productsData.categories || {})
    ];
    const all = collections.flat();
    // Exact match first
    const exact = all.find((item) => item.name.toLowerCase() === q);
    if (exact) return exact;
    // Partial match fallback
    return all.find((item) => item.name.toLowerCase().includes(q)) || null;
}

function getSearchResults(query, limit = 6) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const collections = [
        productsData.trending,
        productsData.bestSellers,
        productsData.newArrivals,
        productsData.recommended,
        ...Object.values(productsData.categories || {})
    ];
    const all = collections.flat();
    const results = all.filter((item) => item.name.toLowerCase().includes(q));
    return results.slice(0, limit);
}

// ====================================
// AUTH UI STATE
// ====================================
function updateAccountUI() {
    const loggedOutView = document.getElementById('authLoggedOut');
    const loggedInView = document.getElementById('authLoggedIn');
    const usernameDisplay = document.getElementById('usernameDisplay');

    if (!loggedOutView || !loggedInView) return;

    let session = null;
    try {
        session = JSON.parse(localStorage.getItem('buyme_current_user'));
    } catch (e) {
        session = null;
    }

    if (session && session.student) {
        loggedOutView.hidden = true;
        loggedInView.hidden = false;
        if (usernameDisplay) usernameDisplay.textContent = session.student;
    } else {
        loggedOutView.hidden = false;
        loggedInView.hidden = true;
    }
}

// ====================================
// CREATE PRODUCT CARD
// ====================================
function createProductCard(product) {
    const discount = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productName = product.name;
    
    const stars = Array.from({ length: 5 }, (_, i) => {
        const filled = i < Math.floor(product.rating);
        return `<i data-lucide="star" class="star ${filled ? 'filled' : ''}"></i>`;
    }).join('');

    card.innerHTML = `
        <div class="product-image-wrapper">
            ${discount > 0 ? `<div class="discount-badge">${discount}% OFF</div>` : ''}
            <button class="wishlist-btn" data-product="${product.name}">
                <i data-lucide="heart"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-image">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                ${stars}
                <span class="rating-text">(${product.rating})</span>
            </div>
            <div class="product-price">
                <span class="current-price">$${product.price}</span>
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
            </div>
            <div class="product-actions">
                <button class="add-to-cart-btn" data-product="${product.name}">
                    <i data-lucide="shopping-cart"></i>
                    Add to Cart
                </button>
                <button class="buy-now-btn" data-product="${product.name}">
                    <i data-lucide="credit-card"></i>
                    Buy Now
                </button>
            </div>
        </div>
    `;

    return card;
}

// ====================================
// RENDER PRODUCTS
// ====================================
function renderProducts() {
    // Render Trending Products
    const trendingGrid = document.getElementById('trendingProducts');
    productsData.trending.forEach(product => {
        trendingGrid.appendChild(createProductCard(product));
    });

    // Render Best Sellers
    const bestSellersGrid = document.getElementById('bestSellersProducts');
    productsData.bestSellers.forEach(product => {
        bestSellersGrid.appendChild(createProductCard(product));
    });

    // Render New Arrivals
    const newArrivalsGrid = document.getElementById('newArrivalsProducts');
    productsData.newArrivals.forEach(product => {
        newArrivalsGrid.appendChild(createProductCard(product));
    });

    // Render Recommended
    const recommendedGrid = document.getElementById('recommendedProducts');
    productsData.recommended.forEach(product => {
        recommendedGrid.appendChild(createProductCard(product));
    });

    // Render Categories
    const categoryMap = [
        ['electronicsProducts', productsData.categories.electronics],
        ['fashionProducts', productsData.categories.fashion],
        ['tvProducts', productsData.categories.tv],
        ['teddyProducts', productsData.categories.teddy],
        ['mobilesProducts', productsData.categories.mobiles],
        ['clothesProducts', productsData.categories.clothes],
        ['accessoriesProducts', productsData.categories.accessories]
    ];

    categoryMap.forEach(([gridId, list]) => {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        list.forEach(product => grid.appendChild(createProductCard(product)));
    });

    // Initialize Lucide icons for new elements
    lucide.createIcons();
}

// ====================================
// WISHLIST FUNCTIONALITY
// ====================================
function toggleWishlist(productName, button) {
    if (wishlist.has(productName)) {
        wishlist.delete(productName);
        button.classList.remove('active');
        showNotification('Removed from wishlist', 'error');
    } else {
        wishlist.add(productName);
        button.classList.add('active');
        showNotification('Added to wishlist', 'success');
        
        // Animate button
        button.style.transform = 'scale(1.3)';
        setTimeout(() => {
            button.style.transform = '';
        }, 300);
    }
    
    updateWishlistBadge();
}

// ====================================
// UPDATE WISHLIST BADGE
// ====================================
function updateWishlistBadge() {
    const wishlistBtn = document.getElementById('wishlistBtn');
    const badge = wishlistBtn.querySelector('.badge');
    badge.textContent = wishlist.size;
}

// ====================================
// ADD TO CART FUNCTIONALITY
// ====================================
let cartCount = 7; // Initial cart count

function addToCart(productName, button) {
    cartCount++;
    updateCartBadge();
    showNotification('Added to cart', 'success');
    
    // Animate button
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.transform = '';
    }, 200);
}

// ====================================
// UPDATE CART BADGE
// ====================================
function updateCartBadge() {
    const cartBtn = document.getElementById('cartBtn');
    const badge = cartBtn.querySelector('.badge');
    badge.textContent = cartCount;
}

// ====================================
// NOTIFICATION SYSTEM
// ====================================
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// ====================================
// EVENT LISTENERS
// ====================================
function setupEventListeners() {
    // Wishlist buttons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.wishlist-btn')) {
            const button = e.target.closest('.wishlist-btn');
            const productName = button.dataset.product;
            toggleWishlist(productName, button);
        }
    });

    // Add to cart buttons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart-btn')) {
            const button = e.target.closest('.add-to-cart-btn');
            const productName = button.dataset.product;
            addToCart(productName, button);
        }
    });

    // Buy now buttons -> product details page
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.buy-now-btn')) return;
        const button = e.target.closest('.buy-now-btn');
        const productName = button.dataset.product;
        if (!productName) return;

        const product = findProductByName(productName);
        if (!product) return;

        localStorage.setItem('buyme_selected_product', JSON.stringify(product));
        window.location.href = '../payments/payment.html';
    });

    // Product card click -> product details page
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (!card) return;
        if (e.target.closest('.wishlist-btn') || e.target.closest('.add-to-cart-btn') || e.target.closest('.buy-now-btn')) return;

        const productName = card.dataset.productName;
        if (!productName) return;

        const product = findProductByName(productName);
        if (!product) return;

        localStorage.setItem('buyme_selected_product', JSON.stringify(product));
        window.location.href = '../product.html';
    });

    // Category buttons
    document.querySelectorAll('.category-card').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            const sectionMap = {
                electronics: 'electronicsSection',
                fashion: 'fashionSection',
                tv: 'tvSection',
                teddy: 'teddySection',
                mobiles: 'mobilesSection',
                clothes: 'clothesSection',
                accessories: 'accessoriesSection'
            };
            const sectionId = sectionMap[category];
            const target = sectionId ? document.getElementById(sectionId) : null;
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                showNotification(`Browsing ${category}`, 'success');
            }
        });
    });

    // View All buttons
    document.querySelectorAll('.view-all-btn').forEach(button => {
        button.addEventListener('click', () => {
            showNotification('Loading more products...', 'success');
        });
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterBtn = newsletterForm.querySelector('.btn-primary');
    
    newsletterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('.newsletter-input');
        const email = input.value;
        
        if (email && email.includes('@')) {
            showNotification('Successfully subscribed!', 'success');
            input.value = '';
        } else {
            showNotification('Please enter a valid email', 'error');
        }
    });

    // Search functionality
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        const dropdown = input.parentElement?.querySelector('.search-dropdown');

        function hideDropdown() {
            if (dropdown) dropdown.hidden = true;
        }

        function showDropdown() {
            if (dropdown) dropdown.hidden = false;
        }

        function renderDropdown(items) {
            if (!dropdown) return;
            if (!items.length) {
                dropdown.innerHTML = '';
                hideDropdown();
                return;
            }
            dropdown.innerHTML = items.map(item => `
                <div class="search-item" data-product="${item.name}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <div class="search-item-name">${item.name}</div>
                        <div class="search-item-price">$${item.price}</div>
                    </div>
                </div>
            `).join('');
            showDropdown();
        }

        input.addEventListener('input', () => {
            const query = input.value;
            if (!query.trim()) {
                hideDropdown();
                return;
            }
            const results = getSearchResults(query);
            renderDropdown(results);
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = input.value;
                if (!query) return;
                const product = findProductByQuery(query);
                if (product) {
                    localStorage.setItem('buyme_selected_product', JSON.stringify(product));
                    window.location.href = '../product.html';
                } else {
                    showNotification(`No results for "${query}"`, 'error');
                }
            }
        });

        dropdown?.addEventListener('click', (e) => {
            const item = e.target.closest('.search-item');
            if (!item) return;
            const productName = item.dataset.product;
            const product = findProductByName(productName);
            if (!product) return;
            localStorage.setItem('buyme_selected_product', JSON.stringify(product));
            window.location.href = '../product.html';
        });

        document.addEventListener('click', (e) => {
            if (!dropdown || dropdown.hidden) return;
            if (dropdown.contains(e.target) || input.contains(e.target)) return;
            hideDropdown();
        });
    });

    // Header icon buttons
    document.getElementById('wishlistBtn')?.addEventListener('click', () => {
        showNotification(`You have ${wishlist.size} items in wishlist`, 'success');
    });

    document.getElementById('cartBtn')?.addEventListener('click', () => {
        showNotification(`You have ${cartCount} items in cart`, 'success');
    });

    const accountBtn = document.getElementById('accountBtn');
    const accountDropdown = document.getElementById('accountDropdown');
    const openLoginBtn = document.getElementById('openLogin');
    const openSignupBtn = document.getElementById('openSignup');
    const logoutBtn = document.getElementById('logoutBtn');

    function setAccountDropdown(open) {
        if (!accountDropdown || !accountBtn) return;
        accountDropdown.hidden = !open;
        accountBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    function openAuthPage(mode) {
        const returnTo = encodeURIComponent('/home/index.html');
        const url = `/login/login.html?mode=${encodeURIComponent(mode)}&return=${returnTo}`;
        window.location.href = url;
    }

    accountBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = accountDropdown && !accountDropdown.hidden;
        setAccountDropdown(!isOpen);
    });

    openLoginBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        setAccountDropdown(false);
        openAuthPage('login');
    });

    openSignupBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        setAccountDropdown(false);
        openAuthPage('signup');
    });

    logoutBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('buyme_current_user');
        updateAccountUI();
        setAccountDropdown(false);
        showNotification('Logged out', 'success');
        window.location.href = '../login/login.html?mode=login&return=../home/index.html';
    });

    document.addEventListener('click', (e) => {
        if (!accountDropdown || accountDropdown.hidden) return;
        if (accountDropdown.contains(e.target) || accountBtn?.contains(e.target)) return;
        setAccountDropdown(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            setAccountDropdown(false);
        }
    });

    document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
        showNotification('Menu opened', 'success');
    });
}

// ====================================
// SCROLL ANIMATIONS
// ====================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });

    // Observe sections
    document.querySelectorAll('.product-section').forEach(section => {
        observer.observe(section);
    });
}

// ====================================
// SMOOTH SCROLL
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====================================
// HEADER SCROLL EFFECT
// ====================================
let lastScroll = 0;
const header = document.getElementById('header');
const categoryMenu = document.getElementById('categoryMenu');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 0) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// ====================================
// LAZY LOADING IMAGES
// ====================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    // Observe all product images
    document.querySelectorAll('.product-image').forEach(img => {
        imageObserver.observe(img);
    });
}

// ====================================
// PARALLAX EFFECT FOR HERO
// ====================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ====================================
// RESPONSIVE PRODUCT GRID
// ====================================
function adjustProductGrid() {
    const width = window.innerWidth;
    const grids = document.querySelectorAll('.products-grid');
    
    grids.forEach(grid => {
        if (width < 480) {
            grid.style.gridTemplateColumns = '1fr';
        } else if (width < 768) {
            grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        } else if (width < 1024) {
            grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        } else {
            grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
        }
    });
}

window.addEventListener('resize', adjustProductGrid);

// ====================================
// INITIALIZE APP
// ====================================
document.addEventListener('DOMContentLoaded', async () => {
    if (window.location.protocol === 'file:') {
        showNotification('Run the app via http://localhost:5000 for login/DB to work', 'error');
    }

    // Initialize Lucide icons
    lucide.createIcons();

    const apiLoaded = await loadProductsFromApi();
    if (!apiLoaded) {
        showNotification('Using local product data (API offline)', 'error');
    }

    // Render products
    renderProducts();

    // Update account UI
    updateAccountUI();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Adjust product grid
    adjustProductGrid();
    
    // Show welcome message
    setTimeout(() => {
        showNotification('Welcome to buy@me!', 'success');
    }, 500);
    
    console.log('%cðŸ›ï¸ buy@me E-Commerce Platform', 'font-size: 20px; font-weight: bold; color: #6366f1;');
    console.log('%cPremium shopping experience at your fingertips', 'font-size: 14px; color: #64748b;');
});

// ====================================
// PERFORMANCE OPTIMIZATION
// ====================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(() => {
    // Your scroll logic here
}, 10));

// ====================================
// ERROR HANDLING
// ====================================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// Handle image loading errors
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext fill="%23d1d5db" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage Not Found%3C/text%3E%3C/svg%3E';
    }
}, true);

// ====================================
// LOCAL STORAGE (Save Cart & Wishlist)
// ====================================
function saveToLocalStorage() {
    localStorage.setItem('cartCount', cartCount);
    localStorage.setItem('wishlist', JSON.stringify([...wishlist]));
}

function loadFromLocalStorage() {
    const savedCartCount = localStorage.getItem('cartCount');
    const savedWishlist = localStorage.getItem('wishlist');
    
    if (savedCartCount) {
        cartCount = parseInt(savedCartCount);
        updateCartBadge();
    }
    
    if (savedWishlist) {
        wishlist = new Set(JSON.parse(savedWishlist));
        updateWishlistBadge();
    }
}

// Load saved data on page load
window.addEventListener('load', loadFromLocalStorage);

// Save data before page unload
window.addEventListener('beforeunload', saveToLocalStorage);

// ====================================
// KEYBOARD NAVIGATION
// ====================================
document.addEventListener('keydown', (e) => {
    // ESC key to close notifications
    if (e.key === 'Escape') {
        const notification = document.querySelector('.notification');
        if (notification) {
            notification.remove();
        }
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// ====================================
// CONSOLE STYLING
// ====================================
console.log('%c ', 'font-size: 100px; background: linear-gradient(135deg, #6366f1, #ec4899); padding: 50px;');
console.log('%cbuy@me - Premium E-Commerce', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #6366f1, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%cVersion 1.0.0', 'color: #64748b; font-size: 12px;');
console.log('%c\nðŸ“¦ Products Loaded: ' + (productsData.trending.length + productsData.bestSellers.length + productsData.newArrivals.length + productsData.recommended.length), 'color: #10b981; font-size: 14px;');
console.log('%cðŸŽ¨ Premium UI/UX Design', 'color: #6366f1; font-size: 14px;');
console.log('%cðŸš€ Optimized Performance', 'color: #f59e0b; font-size: 14px;');
console.log('%cðŸ“± Fully Responsive', 'color: #ec4899; font-size: 14px;');


