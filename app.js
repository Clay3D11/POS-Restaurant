const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const number = new Intl.NumberFormat("en-US");

const seedProducts = [
  { id: "D101", sku: "849200101", name: "Chopped Cheese Hero", category: "Grill", price: 8.99, cost: 3.1, tax: 0.08875, stock: 42, par: 18, vendor: "Local Butcher", cook: true, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80" },
  { id: "D102", sku: "849200102", name: "Chicken Empanada", category: "Hot Food", price: 2.75, cost: 0.85, tax: 0.08875, stock: 64, par: 30, vendor: "Casa Foods", cook: true, image: "https://images.unsplash.com/photo-1625938146369-adc83368a3df?auto=format&fit=crop&w=600&q=80" },
  { id: "D103", sku: "849200103", name: "Pernil Lunch Plate", category: "Hot Food", price: 12.5, cost: 4.25, tax: 0.08875, stock: 24, par: 16, vendor: "Casa Foods", cook: true, image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80" },
  { id: "D104", sku: "849200104", name: "Bacon Egg Cheese", category: "Breakfast", price: 5.99, cost: 1.9, tax: 0.08875, stock: 38, par: 20, vendor: "Local Butcher", cook: true, image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=600&q=80" },
  { id: "D105", sku: "849200105", name: "Cafe con Leche", category: "Breakfast", price: 2.25, cost: 0.42, tax: 0.08875, stock: 92, par: 35, vendor: "Roaster Direct", cook: false, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
  { id: "D106", sku: "849200106", name: "Fresh Smoothie", category: "Drinks", price: 6.5, cost: 2.05, tax: 0.08875, stock: 30, par: 18, vendor: "Produce Hub", cook: true, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80" },
  { id: "G201", sku: "071990095", name: "Coca-Cola 20 oz", category: "Drinks", price: 2.25, cost: 1.05, tax: 0.08875, stock: 144, par: 72, vendor: "Metro Beverage", cook: false, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80" },
  { id: "G202", sku: "028400091", name: "Plantain Chips", category: "Grocery", price: 1.99, cost: 0.74, tax: 0.08875, stock: 18, par: 24, vendor: "Bodega Wholesale", cook: false, image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80" },
  { id: "G203", sku: "011110404", name: "Goya Black Beans", category: "Grocery", price: 1.69, cost: 0.92, tax: 0, stock: 36, par: 40, vendor: "Bodega Wholesale", cook: false, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80" },
  { id: "G204", sku: "041501077", name: "Adobo Seasoning", category: "Grocery", price: 3.49, cost: 1.45, tax: 0.08875, stock: 12, par: 20, vendor: "Bodega Wholesale", cook: false, image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=600&q=80" },
  { id: "G205", sku: "004122563", name: "Fresh Avocado", category: "Produce", price: 1.5, cost: 0.82, tax: 0, stock: 58, par: 30, vendor: "Produce Hub", cook: false, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80" },
  { id: "G206", sku: "004129401", name: "Bananas by lb", category: "Produce", price: 0.79, cost: 0.38, tax: 0, stock: 82, par: 45, vendor: "Produce Hub", cook: false, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80" },
  { id: "H301", sku: "850400301", name: "House Cleaner", category: "Household", price: 4.99, cost: 2.14, tax: 0.08875, stock: 9, par: 16, vendor: "Janitorial Depot", cook: false, image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80" },
  { id: "H302", sku: "850400302", name: "Paper Towels", category: "Household", price: 6.99, cost: 3.65, tax: 0.08875, stock: 28, par: 20, vendor: "Janitorial Depot", cook: false, image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80" },
  { id: "T401", sku: "900000401", name: "NY Lotto Quick Pick", category: "Services", price: 2, cost: 1.92, tax: 0, stock: 999, par: 100, vendor: "Services", cook: false, image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?auto=format&fit=crop&w=600&q=80" },
  { id: "T402", sku: "900000402", name: "Phone Top-Up", category: "Services", price: 20, cost: 19.1, tax: 0, stock: 999, par: 100, vendor: "Services", cook: false, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" }
];

const seedStaff = [
  { id: "S01", name: "Valeria Cruz", role: "Owner", pin: "1001", wage: 42, status: "Clocked out", sales: 1840.2 },
  { id: "S02", name: "Manny Torres", role: "Manager", pin: "2210", wage: 28, status: "Clocked in", sales: 925.15 },
  { id: "S03", name: "Jada King", role: "Cashier", pin: "3320", wage: 19, status: "Clocked in", sales: 611.7 },
  { id: "S04", name: "Luis Batista", role: "Cook", pin: "4412", wage: 21, status: "Clocked in", sales: 0 }
];

const seedSales = [
  { id: 1019, hour: "8 AM", total: 41.65, payment: "card", staff: "Jada King", category: "Breakfast" },
  { id: 1020, hour: "9 AM", total: 92.14, payment: "cash", staff: "Manny Torres", category: "Grocery" },
  { id: 1021, hour: "11 AM", total: 128.45, payment: "card", staff: "Jada King", category: "Hot Food" },
  { id: 1022, hour: "1 PM", total: 214.8, payment: "split", staff: "Manny Torres", category: "Grill" },
  { id: 1023, hour: "2 PM", total: 67.35, payment: "cash", staff: "Jada King", category: "Drinks" }
];

const state = loadState();
let selectedCategory = "All";
let currentPaymentType = "cash";

function loadState() {
  const saved = localStorage.getItem("mercadoProDemo");
  if (saved) return JSON.parse(saved);
  return {
    products: structuredClone(seedProducts),
    staff: structuredClone(seedStaff),
    sales: structuredClone(seedSales),
    cart: [],
    heldOrders: [],
    kitchen: [
      { id: 1018, service: "Dine In", minutes: 6, status: "Cooking", items: ["2x Chopped Cheese Hero", "1x Fresh Smoothie"] },
      { id: 1017, service: "Delivery", minutes: 11, status: "Ready", items: ["1x Pernil Lunch Plate", "2x Chicken Empanada"] }
    ],
    orderNumber: 1024,
    activeStaffId: "S03",
    serviceMode: "Counter",
    discountRate: 0
  };
}

function saveState() {
  localStorage.setItem("mercadoProDemo", JSON.stringify(state));
}

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return [...document.querySelectorAll(selector)];
}

function money(value) {
  return currency.format(value || 0);
}

function calcCart() {
  const subtotal = state.cart.reduce((sum, line) => sum + line.price * line.qty, 0);
  const tax = state.cart.reduce((sum, line) => sum + line.price * line.qty * line.tax, 0);
  const discount = subtotal * state.discountRate;
  return { subtotal, tax, discount, total: Math.max(0, subtotal + tax - discount) };
}

function render() {
  renderHeader();
  renderCategories();
  renderCatalog();
  renderCart();
  renderDynamicViews();
  saveState();
}

function renderHeader() {
  $("#business-date").textContent = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(new Date());
  $("#ticket-number").textContent = `Order ${state.orderNumber}`;
  $("#service-mode").textContent = state.serviceMode;
  $("#sync-status").textContent = `${state.sales.length} sales stored locally`;
  $all("[data-service]").forEach(button => {
    button.classList.toggle("active", button.dataset.service === state.serviceMode);
  });

  const staffSelect = $("#staff-select");
  staffSelect.innerHTML = state.staff.map(member => `<option value="${member.id}">${member.name} - ${member.role}</option>`).join("");
  staffSelect.value = state.activeStaffId;
  const activeStaff = state.staff.find(member => member.id === state.activeStaffId);
  $("#clock-button").textContent = activeStaff.status === "Clocked in" ? "Clock Out" : "Clock In";
}

function renderCategories() {
  const categories = ["All", ...new Set(state.products.map(product => product.category))];
  $("#category-tabs").innerHTML = categories.map(category => `<button class="${category === selectedCategory ? "active" : ""}" data-category="${category}">${category}</button>`).join("");
}

function renderCatalog() {
  const query = $("#global-search").value.trim().toLowerCase();
  const products = state.products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesQuery = !query || `${product.name} ${product.sku} ${product.category}`.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  $("#catalog-grid").innerHTML = products.map(product => {
    const stockClass = product.stock <= 0 ? "out" : product.stock <= product.par ? "low" : "";
    const stockText = product.stock <= 0 ? "Out" : product.stock <= product.par ? "Low" : `${product.stock} in stock`;
    return `
      <button class="product-card" data-product="${product.id}" ${product.stock <= 0 ? "disabled" : ""}>
        <img src="${product.image}" alt="${product.name}">
        <span class="product-body">
          <span class="product-name">${product.name}</span>
          <span class="product-meta">${product.category} / SKU ${product.sku}</span>
          <span class="product-bottom">
            <span class="price">${money(product.price)}</span>
            <span class="stock-dot ${stockClass}">${stockText}</span>
          </span>
        </span>
      </button>
    `;
  }).join("");
}

function renderCart() {
  const totals = calcCart();
  $("#cart-lines").innerHTML = state.cart.length ? state.cart.map(line => `
    <div class="cart-line">
      <div>
        <strong>${line.name}</strong>
        <div class="line-meta">${money(line.price)} each / ${line.category}</div>
      </div>
      <div class="qty-tools">
        <button data-qty="${line.id}" data-delta="-1">-</button>
        <strong>${line.qty}</strong>
        <button data-qty="${line.id}" data-delta="1">+</button>
        <button data-remove="${line.id}" aria-label="Remove ${line.name}">x</button>
      </div>
    </div>
  `).join("") : `<div class="empty-state"><span>Scan a UPC or tap a product to start the order.</span></div>`;

  $("#subtotal").textContent = money(totals.subtotal);
  $("#tax").textContent = money(totals.tax);
  $("#discounts").textContent = `-${money(totals.discount)}`;
  $("#grand-total").textContent = money(totals.total);
}

function renderDynamicViews() {
  renderDashboard();
  renderInventory();
  renderKitchen();
  renderStaff();
  renderReports();
  renderSettings();
}

function renderDashboard() {
  const totals = getBusinessTotals();
  $("#view-dashboard").innerHTML = `
    <div class="dashboard-grid">
      ${metric("Today's Sales", money(totals.revenue), `${state.sales.length} completed checks`)}
      ${metric("Gross Margin", `${Math.round(totals.margin)}%`, `${money(totals.profit)} projected profit`)}
      ${metric("Average Ticket", money(totals.avgTicket), "Blended bodega + kitchen")}
      ${metric("Low Stock", totals.lowStock, "Items below par")}
      <section class="data-panel wide">
        <div class="section-title"><h2>Sales by hour</h2><span class="subtle">Live owner view</span></div>
        <div class="chart-bars">${state.sales.map(sale => `<div class="bar" style="height:${Math.max(36, sale.total)}px"><span>${sale.hour}</span></div>`).join("")}</div>
      </section>
      <section class="data-panel wide">
        <div class="section-title"><h2>Owner alerts</h2><span class="subtle">Actionable work</span></div>
        ${ownerAlerts().map(alert => `<p><strong>${alert.title}</strong><br><span class="subtle">${alert.body}</span></p>`).join("")}
      </section>
    </div>
  `;
}

function renderInventory() {
  const rows = state.products.map(product => {
    const status = product.stock <= 0 ? ["Out", "danger"] : product.stock <= product.par ? ["Reorder", "warn"] : ["Healthy", ""];
    return `<tr>
      <td data-label="Item"><strong>${product.name}</strong><br><span class="subtle">${product.sku}</span></td>
      <td data-label="Dept">${product.category}</td>
      <td data-label="Stock">${number.format(product.stock)}</td>
      <td data-label="Par">${product.par}</td>
      <td data-label="Vendor">${product.vendor}</td>
      <td data-label="Status"><span class="status ${status[1]}">${status[0]}</span></td>
    </tr>`;
  }).join("");

  const reorder = state.products.filter(product => product.stock <= product.par).map(product => `
    <div class="reorder-item">
      <strong>${product.name}</strong>
      <span class="subtle">${product.vendor} / Need ${Math.max(product.par * 2 - product.stock, 0)} units</span>
      <div class="progress-track"><span style="width:${Math.min(100, product.stock / product.par * 100)}%"></span></div>
    </div>
  `).join("");

  $("#view-inventory").innerHTML = `
    <div class="inventory-layout">
      <section class="data-panel">
        <div class="section-title"><h2>Inventory command center</h2><button class="ghost-button" data-action="purchase-order">Create PO</button></div>
        <table><thead><tr><th>Item</th><th>Dept</th><th>Stock</th><th>Par</th><th>Vendor</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>
      </section>
      <section class="data-panel">
        <div class="section-title"><h2>Auto reorder list</h2><span class="subtle">${state.products.filter(product => product.stock <= product.par).length} needs attention</span></div>
        <div class="reorder-list">${reorder || `<p class="subtle">All inventory is above par.</p>`}</div>
      </section>
    </div>
  `;
}

function renderKitchen() {
  $("#view-kitchen").innerHTML = `
    <div class="section-title"><div><p class="eyebrow">Kitchen display system</p><h2>Live prep queue</h2></div><button class="ghost-button" data-action="bump-ready">Bump ready tickets</button></div>
    <div class="kitchen-grid">${state.kitchen.map(ticket => `
      <article class="kitchen-card">
        <div class="card-head"><strong>Order ${ticket.id}</strong><span class="status ${ticket.status === "Ready" ? "" : "warn"}">${ticket.status}</span></div>
        <span class="subtle">${ticket.service} / ${ticket.minutes} minutes open</span>
        <div class="kitchen-items">${ticket.items.map(item => `<span>${item}</span>`).join("")}</div>
      </article>
    `).join("") || `<section class="data-panel"><p class="subtle">Kitchen is clear.</p></section>`}</div>
  `;
}

function renderStaff() {
  $("#view-staff").innerHTML = `
    <div class="staff-grid">${state.staff.map(member => `
      <article class="staff-card">
        <div class="card-head">
          <div class="staff-avatar">${member.name.split(" ").map(part => part[0]).join("")}</div>
          <div><strong>${member.name}</strong><br><span class="subtle">${member.role} / PIN ${member.pin}</span></div>
        </div>
        <span class="status ${member.status === "Clocked in" ? "" : "warn"}">${member.status}</span>
        <span class="subtle">Wage ${money(member.wage)}/hr / Sales ${money(member.sales)}</span>
      </article>
    `).join("")}</div>
  `;
}

function renderReports() {
  const totals = getBusinessTotals();
  const categoryTotals = state.sales.reduce((map, sale) => {
    map[sale.category] = (map[sale.category] || 0) + sale.total;
    return map;
  }, {});

  $("#view-reports").innerHTML = `
    <div class="reports-grid">
      <section class="data-panel full">
        <div class="section-title"><h2>Executive report packet</h2><button class="ghost-button" data-action="export">Export CSV</button></div>
        <div class="report-kpis">
          <div><span class="subtle">Net sales</span><strong>${money(totals.revenue)}</strong></div>
          <div><span class="subtle">Profit</span><strong>${money(totals.profit)}</strong></div>
          <div><span class="subtle">Labor estimate</span><strong>${money(getLaborCost())}</strong></div>
          <div><span class="subtle">Cash/card mix</span><strong>${paymentMix()}</strong></div>
        </div>
      </section>
      <section class="data-panel wide">
        <h2>Department performance</h2>
        <table><thead><tr><th>Department</th><th>Sales</th><th>Share</th></tr></thead><tbody>${Object.entries(categoryTotals).map(([cat, total]) => `<tr><td data-label="Department">${cat}</td><td data-label="Sales">${money(total)}</td><td data-label="Share">${Math.round(total / totals.revenue * 100)}%</td></tr>`).join("")}</tbody></table>
      </section>
      <section class="data-panel wide">
        <h2>Recent receipts</h2>
        <table><thead><tr><th>Order</th><th>Staff</th><th>Payment</th><th>Total</th></tr></thead><tbody>${state.sales.slice(-8).reverse().map(sale => `<tr><td data-label="Order">#${sale.id}</td><td data-label="Staff">${sale.staff}</td><td data-label="Payment">${sale.payment}</td><td data-label="Total">${money(sale.total)}</td></tr>`).join("")}</tbody></table>
      </section>
    </div>
  `;
}

function renderSettings() {
  $("#view-settings").innerHTML = `
    <div class="settings-grid">
      ${systemCard("Backend", "Node.js API ready", "Use Express for auth, products, sales, shifts, and reports.")}
      ${systemCard("Database", "MySQL transaction store", "Normalized tables for products, inventory ledger, orders, order lines, payments, staff, and audits.")}
      ${systemCard("Cloud", "Oracle Cloud deploy path", "Run MySQL HeatWave or Oracle Autonomous Database with object storage receipt archives.")}
      ${systemCard("Automation", "Purchasing + alerts", "Trigger reorder drafts, margin alerts, staff overtime flags, and nightly close reports.")}
      ${systemCard("Security", "Role-based profiles", "Owner, manager, cashier, cook, and auditor permissions are modeled in the UI.")}
      ${systemCard("Hardware", "Scanner + printer path", "Browser keyboard wedge scanners, cash drawer pulse, label printer, and kitchen display.")}
    </div>
  `;
}

function metric(label, value, note) {
  return `<section class="metric-card"><span class="subtle">${label}</span><strong>${value}</strong><small>${note}</small></section>`;
}

function systemCard(title, headline, body) {
  return `<article class="system-card"><p class="eyebrow">${title}</p><strong>${headline}</strong><span class="subtle">${body}</span></article>`;
}

function getBusinessTotals() {
  const revenue = state.sales.reduce((sum, sale) => sum + sale.total, 0);
  const cogs = state.products.reduce((sum, product) => sum + product.cost * Math.min(4, Math.max(0, product.par - product.stock)), 0);
  const profit = Math.max(0, revenue * 0.58 - cogs);
  return {
    revenue,
    profit,
    margin: revenue ? profit / revenue * 100 : 0,
    avgTicket: state.sales.length ? revenue / state.sales.length : 0,
    lowStock: state.products.filter(product => product.stock <= product.par).length
  };
}

function getLaborCost() {
  return state.staff.reduce((sum, member) => sum + (member.status === "Clocked in" ? member.wage * 6.5 : member.wage * 2), 0);
}

function paymentMix() {
  const cash = state.sales.filter(sale => sale.payment === "cash").length;
  const card = state.sales.filter(sale => sale.payment === "card").length;
  return `${cash} cash / ${card} card`;
}

function ownerAlerts() {
  const low = state.products.filter(product => product.stock <= product.par).slice(0, 3);
  return [
    { title: "Reorder risk", body: low.length ? low.map(product => product.name).join(", ") : "No urgent inventory issues." },
    { title: "Labor watch", body: `${state.staff.filter(member => member.status === "Clocked in").length} people clocked in. Estimated labor cost is ${money(getLaborCost())}.` },
    { title: "Kitchen speed", body: `${state.kitchen.length} active tickets with prep times visible for expo.` }
  ];
}

function addProduct(productId) {
  const product = state.products.find(item => item.id === productId);
  if (!product || product.stock <= 0) return;
  const line = state.cart.find(item => item.id === productId);
  if (line) line.qty += 1;
  else state.cart.push({ id: product.id, name: product.name, category: product.category, price: product.price, tax: product.tax, cook: product.cook, qty: 1 });
  toast(`${product.name} added`);
  render();
}

function changeQty(productId, delta) {
  const line = state.cart.find(item => item.id === productId);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) state.cart = state.cart.filter(item => item.id !== productId);
  render();
}

function removeLine(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  render();
}

function openPayment(type) {
  if (!state.cart.length) {
    toast("Add items before taking payment.");
    return;
  }
  currentPaymentType = type;
  const totals = calcCart();
  $("#payment-title").textContent = `${type.toUpperCase()} payment`;
  $("#amount-due").textContent = money(totals.total);
  $("#tendered-input").value = type === "cash" ? totals.total.toFixed(2) : totals.total.toFixed(2);
  $("#cash-grid").innerHTML = [5, 10, 20, 50, 100, totals.total].map(amount => `<button type="button" data-cash="${amount}">${money(amount)}</button>`).join("");
  $("#payment-modal").showModal();
}

function finalizeSale(event) {
  event.preventDefault();
  const totals = calcCart();
  const tendered = Number($("#tendered-input").value || 0);
  if (tendered < totals.total) {
    toast("Tendered amount is below the total.");
    return;
  }

  const activeStaff = state.staff.find(member => member.id === state.activeStaffId);
  state.sales.push({
    id: state.orderNumber,
    hour: new Intl.DateTimeFormat("en-US", { hour: "numeric" }).format(new Date()),
    total: totals.total,
    payment: currentPaymentType,
    staff: activeStaff.name,
    category: state.cart[0]?.category || "Mixed"
  });

  state.cart.forEach(line => {
    const product = state.products.find(item => item.id === line.id);
    if (product && product.stock < 900) product.stock = Math.max(0, product.stock - line.qty);
  });

  const kitchenItems = state.cart.filter(line => line.cook).map(line => `${line.qty}x ${line.name}`);
  if (kitchenItems.length) {
    state.kitchen.push({ id: state.orderNumber, service: state.serviceMode, minutes: 0, status: "New", items: kitchenItems });
  }

  activeStaff.sales += totals.total;
  const change = currentPaymentType === "cash" ? tendered - totals.total : 0;
  state.cart = [];
  state.discountRate = 0;
  state.orderNumber += 1;
  $("#payment-modal").close();
  toast(`Sale complete. ${change > 0 ? `Change due ${money(change)}.` : "Receipt saved."}`);
  render();
}

function holdOrder() {
  if (!state.cart.length) return toast("No active order to hold.");
  state.heldOrders.push({ id: state.orderNumber, cart: structuredClone(state.cart), service: state.serviceMode });
  state.cart = [];
  state.orderNumber += 1;
  toast("Order held for later pickup.");
  render();
}

function quickAction(action) {
  if (action === "scan") {
    const product = state.products.find(item => item.sku === "071990095");
    addProduct(product.id);
  }
  if (action === "weigh") {
    const product = state.products.find(item => item.id === "G206");
    addProduct(product.id);
  }
  if (action === "combo") {
    addProduct("D101");
    addProduct("G201");
  }
  if (action === "delivery") {
    state.serviceMode = "Delivery";
    toast("Delivery mode enabled.");
    render();
  }
  if (action === "discount") {
    state.discountRate = state.discountRate ? 0 : 0.1;
    toast(state.discountRate ? "10% manager discount applied." : "Manager discount removed.");
    render();
  }
  if (action === "purchase-order") toast("Purchase order draft generated for low stock vendors.");
  if (action === "bump-ready") {
    state.kitchen = state.kitchen.filter(ticket => ticket.status !== "Ready");
    toast("Ready tickets bumped from the kitchen queue.");
    render();
  }
  if (action === "export") exportCsv();
}

function exportCsv() {
  const rows = [["order", "hour", "staff", "payment", "total"], ...state.sales.map(sale => [sale.id, sale.hour, sale.staff, sale.payment, sale.total.toFixed(2)])];
  const csv = rows.map(row => row.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "mercado-pro-sales.csv";
  link.click();
  URL.revokeObjectURL(url);
  toast("Sales CSV exported.");
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  $("#toast-stack").appendChild(node);
  setTimeout(() => node.remove(), 3200);
}

function bindEvents() {
  document.addEventListener("click", event => {
    const productCard = event.target.closest("[data-product]");
    const category = event.target.closest("[data-category]");
    const qty = event.target.closest("[data-qty]");
    const remove = event.target.closest("[data-remove]");
    const pay = event.target.closest("[data-pay]");
    const service = event.target.closest("[data-service]");
    const action = event.target.closest("[data-action]");
    const cash = event.target.closest("[data-cash]");

    if (productCard) addProduct(productCard.dataset.product);
    if (category) {
      selectedCategory = category.dataset.category;
      render();
    }
    if (qty) changeQty(qty.dataset.qty, Number(qty.dataset.delta));
    if (remove) removeLine(remove.dataset.remove);
    if (pay) openPayment(pay.dataset.pay);
    if (service) {
      state.serviceMode = service.dataset.service;
      $all("[data-service]").forEach(button => button.classList.toggle("active", button === service));
      render();
    }
    if (action) quickAction(action.dataset.action);
    if (cash) $("#tendered-input").value = Number(cash.dataset.cash).toFixed(2);
  });

  $all(".nav-item").forEach(button => {
    button.addEventListener("click", () => {
      $all(".nav-item").forEach(item => item.classList.remove("active"));
      $all(".view").forEach(view => view.classList.remove("active"));
      button.classList.add("active");
      $(`#view-${button.dataset.view}`).classList.add("active");
      $("#view-title").textContent = button.textContent.trim() === "POS" ? "Point of Sale" : button.textContent.trim();
      renderDynamicViews();
    });
  });

  $("#global-search").addEventListener("input", renderCatalog);
  $("#staff-select").addEventListener("change", event => {
    state.activeStaffId = event.target.value;
    render();
  });
  $("#clock-button").addEventListener("click", () => {
    const activeStaff = state.staff.find(member => member.id === state.activeStaffId);
    activeStaff.status = activeStaff.status === "Clocked in" ? "Clocked out" : "Clocked in";
    toast(`${activeStaff.name} is ${activeStaff.status.toLowerCase()}.`);
    render();
  });
  $("#hold-order").addEventListener("click", holdOrder);
  $("#clear-order").addEventListener("click", () => {
    state.cart = [];
    state.discountRate = 0;
    render();
  });
  $("#complete-sale").addEventListener("click", () => openPayment("cash"));
  $("#payment-modal form").addEventListener("submit", finalizeSale);
  $("#confirm-payment").addEventListener("click", finalizeSale);
}

bindEvents();
render();
