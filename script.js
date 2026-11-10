
// FULL EXTENDED CATALOG DATA (35 ITEMS)
const PRODUCTS = [
    // KOMBO
    { id: 1, name: "3 ta Pitsa Kombo", category: "kombo", price: 84000, desc: "Istalgan 3 ta kichik (25 sm) pitsa to'plami super narxda.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80", badge: "Hit 🔥" },
    { id: 2, name: "Tovuqli Kombo", category: "kombo", price: 65000, desc: "Pitsa (25sm), Tovuqli strips va 0.5L Koka-Kola.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80", badge: "Aksiya" },
    { id: 17, name: "Donarli Juftlik", category: "kombo", price: 92000, desc: "2 ta Cheddar Donar pitsa va 2 ta Coca-Cola 0.5L.", img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&q=80", badge: "Yangilik" },
    { id: 18, name: "Oilaviy Kombo", category: "kombo", price: 135000, desc: "2 ta Katta pitsa (35sm), Kartoshka fri va 1.5L Coca-Cola.", img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=80" },
    { id: 19, name: "Kids Kombo 👶", category: "kombo", price: 42000, desc: "Margarita pitsa (25sm), sharbat va desert pishiriq.", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80", badge: "Bolalar" },

    // KRUASSAN
    { id: 3, name: "Pitsa Kruassan Pepperoni", category: "kruassan", price: 28000, desc: "Qat-qat xamir, pepperoni va pishloqli to'ldirma.", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80", badge: "Populyar" },
    { id: 4, name: "Pitsa Kruassan Pishloqli", category: "kruassan", price: 26000, desc: "Mayin eritilgan motsarella va cheddar pishlog'i.", img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&q=80" },
    { id: 20, name: "Pitsa Kruassan Tovuqli", category: "kruassan", price: 29000, desc: "Tovuq go'shti, qo'ziqorin va oq creamy sous.", img: "https://images.unsplash.com/photo-1626078436896-e2a22906df1a?w=500&q=80" },
    { id: 21, name: "Pitsa Kruassan Barbekyu", category: "kruassan", price: 30000, desc: "Dumlangan tovuq, barbekyu sous va piyoz.", img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80" },

    // PITSA
    { id: 5, name: "Pepperoni Pitsa", category: "pitsa", price: 45000, desc: "Mol go'shtidan pepperoni kolbasasi, motsarella va original tomat sousi.", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80", badge: "Top 🌶" },
    { id: 6, name: "Margarita Pitsa", category: "pitsa", price: 39000, desc: "Pishgan pomidor bo'laklari, motsarella pishlog'i va oregano.", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80", badge: "Veggie 🌱" },
    { id: 7, name: "Cheddar Donar Pitsa", category: "pitsa", price: 55000, desc: "Donar go'shti, cheddar pishloq sousi, piyoz va pomidorlar.", img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&q=80", badge: "Yangi 🔥" },
    { id: 8, name: "Tovuqli Barbekyu", category: "pitsa", price: 49000, desc: "Dumlangan tovuq go'shti, barbekyu sousi, motsarella va piyoz.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80" },
    { id: 22, name: "To'rt Pishloq (4 Cheeses)", category: "pitsa", price: 58000, desc: "Motsarella, cheddar, parmezan va ko'k pishloq uyg'unligi.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80" },
    { id: 23, name: "Gavayya Pitsasi 🍍", category: "pitsa", price: 47000, desc: "Tovuq go'shti, shirin ananas bo'laklari va motsarella.", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80" },
    { id: 24, name: "Meksikancha Pitsa 🌶", category: "pitsa", price: 52000, desc: "Achchiq halapeno qalampiri, qiymali mol go'shti, bulg'or qalampiri.", img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=500&q=80", badge: "Achchiq 🌶" },
    { id: 25, name: "Qo'ziqorinli Super", category: "pitsa", price: 48000, desc: "Yangi shampinyon qo'ziqorinlari, zaytun va pishloq.", img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&q=80" },

    // GAZAKLAR
    { id: 9, name: "Tovuqli Stripslar (5 dona)", category: "gazaklar", price: 24000, desc: "Qarsillama tovuq go'shti bo'lakchalari.", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80" },
    { id: 10, name: "Kartoshka Fri", category: "gazaklar", price: 16000, desc: "Qovurilgan qarsillama oltin kartoshka tayubchalari.", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&q=80" },
    { id: 26, name: "Pishloqli Tayyoqchalar", category: "gazaklar", price: 22000, desc: "Eritilgan pishloqli qarsillama sarimsoqli non.", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&q=80" },
    { id: 27, name: "Tovuq Qanotchalari (6 dona)", category: "gazaklar", price: 29000, desc: "Achchiq-chuchuk marinadlangan qovurilgan qanotchalar.", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&q=80" },

    // DESERTLAR
    { id: 11, name: "Shokoladli Fondan", category: "desertlar", price: 22000, desc: "Ichida issiq eritilgan shokolad bo'lgan pishiriq.", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80" },
    { id: 12, name: "Cinnamon Roll", category: "desertlar", price: 18000, desc: "Darchin va dolchinli mazali rulet.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80" },
    { id: 28, name: "Chizkeyk Nyu-York", category: "desertlar", price: 25000, desc: "Mayin tvorogli klassik chizkeyk poratsiyasi.", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80" },

    // ICHIMLIKLAR
    { id: 13, name: "Coca-Cola 0.5L", category: "ichimliklar", price: 9000, desc: "Salqinlashtiruvchi klassik gazli ichimlik.", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80" },
    { id: 14, name: "Fanta 0.5L", category: "ichimliklar", price: 9000, desc: "Yorqin apelsin ta'mli gazli ichimlik.", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&q=80" },
    { id: 29, name: "Sprite 0.5L", category: "ichimliklar", price: 9000, desc: "Limon va laym ta'mli salqin ichimlik.", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&q=80" },
    { id: 30, name: "Meva Sharbati Craftea 0.5L", category: "ichimliklar", price: 8000, desc: "Tabiiy sovuq choy va meva ekstrakti.", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&q=80" },

    // SALATLAR
    { id: 31, name: "Sezar Salati Tovuq bilan", category: "salatlar", price: 32000, desc: "Qovurilgan tovuq ko'kragi, roman salat barglari, parmezan va suxariklar.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80" },
    { id: 32, name: "Yunon Salati 🌱", category: "salatlar", price: 28000, desc: "Yangi bodring, pomidor, feta pishlog'i va zaytun moyi.", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80" },

    // SOUSLAR
    { id: 15, name: "Cheddar Pishloqli Sous", category: "souslar", price: 4000, desc: "Pitsa chetlari uchun pishloqli sous.", img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=500&q=80" },
    { id: 16, name: "Barbekyu Sous", category: "souslar", price: 4000, desc: "Dumlangan mevali nordon-chuchuk sous.", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&q=80" },
    { id: 33, name: "Sarimsoqli (Garlic) Sous", category: "souslar", price: 4000, desc: "Krem-sarimsoq xushbo'y sousi.", img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&q=80" }
];

// STATE MANAGEMENT
let cart = [];
let activeModalProduct = null;
let selectedPizzaSize = 25;
let selectedPizzaCrust = 'Yupqa';
let currentSlide = 0;
let carouselTimer = null;

// INITIALIZATION
window.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupCategoryNav();
    setupDeliveryToggle();
    setupSearch();
    startCarousel();
});

// CAROUSEL
function startCarousel() {
    carouselTimer = setInterval(() => {
        nextSlide();
    }, 4500);
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.banner-slide');
    const dotsContainer = document.getElementById('carouselDots');

    if (!slides.length) return;

    slides[currentSlide].classList.add('opacity-0', 'pointer-events-none');
    slides[currentSlide].classList.remove('opacity-100');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.remove('opacity-0', 'pointer-events-none');
    slides[currentSlide].classList.add('opacity-100');

    if (dotsContainer) {
        const dots = dotsContainer.children;

        for (let i = 0; i < dots.length; i++) {
            if (i === currentSlide) {
                dots[i].className = "w-8 h-2.5 rounded-full bg-white transition-all";
            } else {
                dots[i].className = "w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white transition-all";
            }
        }
    }
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

// CITY MODAL
function openCityModal() {
    document.getElementById('cityModal').classList.remove('hidden');
}

function closeCityModal() {
    document.getElementById('cityModal').classList.add('hidden');
}

function selectCity(cityName) {
    document.getElementById('currentCity').innerText = cityName;
    closeCityModal();
    openToast(`Shahar o'zgartirildi: ${cityName}`);
}

// RENDER PRODUCTS
function renderProducts(filterText = '') {
    const categories = [
        'kombo',
        'kruassan',
        'pitsa',
        'gazaklar',
        'desertlar',
        'ichimliklar',
        'salatlar',
        'souslar'
    ];

    categories.forEach(cat => {
        const container = document.getElementById(`grid-${cat}`);

        if (!container) return;

        const filtered = PRODUCTS.filter(p =>
            p.category === cat &&
            p.name.toLowerCase().includes(filterText.toLowerCase())
        );

        if (filtered.length === 0) {
            container.innerHTML = `<p class="text-xs text-gray-400 italic col-span-full">Mahsulot topilmadi.</p>`;
            return;
        }

        container.innerHTML = filtered.map(product => `
      <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
        <div class="relative overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
          ${product.badge ? `<span class="absolute top-3 left-3 bg-brand-red text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-sm z-10">${product.badge}</span>` : ''}

          <img src="${product.img}" alt="${product.name}" class="h-44 object-contain group-hover:scale-105 transition-transform duration-300">
        </div>

        <div class="p-4 flex flex-col flex-grow justify-between">
          <div>
            <h3 class="font-extrabold text-base text-gray-900 group-hover:text-brand-red transition-colors mb-1">${product.name}</h3>
            <p class="text-xs text-gray-500 font-medium line-clamp-2 mb-4">${product.desc}</p>
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-gray-50">
            <div>
              <span class="text-[10px] text-gray-400 font-bold block">${product.category === 'pitsa' ? 'dan boshlab' : 'narxi'}</span>
              <span class="font-black text-sm md:text-base text-gray-900">${product.price.toLocaleString()} so'm</span>
            </div>

            <button onclick="openCustomizer(${product.id})" class="bg-red-50 hover:bg-brand-red text-brand-red hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors duration-200">
              Tanlash
            </button>
          </div>
        </div>
      </div>
    `).join('');
    });
}

// PRODUCT MODAL
function openCustomizer(productId) {
    const product = PRODUCTS.find(p => p.id === productId);

    if (!product) return;

    activeModalProduct = product;
    selectedPizzaSize = 25;
    selectedPizzaCrust = 'Yupqa';

    document.getElementById('modalTitle').innerText = product.name;
    document.getElementById('modalDesc').innerText = product.desc;
    document.getElementById('modalImg').src = product.img;

    const pizzaGroup = document.getElementById('pizzaOptionsGroup');

    if (product.category === 'pitsa') {
        pizzaGroup.classList.remove('hidden');
        updateSizeButtons();
        updateCrustButtons();
    } else {
        pizzaGroup.classList.add('hidden');
    }

    updateModalPrice();
    document.getElementById('productModal').classList.remove('hidden');
}

function closeCustomizer() {
    document.getElementById('productModal').classList.add('hidden');
    activeModalProduct = null;
}

function setPizzaSize(size) {
    selectedPizzaSize = size;
    updateSizeButtons();
    updateModalPrice();
}

function setPizzaCrust(crust) {
    selectedPizzaCrust = crust;
    updateCrustButtons();
    updateModalPrice();
}

function updateSizeButtons() {
    [25, 30, 35].forEach(size => {
        const btn = document.getElementById(`sizeBtn${size}`);

        if (size === selectedPizzaSize) {
            btn.className = "py-2 rounded-lg bg-white shadow-sm text-brand-red font-bold";
        } else {
            btn.className = "py-2 rounded-lg text-gray-600 font-medium";
        }
    });
}

function updateCrustButtons() {
    ['Yupqa', 'Qalin', 'Pishloqli'].forEach(crust => {
        const btn = document.getElementById(`crustBtn${crust}`);

        if (btn) {
            if (crust === selectedPizzaCrust) {
                btn.className = "py-2 rounded-lg bg-white shadow-sm text-brand-red font-bold";
            } else {
                btn.className = "py-2 rounded-lg text-gray-600 font-medium";
            }
        }
    });
}

function calculateCurrentModalPrice() {
    if (!activeModalProduct) return 0;

    let price = activeModalProduct.price;

    if (activeModalProduct.category === 'pitsa') {
        if (selectedPizzaSize === 30) price += 20000;
        if (selectedPizzaSize === 35) price += 35000;
        if (selectedPizzaCrust === 'Pishloqli') price += 12000;
    }

    return price;
}

function updateModalPrice() {
    const price = calculateCurrentModalPrice();

    document.getElementById('modalCalculatedPrice').innerText =
        `${price.toLocaleString()} so'm`;
}

// ADD TO CART
function addModalProductToCart() {
    if (!activeModalProduct) return;

    const itemPrice = calculateCurrentModalPrice();

    const variantKey = activeModalProduct.category === 'pitsa'
        ? `${activeModalProduct.id}-${selectedPizzaSize}-${selectedPizzaCrust}`
        : `${activeModalProduct.id}`;

    const nameDetails = activeModalProduct.category === 'pitsa'
        ? `${activeModalProduct.name} (${selectedPizzaSize} sm, ${selectedPizzaCrust})`
        : activeModalProduct.name;

    const existingIndex = cart.findIndex(item => item.key === variantKey);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            key: variantKey,
            id: activeModalProduct.id,
            name: nameDetails,
            price: itemPrice,
            img: activeModalProduct.img,
            qty: 1
        });
    }

    const productName = activeModalProduct.name;

    closeCustomizer();
    updateCartUI();
    openToast(`${productName} savatga qo'shildi`);
}

// CART UI
function updateCartUI() {
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    document.getElementById('cartBadge').innerText = cartCount;
    document.getElementById('cartSubtotal').innerText = `${subtotal.toLocaleString()} so'm`;
    document.getElementById('cartTotal').innerText = `${subtotal.toLocaleString()} so'm`;

    const listContainer = document.getElementById('cartItemsList');

    if (cart.length === 0) {
        listContainer.innerHTML = `
      <div class="text-center py-12">
        <i class="fa-solid fa-basket-shopping text-gray-300 text-5xl mb-3"></i>
        <p class="text-sm font-black text-gray-600">Savatingiz hozircha bo'sh</p>
        <p class="text-xs text-gray-400 mt-1 font-medium">Menyudan sarxil pitsalarni tanlang!</p>
      </div>
    `;
        return;
    }

    listContainer.innerHTML = cart.map(item => `
    <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
      <img src="${item.img}" alt="${item.name}" class="w-14 h-14 object-contain rounded-lg">

      <div class="flex-grow min-w-0">
        <h4 class="font-extrabold text-xs text-gray-900 truncate">${item.name}</h4>
        <span class="text-xs font-black text-brand-red block mt-0.5">${(item.price * item.qty).toLocaleString()} so'm</span>
      </div>

      <div class="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-gray-200">
        <button onclick="changeQty('${item.key}', -1)" class="text-gray-500 hover:text-brand-red text-xs px-1">
          <i class="fa-solid fa-minus"></i>
        </button>

        <span class="font-black text-xs w-4 text-center">${item.qty}</span>

        <button onclick="changeQty('${item.key}', 1)" class="text-gray-500 hover:text-brand-red text-xs px-1">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function changeQty(key, delta) {
    const index = cart.findIndex(item => item.key === key);

    if (index === -1) return;

    cart[index].qty += delta;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    updateCartUI();
}

// CART DRAWER
function toggleCartDrawer(open) {
    const drawer = document.getElementById('cartDrawer');

    if (open) {
        drawer.classList.remove('hidden');
    } else {
        drawer.classList.add('hidden');
    }
}

document.getElementById('cartHeaderBtn').addEventListener('click', () => {
    toggleCartDrawer(true);
});

function checkoutOrder() {
    if (cart.length === 0) {
        openToast('Savat bo\'sh! Avval mahsulot tanlang.');
        return;
    }

    alert('Rahmat! Buyurtmangiz yetkazib berishga qabul qilindi.');

    cart = [];
    updateCartUI();
    toggleCartDrawer(false);
}

// DELIVERY TOGGLE
function setupDeliveryToggle() {
    const btnDel = document.getElementById('btnDelivery');
    const btnPick = document.getElementById('btnPickup');

    btnDel.addEventListener('click', () => {
        btnDel.className = "px-3 md:px-4 py-1.5 rounded-full bg-white text-brand-red shadow-sm transition-all duration-200 font-extrabold";

        btnPick.className = "px-3 md:px-4 py-1.5 rounded-full text-gray-600 hover:text-brand-red transition-all duration-200 font-bold";

        openToast("Yetkazib berish rejimi tanlandi");
    });

    btnPick.addEventListener('click', () => {
        btnPick.className = "px-3 md:px-4 py-1.5 rounded-full bg-white text-brand-red shadow-sm transition-all duration-200 font-extrabold";

        btnDel.className = "px-3 md:px-4 py-1.5 rounded-full text-gray-600 hover:text-brand-red transition-all duration-200 font-bold";

        openToast("Olib ketish rejimi tanlandi");
    });
}

// CATEGORY NAV
function setupCategoryNav() {
    const links = document.querySelectorAll('.cat-link');

    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('border-brand-red', 'text-brand-red'));
            links.forEach(l => l.classList.add('border-transparent'));

            this.classList.remove('border-transparent');
            this.classList.add('border-brand-red', 'text-brand-red');
        });
    });
}

// SEARCH
function setupSearch() {
    const toggleBtn = document.getElementById('searchToggleBtn');
    const bar = document.getElementById('searchBar');
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');

    toggleBtn.addEventListener('click', () => {
        bar.classList.toggle('hidden');

        if (!bar.classList.contains('hidden')) {
            input.focus();
        }
    });

    input.addEventListener('input', (e) => {
        renderProducts(e.target.value);
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        renderProducts('');
    });
}

// TOAST
function openToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toastMsg');

    msg.innerText = message;
    toast.classList.remove('opacity-0', 'pointer-events-none');

    setTimeout(() => {
        toast.classList.add('opacity-0', 'pointer-events-none');
    }, 2500);
}
