/**
 * RAJ ICECREAM — INTERACTIVE JAVASCRIPT ENGINE
 * Full mega-menus (matching Jeni's reference screenshots), e-commerce cart,
 * 4-pint box builder, quick search overlay, rewards modal, and direct WhatsApp checkout.
 */

// ==========================================
// 1. ARTISAN FLAVOURS DATASET
// ==========================================
const FLAVOURS = [
  {
    id: 'rajbhog-kesar',
    name: 'Royal Rajbhog Kesar',
    category: 'heritage',
    badge: 'Signature',
    badgeClass: 'accent-orange',
    img: 'images/flavor-rajbhog.jpg',
    tastingNotes: ['Kashmiri Saffron', 'California Almonds', 'Green Cardamom'],
    desc: 'Our crown jewel. Rich whole dairy milk infused with authentic Kashmiri Mongra saffron, studded with slow-roasted almond flakes and crushed pistachios.',
    ingredients: 'Pure whole buffalo milk, dairy cream, Kashmiri saffron, roasted almonds, pistachios, cane sugar, green cardamom.',
    profile: { creaminess: 96, sweetness: 78, crunch: 85, fruitiness: 15 },
    servings: {
      scoop: { label: 'Scoop', price: 60 },
      double: { label: 'Double', price: 110 },
      pint: { label: 'Pint 500ml', price: 240 },
      tub: { label: 'Tub 1000ml', price: 450 }
    }
  },
  {
    id: 'belgian-dark-chocolate',
    name: 'Belgian Dark Truffle',
    category: 'chocolate',
    badge: 'Bestseller',
    badgeClass: '',
    img: 'images/flavor-belgian-chocolate.jpg',
    tastingNotes: ['70% Belgian Cocoa', 'Dark Ganache Swirl', 'Cocoa Nibs'],
    desc: 'Crafted with premium 70% Belgian dark chocolate, melted into rich fresh cream and folded with bittersweet chocolate fudge ribbons.',
    ingredients: 'Whole milk, dairy cream, imported Belgian cocoa mass, cocoa butter, organic cane sugar, dark chocolate flakes.',
    profile: { creaminess: 92, sweetness: 65, crunch: 70, fruitiness: 5 },
    servings: {
      scoop: { label: 'Scoop', price: 65 },
      double: { label: 'Double', price: 120 },
      pint: { label: 'Pint 500ml', price: 260 },
      tub: { label: 'Tub 1000ml', price: 490 }
    }
  },
  {
    id: 'alphonso-mango-mousse',
    name: 'Alphonso Mango Silk',
    category: 'fruit',
    badge: 'Seasonal Fresh',
    badgeClass: 'accent-gold',
    img: 'images/flavor-mango.jpg',
    tastingNotes: ['Ratnagiri Hapus', 'Velvety Cream', 'Citrus Bloom'],
    desc: 'Pure sunshine in a scoop. Hand-picked ripe Ratnagiri Alphonso mango pulp churned into fresh sweet dairy cream without artificial food colors.',
    ingredients: '100% natural Alphonso mango pulp, fresh dairy cream, whole milk, unrefined cane sugar, splash of natural lemon juice.',
    profile: { creaminess: 90, sweetness: 82, crunch: 10, fruitiness: 98 },
    servings: {
      scoop: { label: 'Scoop', price: 60 },
      double: { label: 'Double', price: 110 },
      pint: { label: 'Pint 500ml', price: 240 },
      tub: { label: 'Tub 1000ml', price: 450 }
    }
  },
  {
    id: 'fresh-sitaphal',
    name: 'Fresh Sitaphal Pulp',
    category: 'fruit',
    badge: 'Cult Classic',
    badgeClass: 'accent-orange',
    img: 'images/flavor-sitaphal.jpg',
    tastingNotes: ['Custard Apple Pulp', 'Velvety Malai', 'Natural Sugar'],
    desc: 'Each custard apple is hand-deseeded by our culinary team. Unbelievably rich, grainy and silky natural texture that melts immediately on your tongue.',
    ingredients: 'Fresh custard apple (Sitaphal) pulp, fresh whole milk, rich malai cream, cane sugar.',
    profile: { creaminess: 95, sweetness: 84, crunch: 25, fruitiness: 95 },
    servings: {
      scoop: { label: 'Scoop', price: 65 },
      double: { label: 'Double', price: 120 },
      pint: { label: 'Pint 500ml', price: 250 },
      tub: { label: 'Tub 1000ml', price: 470 }
    }
  },
  {
    id: 'roasted-almond-kesar',
    name: 'Roasted Almond Kesar',
    category: 'heritage',
    badge: 'Chef Favorite',
    badgeClass: '',
    img: 'images/flavor-almond.jpg',
    tastingNotes: ['Slow-Pan Toasted Nuts', 'Golden Saffron', 'Butter Essence'],
    desc: 'Whole California almonds slow-toasted in small batches to unleash their nutty fragrance, swirled into saffron-steeped whole milk cream.',
    ingredients: 'Whole buffalo milk, dairy cream, oven-roasted California almonds, saffron strands, cane sugar.',
    profile: { creaminess: 92, sweetness: 75, crunch: 95, fruitiness: 10 },
    servings: {
      scoop: { label: 'Scoop', price: 60 },
      double: { label: 'Double', price: 110 },
      pint: { label: 'Pint 500ml', price: 240 },
      tub: { label: 'Tub 1000ml', price: 450 }
    }
  },
  {
    id: 'tender-coconut-malai',
    name: 'Tender Coconut Malai',
    category: 'fruit',
    badge: 'Pure & Refreshing',
    badgeClass: 'accent-gold',
    img: 'images/flavor-coconut.jpg',
    tastingNotes: ['Fresh Coconut Meat', 'Tender Coconut Water', 'Snowy Cream'],
    desc: 'Made with real tender green coconut meat (malai) and coconut nectar. Incredibly refreshing, snowy-white, and subtly sweet with fine coconut bits.',
    ingredients: 'Real tender coconut pulp, coconut water, fresh dairy cream, cane sugar.',
    profile: { creaminess: 94, sweetness: 70, crunch: 35, fruitiness: 90 },
    servings: {
      scoop: { label: 'Scoop', price: 60 },
      double: { label: 'Double', price: 110 },
      pint: { label: 'Pint 500ml', price: 240 },
      tub: { label: 'Tub 1000ml', price: 450 }
    }
  },
  {
    id: 'pistachio-malai-shahi',
    name: 'Shahi Pista Malai',
    category: 'heritage',
    badge: 'Royal Heritage',
    badgeClass: '',
    img: 'images/flavor-pistachio.jpg',
    tastingNotes: ['Iranian Pistachios', 'Rabdi Reduction', 'Cardamom'],
    desc: 'Inspired by royal Mughal banquets. Milk reduced slowly to thick rabdi consistency, blended with freshly crushed emerald pistachios.',
    ingredients: 'Condensed rabdi whole milk, heavy cream, green pistachios, organic cane sugar, pure cardamom powder.',
    profile: { creaminess: 98, sweetness: 76, crunch: 88, fruitiness: 10 },
    servings: {
      scoop: { label: 'Scoop', price: 65 },
      double: { label: 'Double', price: 120 },
      pint: { label: 'Pint 500ml', price: 260 },
      tub: { label: 'Tub 1000ml', price: 490 }
    }
  },
  {
    id: 'strawberry-cheesecake',
    name: 'Strawberry Cheesecake Swirl',
    category: 'artisan',
    badge: 'Artisan Hit',
    badgeClass: 'accent-orange',
    img: 'images/flavor-strawberry.jpg',
    tastingNotes: ['Mahabaleshwar Berries', 'Graham Crumble', 'Cream Cheese'],
    desc: 'Silky mascarpone cream cheese ice cream rippled with tart Mahabaleshwar strawberry compote and buttery spiced biscuit crumble.',
    ingredients: 'Fresh dairy cream, soft cream cheese, strawberry compote, handmade butter biscuit crust, cane sugar.',
    profile: { creaminess: 93, sweetness: 80, crunch: 65, fruitiness: 88 },
    servings: {
      scoop: { label: 'Scoop', price: 65 },
      double: { label: 'Double', price: 120 },
      pint: { label: 'Pint 500ml', price: 250 },
      tub: { label: 'Tub 1000ml', price: 470 }
    }
  },
  {
    id: 'salted-butterscotch-caramel',
    name: 'Salted Butterscotch Crisp',
    category: 'artisan',
    badge: 'Popular',
    badgeClass: 'accent-gold',
    img: 'images/flavor-caramel.jpg',
    tastingNotes: ['Burnt Brown Butter', 'Himalayan Salt', 'Cashew Crunch'],
    desc: 'Golden brown butter toffee sauce swirled into custard-base cream, loaded with handmade crunchy caramelized cashew praline pebbles.',
    ingredients: 'Whole milk, heavy cream, dairy butter, cane sugar, roasted cashews, sea salt flakes.',
    profile: { creaminess: 91, sweetness: 85, crunch: 90, fruitiness: 5 },
    servings: {
      scoop: { label: 'Scoop', price: 60 },
      double: { label: 'Double', price: 110 },
      pint: { label: 'Pint 500ml', price: 240 },
      tub: { label: 'Tub 1000ml', price: 450 }
    }
  },
  {
    id: 'lotus-biscoff-crunch',
    name: 'Spiced Biscoff Crumble',
    category: 'artisan',
    badge: 'Trend Special',
    badgeClass: '',
    img: 'images/flavor-biscoff.jpg',
    tastingNotes: ['Speculoos Spice', 'Cookie Butter Swirl', 'Brown Sugar'],
    desc: 'Spiced Belgian speculoos cookie spread whipped through whole milk cream, generously layered with crunchy caramelized cinnamon biscuit crumbs.',
    ingredients: 'Dairy milk, cream, authentic speculoos cookies, caramelized sugar syrup, cinnamon, sea salt.',
    profile: { creaminess: 90, sweetness: 86, crunch: 85, fruitiness: 5 },
    servings: {
      scoop: { label: 'Scoop', price: 70 },
      double: { label: 'Double', price: 130 },
      pint: { label: 'Pint 500ml', price: 270 },
      tub: { label: 'Tub 1000ml', price: 510 }
    }
  },
  {
    id: 'rose-gulkand-blossom',
    name: 'Rose Gulkand Blossom',
    category: 'heritage',
    badge: 'Floral Bliss',
    badgeClass: 'accent-orange',
    img: 'images/flavor-rose.jpg',
    tastingNotes: ['Damask Rose Petals', 'Sun-Cured Gulkand', 'Pistachio Flakes'],
    desc: 'Natural sun-cured Damask rose petal preserve (Gulkand) gently folded into sweet creamy milk, garnished with toasted pistachios.',
    ingredients: 'Fresh milk, cream, organic sun-cured rose gulkand, natural rose water extract, cane sugar, pistachios.',
    profile: { creaminess: 94, sweetness: 78, crunch: 45, fruitiness: 80 },
    servings: {
      scoop: { label: 'Scoop', price: 60 },
      double: { label: 'Double', price: 110 },
      pint: { label: 'Pint 500ml', price: 240 },
      tub: { label: 'Tub 1000ml', price: 450 }
    }
  },
  {
    id: 'brownie-fudge-overload',
    name: 'Dark Brownie Fudge Chunk',
    category: 'chocolate',
    badge: 'Decadent',
    badgeClass: '',
    img: 'images/flavor-brownie.jpg',
    tastingNotes: ['Fudgy Brownie Bits', 'Cocoa Ganache', 'Melt-in-mouth'],
    desc: 'Fudgy, chewy dark chocolate brownies baked fresh in our kitchen, crumbled into rich dark chocolate gelato with molten chocolate ganache pools.',
    ingredients: 'Fresh cream, dark cocoa, house-baked chocolate brownies, cocoa butter, organic cane sugar.',
    profile: { creaminess: 92, sweetness: 79, crunch: 75, fruitiness: 5 },
    servings: {
      scoop: { label: 'Scoop', price: 70 },
      double: { label: 'Double', price: 130 },
      pint: { label: 'Pint 500ml', price: 270 },
      tub: { label: 'Tub 1000ml', price: 510 }
    }
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let cart = JSON.parse(localStorage.getItem('raj_cart') || '[]');
let customBoxPints = [];
const CUSTOM_BOX_PRICE = 899;

const activeServings = {};
FLAVOURS.forEach(f => {
  activeServings[f.id] = 'pint';
});

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMegaMenus();
  initMobileDrawer();
  renderFlavourGrid('all');
  initCategoryFilters();
  renderBoxBuilder();
  updateCartUI();
  initCartDrawer();
  initCheckoutEvents();
  initQuickViewModal();
  initSearchModal();
  initRewardsModal();
});

