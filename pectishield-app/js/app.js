/**
 * PectiShield™ Web App Interactive Logic
 * Brand: PectiShield™ ("Perisai Alami, Segar Lebih Lama")
 * Contact WA: +62 877-7742-1044
 */

// Product Database
const PRODUCTS = {
  'spray-500': {
    id: 'spray-500',
    name: 'PectiShield™ Trigger Spray 500 ml',
    tag: 'Siap Pakai (Ready to Use)',
    price: 35000,
    coverage: '±15–20 kg buah/sayur',
    target: 'UMKM, pedagang ritel pasar, rumah tangga',
    image: 'assets/product-spray.jpg',
    badge: 'Paling Populer',
    desc: 'Dilengkapi botol spray berkualitas tinggi dengan semprotan kabut mikro merata. Langsung semprot tanpa perlu dilarutkan.'
  },
  'jerigen-5l': {
    id: 'jerigen-5l',
    name: 'PectiShield™ Jerigen 5 Liter',
    tag: 'Skala Kemitraan / B2B Grosir',
    price: 275000,
    coverage: '±150–200 kg buah/sayur',
    target: 'Kelompok tani, pengepul buah, distributor & eksportir',
    image: 'assets/hero-lifestyle.jpg',
    badge: 'Hemat Rp 75.000',
    desc: 'Kemasan volume besar ekonomis untuk pengaplikasian celup (dipping bath) atau tangki sprayer punggung perkebunan.'
  },
  'sample-trial': {
    id: 'sample-trial',
    name: 'Paket Sampel Uji Coba 100 ml',
    tag: 'Khusus Pelaku Usaha & Kelompok Tani',
    price: 0,
    coverage: '±3–5 kg sampel uji',
    target: 'Petani, pedagang, distributor yang ingin uji efektivitas',
    image: 'assets/product-spray.jpg',
    badge: 'Uji Coba Gratis',
    desc: 'Buktikan sendiri daya tahan panen Anda sebelum membeli skala besar. Cukup ganti ongkos kirim atau ambil di Mataram, NTB.'
  }
};

// Fruit Freshness Comparison Data
const FRUIT_DATA = {
  mangga: {
    name: 'Mangga Arumanis',
    icon: '🥭',
    origin: 'Sentra Panen NTB & Jawa',
    days: {
      1: {
        control: { status: 'Segar Baru Panen', weightLoss: '0%', firmness: '100%', fungal: '0%', note: 'Kulit hijau mulus, tekstur padat segar.' },
        coated: { status: 'Segar Baru Dilapisi PectiShield™', weightLoss: '0%', firmness: '100%', fungal: '0%', note: 'Terlindungi lapisan biopolimer mikroskopis bening tak berbau.' }
      },
      5: {
        control: { status: 'Mulai Melunak & Muncul Bintik', weightLoss: '6.5%', firmness: '75%', fungal: '10%', note: 'Laju respirasi tinggi mempercepat pematangan berlebih.' },
        coated: { status: 'Tetap Kencang & Segar Prima', weightLoss: '1.2%', firmness: '95%', fungal: '0%', note: 'Respirasi ditekan, kelembapan alami buah terkunci sempurna.' }
      },
      10: {
        control: { status: 'Keriput & Muncul Antraknosa Jamur', weightLoss: '14.8%', firmness: '45%', fungal: '45%', note: 'Kulit cokelat bintik hitam, aroma fermentasi asam mulai terasa.' },
        coated: { status: 'Kondisi Prima & Warna Alami Terjaga', weightLoss: '2.8%', firmness: '88%', fungal: '0%', note: 'Kitosan menghambat spora jamur, vitamin C cegah browning.' }
      },
      14: {
        control: { status: 'BUSUK TOTAL / TIDAK LAYAK JUAL', weightLoss: '24.2%', firmness: '20%', fungal: '85%', note: 'Daging buah lembek berair, kerugian finansial 100%.' },
        coated: { status: 'MASIH SEGAR & SANGAT LAYAK JUAL', weightLoss: '4.5%', firmness: '80%', fungal: '< 5%', note: 'Dapat dijual dengan harga premium, susut bobot minim.' }
      }
    }
  },
  tomat: {
    name: 'Tomat Sayur & Cherry',
    icon: '🍅',
    origin: 'Petani Dataran Tinggi Sembalun / Lombok',
    days: {
      1: {
        control: { status: 'Segar Merah Merona', weightLoss: '0%', firmness: '100%', fungal: '0%', note: 'Kulit licin berkilau.' },
        coated: { status: 'Segar Dilapisi PectiShield™', weightLoss: '0%', firmness: '100%', fungal: '0%', note: 'Terselubung lapisan tipis edible biocoating.' }
      },
      5: {
        control: { status: 'Kulit Mulai Mengkerut Lemah', weightLoss: '7.8%', firmness: '70%', fungal: '5%', note: 'Kadar air menguap drastis pada suhu ruang.' },
        coated: { status: 'Kencang, Padat & Mengkilap', weightLoss: '1.5%', firmness: '96%', fungal: '0%', note: 'Gliserol nabati menjaga elastisitas kulit tomat.' }
      },
      10: {
        control: { status: 'Lembek, Retak & Busuk Pangkal Tangkai', weightLoss: '16.5%', firmness: '40%', fungal: '40%', note: 'Bakteri pembusuk merusak jaringan buah.' },
        coated: { status: 'Tetap Segar Renyah, Kulit Mulus', weightLoss: '3.1%', firmness: '89%', fungal: '0%', note: 'Antimikroba kitosan menjaga area tangkai tetap steril.' }
      },
      14: {
        control: { status: 'BUSUK BASAH / AFKIR', weightLoss: '26.0%', firmness: '15%', fungal: '90%', note: 'Cairan buah bocor, tidak dapat dikonsumsi.' },
        coated: { status: 'KUALITAS DISPLAY PASAR TERJAGA', weightLoss: '5.2%', firmness: '82%', fungal: '< 5%', note: 'Tetap segar tanpa perlu chiller / kulkas pendingin.' }
      }
    }
  },
  cabai: {
    name: 'Cabai Rawit Merah',
    icon: '🌶️',
    origin: 'Sentra Hortikultura NTB',
    days: {
      1: {
        control: { status: 'Pedas Segar Baru Petik', weightLoss: '0%', firmness: '100%', fungal: '0%', note: 'Tangkai hijau segar, kulit tebal.' },
        coated: { status: 'Diproteksi PectiShield™', weightLoss: '0%', firmness: '100%', fungal: '0%', note: 'Formula bio-spray melindungi tangkai dan kulit.' }
      },
      5: {
        control: { status: 'Tangkai Menghitam & Layu', weightLoss: '9.2%', firmness: '65%', fungal: '15%', note: 'Susut bobot cepat membuat bobot timbangan turun drastis.' },
        coated: { status: 'Tangkai Tetap Hijau Segar', weightLoss: '1.9%', firmness: '94%', fungal: '0%', note: 'Antioksidan alami mencegah pencoklatan tangkai.' }
      },
      10: {
        control: { status: 'Kering Keriput & Busuk Hitam', weightLoss: '19.4%', firmness: '35%', fungal: '55%', note: 'Harga jatuh hingga 70% di tingkat pengepul.' },
        coated: { status: 'Warna Merah Menyala & Padat', weightLoss: '3.8%', firmness: '87%', fungal: '0%', note: 'Kehilangan berat ditekan lebih dari 80%.' }
      },
      14: {
        control: { status: 'KAPANG PUTIH & BUSUK PEKAT', weightLoss: '31.5%', firmness: '10%', fungal: '95%', note: 'Rugi total, bau menyengat.' },
        coated: { status: 'LAYAK KONSUMSI & JUAL', weightLoss: '6.4%', firmness: '80%', fungal: '< 5%', note: 'Aman dikirim ke luar pulau tanpa takut busuk di kapal.' }
      }
    }
  },
  pisang: {
    name: 'Pisang Cavendish / Barangan',
    icon: '🍌',
    origin: 'Kebun Pisang Lokal',
    days: {
      1: {
        control: { status: 'Kuning Sempurna Grade A', weightLoss: '0%', firmness: '100%', fungal: '0%', note: 'Kulit mulus tanpa flek hitam.' },
        coated: { status: 'Terproteksi PectiShield™', weightLoss: '0%', firmness: '100%', fungal: '0%', note: 'Pektin alami menyatu harmonis dengan kulit pisang.' }
      },
      5: {
        control: { status: 'Muncul Bercak Coklat Cepat', weightLoss: '5.5%', firmness: '70%', fungal: '10%', note: 'Gas etilen alami mempercepat pembusukan.' },
        coated: { status: 'Kuning Bersih Bebas Noda', weightLoss: '1.1%', firmness: '94%', fungal: '0%', note: 'Pertukaran gas dikontrol oleh matriks pektin-kitosan.' }
      },
      10: {
        control: { status: 'Kulit Hitam Dominan & Lembek', weightLoss: '13.2%', firmness: '40%', fungal: '40%', note: 'Daging buah mulai berair dan terlalu lembek.' },
        coated: { status: 'Kuning Keemasan Mulus', weightLoss: '2.6%', firmness: '86%', fungal: '0%', note: 'Vitamin C aktif menahan oksidasi polifenol.' }
      },
      14: {
        control: { status: 'OVER-RIPE / BUSUK RUSAK', weightLoss: '22.0%', firmness: '18%', fungal: '80%', note: 'Tangkai patah dan berjamur.' },
        coated: { status: 'TEKSTUR PADAT, MANIS ALAMI', weightLoss: '4.8%', firmness: '78%', fungal: '< 5%', note: 'Rasa dan aroma manis asli tetap terjaga 100%.' }
      }
    }
  }
};