// ==========================================
// 4. MEGA MENUS LOGIC (MATCHING SCREENSHOTS)
// ==========================================
function initMegaMenus() {
  const dropdownTriggers = document.querySelectorAll('.nav-item-dropdown');
  const megaPanels = document.querySelectorAll('.mega-menu-panel');

  dropdownTriggers.forEach(trigger => {
    const dropdownKey = trigger.dataset.dropdown;
    const btn = trigger.querySelector('.nav-menu-btn');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = trigger.classList.contains('active');

      // Close all first
      closeAllMegaMenus();

      if (!isActive) {
        trigger.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        const targetPanel = document.getElementById(`megaMenu-${dropdownKey}`);
        if (targetPanel) {
          targetPanel.classList.add('open');
        }
      }
    });
  });

  // Close when clicking outside header
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-header')) {
      closeAllMegaMenus();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllMegaMenus();
    }
  });
}

function closeAllMegaMenus() {
  document.querySelectorAll('.nav-item-dropdown').forEach(d => {
    d.classList.remove('active');
    d.querySelector('.nav-menu-btn')?.setAttribute('aria-expanded', 'false');
  });
  document.querySelectorAll('.mega-menu-panel').forEach(p => {
    p.classList.remove('open');
  });
}

function filterAndScroll(category) {
  closeAllMegaMenus();
  const filterBtn = document.querySelector(`.filter-tab-btn[data-category="${category}"]`);
  if (filterBtn) {
    document.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
    filterBtn.classList.add('active');
  }
  renderFlavourGrid(category);
  const section = document.getElementById('flavours');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================
// 5. STICKY HEADER & MOBILE DRAWER
// ==========================================
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileDrawer() {
  const openBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeMobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  const links = document.querySelectorAll('.mobile-nav-link');

  const openDrawer = () => {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  links.forEach(l => l.addEventListener('click', closeDrawer));
}

// ==========================================
// 6. SEARCH OVERLAY & REWARDS
// ==========================================
function initSearchModal() {
  const openBtn = document.getElementById('openSearchBtn');
  const closeBtn = document.getElementById('closeSearchBtn');
  const backdrop = document.getElementById('searchBackdrop');
  const input = document.getElementById('flavourSearchInput');

  if (openBtn && backdrop) {
    openBtn.addEventListener('click', () => {
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(() => input?.focus(), 150);
      performSearch('');
    });
  }

  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', () => {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  if (input) {
    input.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }

  // Keyboard shortcut '/' to search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      openBtn?.click();
    }
  });
}

function searchFor(term) {
  const input = document.getElementById('flavourSearchInput');
  if (input) {
    input.value = term;
    performSearch(term);
  }
}

function performSearch(query) {
  const list = document.getElementById('searchResultsList');
  if (!list) return;

  const q = query.trim().toLowerCase();
  const matches = FLAVOURS.filter(f => {
    if (!q) return true;
    return f.name.toLowerCase().includes(q) ||
           f.desc.toLowerCase().includes(q) ||
           f.ingredients.toLowerCase().includes(q) ||
           f.tastingNotes.some(n => n.toLowerCase().includes(q));
  });

  if (matches.length === 0) {
    list.innerHTML = `<p style="padding:1.5rem; text-align:center; color:#7A6A64;">No flavours found for "${query}". Try searching "saffron", "chocolate", or "mango".</p>`;
    return;
  }

  list.innerHTML = matches.map(f => `
    <div class="search-result-item" onclick="selectSearchResult('${f.id}')">
      <img src="${f.img}" alt="${f.name}" class="search-result-img">
      <div class="search-result-info">
        <strong>${f.name}</strong>
        <span>${f.tastingNotes.join(' • ')}</span>
      </div>
      <span style="margin-left:auto; font-weight:800; color:#682A7A;">₹${f.servings.pint.price}</span>
    </div>
  `).join('');
}