// Shopping Cart State
let cart = {
  'spray-500': 1 // Default 1 botol
};

// Selected Fruit & Day for simulator
let currentFruit = 'mangga';
let currentDay = 10;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initCart();
  initFreshnessSimulator();
  initRoiCalculator();
  initBeforeAfterSlider();
  initModals();
  initSmoothScroll();
});

// ========================
// SHOPPING CART FUNCTIONS
// ========================
function initCart() {
  renderCart();
}

function addToCart(productId, qty = 1) {
  if (!PRODUCTS[productId]) return;
  
  if (cart[productId]) {
    cart[productId] += qty;
  } else {
    cart[productId] = qty;
  }
  
  renderCart();
  showToast(`✅ ${PRODUCTS[productId].name} berhasil ditambahkan ke keranjang!`);
  openCartDrawer();
}

function updateCartQty(productId, delta) {
  if (!cart[productId]) return;
  cart[productId] += delta;
  if (cart[productId] <= 0) {
    delete cart[productId];
  }
  renderCart();
}

function removeFromCart(productId) {
  if (cart[productId]) {
    delete cart[productId];
    renderCart();
    showToast('Produk dihapus dari keranjang.');
  }
}

function getCartSubtotal() {
  let subtotal = 0;
  for (const [id, qty] of Object.entries(cart)) {
    if (PRODUCTS[id]) {
      subtotal += PRODUCTS[id].price * qty;
    }
  }
  return subtotal;
}

function getCartItemCount() {
  let count = 0;
  for (const qty of Object.values(cart)) {
    count += qty;
  }
  return count;
}