function selectSearchResult(flavourId) {
  const backdrop = document.getElementById('searchBackdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
  openFlavourDetails(flavourId);
}

function initRewardsModal() {
  const openBtn = document.getElementById('openRewardsBtn');
  const mobileLink = document.getElementById('mobileRewardsLink');
  const closeBtn = document.getElementById('closeRewardsBtn');
  const backdrop = document.getElementById('rewardsBackdrop');

  const openRewards = (e) => {
    if (e) e.preventDefault();
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('mobileDrawerOverlay');
    if (drawer && overlay) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    }
    if (backdrop) {
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  if (openBtn) openBtn.addEventListener('click', openRewards);
  if (mobileLink) mobileLink.addEventListener('click', openRewards);

  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', () => {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
}

// ==========================================
// 7. FLAVOURS GRID & RENDERING
// ==========================================
function renderFlavourGrid(category = 'all') {
  const grid = document.getElementById('flavourGrid');
  if (!grid) return;

  const filtered = category === 'all' 
    ? FLAVOURS 
    : FLAVOURS.filter(f => f.category === category);

  grid.innerHTML = filtered.map(f => {
    const activeSize = activeServings[f.id] || 'pint';
    const currentPrice = f.servings[activeSize].price;
    const currentLabel = f.servings[activeSize].label;

    return `
      <div class="flavour-card" data-flavour-id="${f.id}">
        <div class="card-image-wrap">
          <img src="${f.img}" alt="${f.name} Artisan Ice Cream" class="card-img" loading="lazy">
          <span class="card-badge-tag ${f.badgeClass}">${f.badge}</span>
          <button type="button" class="quick-view-trigger" onclick="openFlavourDetails('${f.id}')">
            <i class="fa-solid fa-eye"></i> Quick View
          </button>
        </div>

        <div class="card-content">
          <div class="tasting-notes-tags">
            ${f.tastingNotes.map(n => `<span class="note-tag">${n}</span>`).join('')}
          </div>

          <h3 class="flavour-name">${f.name}</h3>
          <p class="flavour-desc">${f.desc}</p>

          <!-- Serving Size Selector -->
          <div class="serving-selector" data-flavour-id="${f.id}">
            <button type="button" class="serving-chip ${activeSize === 'scoop' ? 'active' : ''}" data-size="scoop" onclick="selectServingSize('${f.id}', 'scoop')">
              Scoop
            </button>
            <button type="button" class="serving-chip ${activeSize === 'double' ? 'active' : ''}" data-size="double" onclick="selectServingSize('${f.id}', 'double')">
              Double
            </button>
            <button type="button" class="serving-chip ${activeSize === 'pint' ? 'active' : ''}" data-size="pint" onclick="selectServingSize('${f.id}', 'pint')">
              Pint
            </button>
            <button type="button" class="serving-chip ${activeSize === 'tub' ? 'active' : ''}" data-size="tub" onclick="selectServingSize('${f.id}', 'tub')">
              1L Tub
            </button>
          </div>

          <div class="card-action-row">
            <div class="price-display">
              <span class="price-label" id="price-label-${f.id}">Price (${currentLabel})</span>
              <span class="price-amount" id="price-${f.id}">₹${currentPrice}</span>
            </div>

            <button type="button" class="btn btn-add-cart" onclick="addFlavourToCart('${f.id}')">
              <i class="fa-solid fa-plus"></i> Add To Bag
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function initCategoryFilters() {
  const buttons = document.querySelectorAll('.filter-tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      renderFlavourGrid(cat);
    });
  });
}

function selectServingSize(flavourId, sizeKey) {
  activeServings[flavourId] = sizeKey;
  const f = FLAVOURS.find(item => item.id === flavourId);
  if (!f) return;

  const selector = document.querySelector(`.serving-selector[data-flavour-id="${flavourId}"]`);
  if (selector) {
    const chips = selector.querySelectorAll('.serving-chip');
    chips.forEach(c => c.classList.remove('active'));
    const clickedChip = selector.querySelector(`.serving-chip[data-size="${sizeKey}"]`);
    if (clickedChip) clickedChip.classList.add('active');
  }

  const priceEl = document.getElementById(`price-${flavourId}`);
  if (priceEl) {
    priceEl.textContent = `₹${f.servings[sizeKey].price}`;
  }

  const labelEl = document.getElementById(`price-label-${flavourId}`);
  if (labelEl) {
    labelEl.textContent = `Price (${f.servings[sizeKey].label})`;
  }
}

// ==========================================
// 8. CUSTOM 4-PINT BOX BUILDER
// ==========================================
function renderBoxBuilder() {
  const picker = document.getElementById('boxFlavourPicker');
  if (!picker) return;

  picker.innerHTML = FLAVOURS.map(f => `
    <div class="picker-item" onclick="addPintToBox('${f.id}')">
      <img src="${f.img}" alt="${f.name}" class="picker-img" loading="lazy">
      <div class="picker-info">
        <strong>${f.name}</strong>
        <span>500ml Pint</span>
      </div>
      <div class="picker-add-icon">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>
  `).join('');

  updateBoxVisualSlots();

  const resetBtn = document.getElementById('resetBoxBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      customBoxPints = [];
      updateBoxVisualSlots();
      showToast('Box reset. Pick any 4 fresh pints! ✨');
    });
  }

  const addBoxBtn = document.getElementById('addBoxToCartBtn');
  if (addBoxBtn) {
    addBoxBtn.addEventListener('click', addCustomBoxToCart);
  }
}

function addPintToBox(flavourId) {
  if (customBoxPints.length >= 4) {
    showToast('Your box is full! (4/4 Pints). Click Add To Bag.');
    return;
  }

  const f = FLAVOURS.find(item => item.id === flavourId);
  if (!f) return;

  customBoxPints.push(f);
  updateBoxVisualSlots();
  showToast(`Added ${f.name} to box! 🍨`);
}

function removePintFromBox(index) {
  if (index >= 0 && index < customBoxPints.length) {
    customBoxPints.splice(index, 1);
    updateBoxVisualSlots();
    showToast(`Removed from box.`);
  }
}

function updateBoxVisualSlots() {
  const container = document.getElementById('boxSlotsContainer');
  const countEl = document.getElementById('boxCount');
  const priceDisplay = document.getElementById('boxPriceDisplay');
  const progressBar = document.getElementById('boxProgressBar');
  const addBtn = document.getElementById('addBoxToCartBtn');

  const count = customBoxPints.length;
  if (countEl) countEl.textContent = count;
  if (progressBar) progressBar.style.width = `${(count / 4) * 100}%`;
  
  if (priceDisplay) {
    priceDisplay.textContent = count === 4 ? `₹${CUSTOM_BOX_PRICE} (Special)` : `₹${count * 240}`;
  }

  if (addBtn) {
    addBtn.disabled = count !== 4;
  }

  if (container) {
    let slotsHtml = '';
    for (let i = 0; i < 4; i++) {
      if (i < customBoxPints.length) {
        const pint = customBoxPints[i];
        slotsHtml += `
          <div class="box-slot filled" data-slot="${i}">
            <button type="button" class="slot-remove-btn" onclick="removePintFromBox(${i})" title="Remove pint">&times;</button>
            <div class="slot-circle"><i class="fa-solid fa-ice-cream"></i></div>
            <span>${pint.name}</span>
          </div>
        `;
      } else {
        slotsHtml += `
          <div class="box-slot empty" data-slot="${i}">
            <div class="slot-circle"><i class="fa-solid fa-plus"></i></div>
            <span>Select Pint ${i + 1}</span>
          </div>
        `;
      }
    }
    container.innerHTML = slotsHtml;
  }
}

function addCustomBoxToCart() {
  if (customBoxPints.length !== 4) return;

  const names = customBoxPints.map(p => p.name).join(', ');
  const boxItem = {
    id: 'custom-box-' + Date.now(),
    name: 'Artisan 4-Pint Box 🎁',
    servingKey: 'box-4',
    servingLabel: 'Curated 4 x 500ml Box',
    notes: names,
    price: CUSTOM_BOX_PRICE,
    quantity: 1,
    img: 'images/hero-scoops.jpg'
  };

  cart.push(boxItem);
  saveCart();
  updateCartUI();
  openCartDrawer();
  showToast('Custom 4-Pint Box added to your bag! 🎉');

  customBoxPints = [];
  updateBoxVisualSlots();
}

// ==========================================
// 9. CART & SHOPPING BAG ENGINE
// ==========================================
function addFlavourToCart(flavourId) {
  const f = FLAVOURS.find(item => item.id === flavourId);
  if (!f) return;

  const sizeKey = activeServings[flavourId] || 'pint';
  const servingObj = f.servings[sizeKey];

  const existing = cart.find(item => item.flavourId === flavourId && item.servingKey === sizeKey);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: `${flavourId}-${sizeKey}`,
      flavourId: flavourId,
      name: f.name,
      servingKey: sizeKey,
      servingLabel: servingObj.label,
      price: servingObj.price,
      quantity: 1,
      img: f.img
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${f.name} (${servingObj.label}) to bag! 🍨`);
}

function updateCartQuantity(cartItemId, delta) {
  const item = cart.find(i => i.id === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== cartItemId);
  }

  saveCart();
  updateCartUI();
}

function removeCartItem(cartItemId) {
  cart = cart.filter(i => i.id !== cartItemId);
  saveCart();
  updateCartUI();
  showToast('Item removed from bag.');
}

function saveCart() {
  localStorage.setItem('raj_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const badge = document.getElementById('cartCountBadge');
  const headerTotal = document.getElementById('cartSubtotalHeader');
  const emptyView = document.getElementById('cartEmptyView');
  const filledView = document.getElementById('cartFilledView');
  const itemsList = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const grandTotalEl = document.getElementById('cartGrandTotal');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (badge) badge.textContent = totalItems;
  if (headerTotal) headerTotal.textContent = `₹${subtotal}`;
  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (grandTotalEl) grandTotalEl.textContent = `₹${subtotal}`;

  if (totalItems === 0) {
    if (emptyView) emptyView.style.display = 'flex';
    if (filledView) filledView.style.display = 'none';
  } else {
    if (emptyView) emptyView.style.display = 'none';
    if (filledView) filledView.style.display = 'flex';

    if (itemsList) {
      itemsList.innerHTML = cart.map(item => `
        <div class="cart-item-card">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <span class="cart-item-serving">${item.servingLabel}</span>
            ${item.notes ? `<p style="font-size:0.7rem; color:#6B5E63; margin-top:2px;">${item.notes}</p>` : ''}
            <span class="cart-item-price">₹${item.price * item.quantity}</span>
          </div>
          
          <div class="cart-qty-control">
            <button type="button" class="cart-qty-btn" onclick="updateCartQuantity('${item.id}', -1)">-</button>
            <span class="cart-qty-num">${item.quantity}</span>
            <button type="button" class="cart-qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
          </div>

          <button type="button" class="cart-remove-item" onclick="removeCartItem('${item.id}')" title="Delete item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `).join('');
    }
  }
}

function initCartDrawer() {
  const openBtn = document.getElementById('openCartBtn');
  const closeBtn = document.getElementById('closeCartBtn');
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  const startBtn = document.getElementById('startScoopingBtn');

  if (openBtn) openBtn.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (overlay) overlay.addEventListener('click', closeCartDrawer);
  if (startBtn) startBtn.addEventListener('click', closeCartDrawer);
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 10. WHATSAPP DIRECT ORDER GENERATOR
// ==========================================
function initCheckoutEvents() {
  const typeRadios = document.querySelectorAll('input[name="orderType"]');
  const addressInput = document.getElementById('custAddress');
  const checkoutBtn = document.getElementById('checkoutWhatsappBtn');

  typeRadios.forEach(r => {
    r.addEventListener('change', (e) => {
      if (addressInput) {
        addressInput.style.display = e.target.value === 'delivery' ? 'block' : 'none';
      }
    });
  });

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', processWhatsappCheckout);
  }
}

function processWhatsappCheckout() {
  if (cart.length === 0) {
    showToast('Your bag is empty!');
    return;
  }

  const nameInput = document.getElementById('custName');
  const phoneInput = document.getElementById('custPhone');
  const addressInput = document.getElementById('custAddress');
  const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'pickup';

  const name = nameInput?.value.trim() || 'Valued Customer';
  const phone = phoneInput?.value.trim() || 'Not specified';
  const address = addressInput?.value.trim() || '';

  if (orderType === 'delivery' && !address) {
    showToast('Please enter your delivery address in Bhuj!');
    if (addressInput) addressInput.focus();
    return;
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let message = `*🍦 NEW RAJ ICECREAM ORDER*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Customer:* ${name}\n`;
  message += `*Phone:* ${phone}\n`;
  message += `*Order Type:* ${orderType === 'delivery' ? '🚚 Home Delivery in Bhuj' : '🏪 Parlour Takeaway (Prestige, Bhuj)'}\n`;
  if (orderType === 'delivery') {
    message += `*Address:* ${address}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*ORDER ITEMS:*\n`;

  cart.forEach((item, idx) => {
    message += `${idx + 1}. *${item.name}* (${item.servingLabel})\n`;
    if (item.notes) {
      message += `   ↳ Included: ${item.notes}\n`;
    }
    message += `   Qty: ${item.quantity} × ₹${item.price} = *₹${item.price * item.quantity}*\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*ESTIMATED TOTAL: ₹${total}*\n`;
  message += `Chilled insulated packaging: FREE\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `_Please confirm my order and share estimated preparation time. Thank you!_`;

  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/919773496321?text=${encoded}`;
  window.open(waUrl, '_blank');
}

// ==========================================
// 11. QUICK VIEW MODAL
// ==========================================
function initQuickViewModal() {
  const backdrop = document.getElementById('flavourModalBackdrop');
  const closeBtn = document.getElementById('closeFlavourModalBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeFlavourDetails);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeFlavourDetails();
    });
  }
}

function openFlavourDetails(flavourId) {
  const f = FLAVOURS.find(item => item.id === flavourId);
  if (!f) return;

  const modalBody = document.getElementById('flavourModalBody');
  const backdrop = document.getElementById('flavourModalBackdrop');
  if (!modalBody || !backdrop) return;

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-wrap">
        <img src="${f.img}" alt="${f.name}" class="modal-img">
        <span class="card-badge-tag ${f.badgeClass}" style="position:absolute; top:1rem; left:1rem;">${f.badge}</span>
      </div>

      <div class="modal-info-pane">
        <div class="tasting-notes-tags">
          ${f.tastingNotes.map(n => `<span class="note-tag">${n}</span>`).join('')}
        </div>
        <h2 class="modal-title">${f.name}</h2>
        <p class="modal-desc">${f.desc}</p>

        <div class="profile-meters">
          <div class="meter-row">
            <span>Creaminess</span>
            <div class="meter-bar"><div class="meter-fill" style="width: ${f.profile.creaminess}%;"></div></div>
          </div>
          <div class="meter-row">
            <span>Sweetness</span>
            <div class="meter-bar"><div class="meter-fill" style="width: ${f.profile.sweetness}%;"></div></div>
          </div>
          <div class="meter-row">
            <span>Crunch</span>
            <div class="meter-bar"><div class="meter-fill" style="width: ${f.profile.crunch}%;"></div></div>
          </div>
        </div>

        <div class="ingredients-box">
          <strong>Artisan Ingredients:</strong><br>
          ${f.ingredients}
        </div>

        <div class="card-action-row" style="margin-top:auto;">
          <div class="price-display">
            <span class="price-label">Pint 500ml</span>
            <span class="price-amount">₹${f.servings.pint.price}</span>
          </div>
          <button type="button" class="btn btn-primary" onclick="addFlavourToCart('${f.id}'); closeFlavourDetails();">
            <i class="fa-solid fa-plus"></i> Add To Bag
          </button>
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeFlavourDetails() {
  const backdrop = document.getElementById('flavourModalBackdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 12. TOAST NOTIFICATIONS
// ==========================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}