function renderCart() {
  const cartBadge = document.getElementById('cart-badge');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const cartFooter = document.getElementById('cart-footer');
  
  const count = getCartItemCount();
  if (cartBadge) {
    cartBadge.textContent = count;
    cartBadge.style.display = count > 0 ? 'flex' : 'none';
  }
  
  if (!cartItemsContainer) return;
  
  const itemKeys = Object.keys(cart);
  if (itemKeys.length === 0) {
    cartItemsContainer.innerHTML = '';
    if (cartEmptyState) cartEmptyState.classList.remove('hidden');
    if (cartFooter) cartFooter.classList.add('hidden');
    return;
  }
  
  if (cartEmptyState) cartEmptyState.classList.add('hidden');
  if (cartFooter) cartFooter.classList.remove('hidden');
  
  let html = '';
  for (const [id, qty] of Object.entries(cart)) {
    const item = PRODUCTS[id];
    if (!item) continue;
    const itemTotal = item.price * qty;
    
    html += `
      <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80 transition hover:border-emerald-300">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg bg-white border border-slate-200">
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-1">
            <h4 class="font-bold text-slate-900 text-sm leading-tight truncate">${item.name}</h4>
            <button onclick="removeFromCart('${id}')" class="text-slate-400 hover:text-red-500 p-1" title="Hapus">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
          </div>
          <p class="text-xs text-slate-500">${item.tag}</p>
          <div class="flex items-center justify-between mt-2">
            <span class="text-emerald-700 font-bold text-sm">${item.price === 0 ? 'GRATIS (Trial)' : 'Rp' + item.price.toLocaleString('id-ID')}</span>
            <div class="flex items-center bg-white border border-slate-300 rounded-lg overflow-hidden shadow-sm">
              <button onclick="updateCartQty('${id}', -1)" class="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold text-sm">-</button>
              <span class="w-8 text-center text-xs font-semibold text-slate-800">${qty}</span>
              <button onclick="updateCartQty('${id}', 1)" class="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold text-sm">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  cartItemsContainer.innerHTML = html;
  if (cartSubtotalEl) {
    const subtotal = getCartSubtotal();
    cartSubtotalEl.textContent = 'Rp' + subtotal.toLocaleString('id-ID');
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
    setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0');
    setTimeout(() => backdrop.classList.add('hidden'), 300);
  }
}

// Checkout Modal
function openCheckoutModal() {
  closeCartDrawer();
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.remove('hidden');
    renderCheckoutSummary();
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function renderCheckoutSummary() {
  const summaryEl = document.getElementById('checkout-order-summary');
  if (!summaryEl) return;
  
  let html = '<div class="space-y-2 mb-4 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">';
  for (const [id, qty] of Object.entries(cart)) {
    const item = PRODUCTS[id];
    if (!item) continue;
    const total = item.price * qty;
    html += `
      <div class="flex justify-between items-center">
        <span><b>${qty}x</b> ${item.name}</span>
        <span class="font-semibold text-slate-700">${item.price === 0 ? 'Gratis' : 'Rp' + total.toLocaleString('id-ID')}</span>
      </div>
    `;
  }
  const total = getCartSubtotal();
  html += `
    <div class="border-t border-slate-200 pt-2 flex justify-between items-center font-bold text-sm text-emerald-800">
      <span>Total Pesanan:</span>
      <span>Rp${total.toLocaleString('id-ID')}</span>
    </div>
  </div>`;
  summaryEl.innerHTML = html;
}

function submitWhatsAppOrder(event) {
  event.preventDefault();
  
  const name = document.getElementById('buyer-name').value.trim();
  const phone = document.getElementById('buyer-phone').value.trim();
  const address = document.getElementById('buyer-address').value.trim();
  const notes = document.getElementById('buyer-notes').value.trim();
  
  if (!name || !phone || !address) {
    alert('Mohon lengkapi Nama, No WhatsApp, dan Alamat Pengiriman.');
    return;
  }
  
  let orderList = '';
  for (const [id, qty] of Object.entries(cart)) {
    const item = PRODUCTS[id];
    if (!item) continue;
    const itemPriceText = item.price === 0 ? 'Gratis (Trial)' : 'Rp' + (item.price * qty).toLocaleString('id-ID');
    orderList += `• ${qty}x ${item.name} (${itemPriceText})\n`;
  }
  
  const total = getCartSubtotal();
  const totalText = 'Rp' + total.toLocaleString('id-ID');
  
  const message = 
`*FORMULIR PEMESANAN RESMI PECTISHIELD™*
================================
Halo Tim PectiShield Agro-Bio Innovation,
Saya ingin melakukan pemesanan produk:

*Rincian Pesanan:*
${orderList}
*Total Nilai Produk:* ${totalText}

*Data Pemesan:*
• *Nama:* ${name}
• *No. WhatsApp:* ${phone}
• *Alamat Pengiriman:* ${address}
${notes ? `• *Catatan Khusus:* ${notes}\n` : ''}
================================
Mohon konfirmasi ketersediaan stok, total biaya pengiriman dari Mataram (NTB), dan nomor rekening pembayaran. Terima kasih!`;

  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/6287777421044?text=${encoded}`;
  
  // Open WhatsApp in new tab
  window.open(waUrl, '_blank');
  
  closeCheckoutModal();
  showToast('🚀 Mengalihkan ke WhatsApp Admin PectiShield™...');
}

// Quick Buy direct button (Single item)
function quickBuy(productId) {
  cart = {}; // Reset cart or set to this product
  cart[productId] = 1;
  renderCart();
  openCheckoutModal();
}

// ========================
// FRESHNESS SIMULATOR
// ========================
function initFreshnessSimulator() {
  selectFruit('mangga');
  selectDay(10);
}

function selectFruit(fruitKey) {
  if (!FRUIT_DATA[fruitKey]) return;
  currentFruit = fruitKey;
  
  // Update fruit buttons styling
  document.querySelectorAll('.fruit-tab-btn').forEach(btn => {
    const isSelected = btn.getAttribute('data-fruit') === fruitKey;
    if (isSelected) {
      btn.className = 'fruit-tab-btn px-4 py-2 rounded-xl text-sm font-bold bg-emerald-700 text-white shadow-md flex items-center gap-2 transition';
    } else {
      btn.className = 'fruit-tab-btn px-4 py-2 rounded-xl text-sm font-semibold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 flex items-center gap-2 transition';
    }
  });
  
  updateSimulatorView();
}

function selectDay(dayNum) {
  currentDay = parseInt(dayNum);
  
  // Update day buttons styling
  document.querySelectorAll('.day-tab-btn').forEach(btn => {
    const day = parseInt(btn.getAttribute('data-day'));
    if (day === currentDay) {
      btn.className = 'day-tab-btn px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow transition';
    } else {
      btn.className = 'day-tab-btn px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition';
    }
  });
  
  updateSimulatorView();
}

function updateSimulatorView() {
  const fruit = FRUIT_DATA[currentFruit];
  if (!fruit) return;
  
  const dayData = fruit.days[currentDay];
  if (!dayData) return;
  
  // Update titles
  const titleEl = document.getElementById('sim-fruit-title');
  if (titleEl) {
    titleEl.textContent = `${fruit.icon} ${fruit.name} — Hari ke-${currentDay}`;
  }
  
  // Update Control (Tanpa PectiShield)
  const controlStatusEl = document.getElementById('control-status');
  const controlWeightEl = document.getElementById('control-weight');
  const controlFirmnessEl = document.getElementById('control-firmness');
  const controlFungalEl = document.getElementById('control-fungal');
  const controlNoteEl = document.getElementById('control-note');
  
  if (controlStatusEl) controlStatusEl.textContent = dayData.control.status;
  if (controlWeightEl) controlWeightEl.textContent = dayData.control.weightLoss;
  if (controlFirmnessEl) controlFirmnessEl.textContent = dayData.control.firmness;
  if (controlFungalEl) controlFungalEl.textContent = dayData.control.fungal;
  if (controlNoteEl) controlNoteEl.textContent = dayData.control.note;
  
  // Update Coated (Dengan PectiShield)
  const coatedStatusEl = document.getElementById('coated-status');
  const coatedWeightEl = document.getElementById('coated-weight');
  const coatedFirmnessEl = document.getElementById('coated-firmness');
  const coatedFungalEl = document.getElementById('coated-fungal');
  const coatedNoteEl = document.getElementById('coated-note');
  
  if (coatedStatusEl) coatedStatusEl.textContent = dayData.coated.status;
  if (coatedWeightEl) coatedWeightEl.textContent = dayData.coated.weightLoss;
  if (coatedFirmnessEl) coatedFirmnessEl.textContent = dayData.coated.firmness;
  if (coatedFungalEl) coatedFungalEl.textContent = dayData.coated.fungal;
  if (coatedNoteEl) coatedNoteEl.textContent = dayData.coated.note;
}

// ========================
// ROI & SAVINGS CALCULATOR
// ========================
function initRoiCalculator() {
  const volumeSlider = document.getElementById('calc-volume');
  const priceSlider = document.getElementById('calc-price');
  const rotSlider = document.getElementById('calc-rot');
  
  if (volumeSlider && priceSlider && rotSlider) {
    volumeSlider.addEventListener('input', calculateROI);
    priceSlider.addEventListener('input', calculateROI);
    rotSlider.addEventListener('input', calculateROI);
    calculateROI();
  }
}

function calculateROI() {
  const volumeSlider = document.getElementById('calc-volume');
  const priceSlider = document.getElementById('calc-price');
  const rotSlider = document.getElementById('calc-rot');
  
  if (!volumeSlider || !priceSlider || !rotSlider) return;
  
  const weeklyKg = parseFloat(volumeSlider.value);
  const pricePerKg = parseFloat(priceSlider.value);
  const rotRatePct = parseFloat(rotSlider.value);
  
  // Update label displays
  document.getElementById('calc-volume-val').textContent = weeklyKg.toLocaleString('id-ID') + ' kg / minggu';
  document.getElementById('calc-price-val').textContent = 'Rp' + pricePerKg.toLocaleString('id-ID') + ' / kg';
  document.getElementById('calc-rot-val').textContent = rotRatePct + '%';
  
  // Math Calculations (Per Month = 4.2 weeks)
  const monthlyKg = weeklyKg * 4.2;
  const normalLossKg = monthlyKg * (rotRatePct / 100);
  const normalLossRupiah = normalLossKg * pricePerKg;
  
  // PectiShield reduces postharvest rot by 75% on average
  const savedLossKg = normalLossKg * 0.75;
  const savedValueRupiah = savedLossKg * pricePerKg;
  
  // Coating Requirement: 1 Liter protects ~35 kg of fruits
  const litersNeeded = monthlyKg / 35;
  
  // Cost: using 5 Liter jerigen (Rp275.000 / 5L = Rp55.000/liter)
  const costPerLiter = 55000;
  const totalCostRupiah = Math.ceil(litersNeeded * costPerLiter);
  
  // Net Benefit
  const netSavingsRupiah = savedValueRupiah - totalCostRupiah;
  const roiPct = Math.round((netSavingsRupiah / totalCostRupiah) * 100);
  
  // Jerigen recommendation
  const jerigenNeeded = Math.ceil(litersNeeded / 5);
  
  // Update UI Elements
  document.getElementById('roi-saved-loss').textContent = 'Rp' + Math.round(savedValueRupiah).toLocaleString('id-ID');
  document.getElementById('roi-cost').textContent = 'Rp' + Math.round(totalCostRupiah).toLocaleString('id-ID');
  document.getElementById('roi-net-profit').textContent = 'Rp' + Math.round(netSavingsRupiah).toLocaleString('id-ID');
  document.getElementById('roi-percent-badge').textContent = `ROI ${roiPct}%`;
  
  const packRecEl = document.getElementById('roi-recommendation');
  if (packRecEl) {
    if (weeklyKg <= 60) {
      packRecEl.textContent = `Rekomendasi Paket: 3–4 Botol Trigger Spray 500 ml/bulan`;
    } else {
      packRecEl.textContent = `Rekomendasi Paket: ${jerigenNeeded} Jerigen 5 Liter/bulan (Skala Hemat B2B)`;
    }
  }
}

// ========================
// BEFORE / AFTER SLIDER
// ========================
function initBeforeAfterSlider() {
  const container = document.getElementById('comparison-container');
  const sliderInput = document.getElementById('comparison-range');
  const beforeOverlay = document.getElementById('comparison-before');
  const handle = document.getElementById('comparison-divider');
  
  if (sliderInput && beforeOverlay && handle) {
    sliderInput.addEventListener('input', (e) => {
      const val = e.target.value;
      beforeOverlay.style.width = `${val}%`;
      handle.style.left = `${val}%`;
    });
  }
}

// ========================
// FREE SAMPLE MODAL
// ========================
function initModals() {
  // Free sample submission
  const sampleForm = document.getElementById('sample-request-form');
  if (sampleForm) {
    sampleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const farmName = document.getElementById('sample-farm-name').value.trim();
      const fruitType = document.getElementById('sample-fruit-type').value.trim();
      const phone = document.getElementById('sample-phone').value.trim();
      const city = document.getElementById('sample-city').value.trim();
      
      const message = 
`*PENGAJUAN SAMPEL UJI COBA GRATIS PECTISHIELD™*
================================
Halo Tim PectiShield Mataram,
Saya ingin mengajukan sampel gratis 100 ml untuk pengujian mandiri:

• *Nama Usaha / Petani:* ${farmName}
• *Komoditas Buah/Sayur:* ${fruitType}
• *Kota / Lokasi:* ${city}
• *No. WhatsApp:* ${phone}
================================
Mohon informasi jadwal pengiriman sampel atau titik pengambilan di Mataram. Terima kasih!`;

      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/6287777421044?text=${encoded}`, '_blank');
      closeSampleModal();
      showToast('🎉 Pengajuan sampel uji coba terkirim! Tim kami akan segera menghubungi Anda.');
    });
  }
}

function openSampleModal() {
  const modal = document.getElementById('sample-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeSampleModal() {
  const modal = document.getElementById('sample-modal');
  if (modal) modal.classList.add('hidden');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Toast Notifications
function showToast(message) {
  const toast = document.getElementById('app-toast');
  const toastText = document.getElementById('toast-text');
  if (toast && toastText) {
    toastText.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }, 3800);
  }
}

// Smooth scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close mobile menu if open
          const menu = document.getElementById('mobile-menu');
          if (menu && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
          }
        }
      }
    });
  });
}
