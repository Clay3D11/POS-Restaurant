# Limiltess Pro POS

A polished bodega + restaurant point-of-sale demo designed to show an owner what a custom POS can become: fast checkout, restaurant tickets, grocery inventory, staff profiles, reporting, purchasing alerts, and a clear path to a real backend.

This version is intentionally GitHub Pages friendly. It runs from `index.html` with plain HTML, CSS, and JavaScript, while storing demo activity in `localStorage`.

## Demo Features

- Modern responsive POS register for counter, dine-in, delivery, and EBT-style service modes.
- Searchable catalog with grocery, produce, drinks, hot food, breakfast, grill, household, and services.
- Cash/card/split payment flow with change calculation.
- Held orders, manager discount toggle, simulated UPC scan, scale item, lunch combo, and delivery mode automation.
- Inventory command center with par levels, vendor names, reorder status, and purchase order trigger.
- Kitchen display queue for cooked items.
- Staff profiles, active cashier selector, clock in/out status, PIN placeholders, wages, and sales attribution.
- Owner dashboard with sales, margin, average ticket, labor estimate, low-stock alerts, hourly bars, and operational alerts.
- Reports view with sales export to CSV.
- Local persistence so the owner can click around and see data change.

## How To Run

Open `index.html` in a browser, or publish this folder with GitHub Pages.

No build step is required.

The original Google Apps Script template files are preserved in `legacy-google-apps-script/` for reference. The active demo uses `index.html`, `styles.css`, `app.js`, and `database-schema.sql`.

## Suggested Owner Demo Flow

1. Start on POS and add a mix of restaurant and bodega items.
2. Use `Lunch Combo`, `Manager Discount`, and `Delivery` to show workflow shortcuts.
3. Complete a cash sale and show change calculation.
4. Open Kitchen to show prepared items flowing to the prep queue.
5. Open Inventory to show stock decreasing and reorder alerts.
6. Open Dashboard and Reports to show the owner the business intelligence layer.
7. Export CSV to prove the reporting data is usable outside the app.

## Production Architecture Roadmap

Frontend:
- HTML, CSS, JavaScript today.
- Later upgrade path: React or Vue only if the app grows past what vanilla JS can maintain comfortably.

Backend:
- Node.js with Express for auth, staff, products, orders, payments, shifts, inventory movements, and reports.
- JWT or secure session cookies for owner/manager/cashier/cook roles.
- Audit log middleware for price overrides, voids, refunds, and cash drawer events.

Database:
- MySQL for the main transactional store.
- Tables: users, roles, staff_profiles, products, categories, vendors, inventory_ledger, orders, order_lines, payments, shifts, cash_drawers, purchase_orders, kitchen_tickets, audit_events.
- Oracle Cloud path: MySQL HeatWave or Oracle Autonomous Database, Object Storage for receipt archives, and scheduled functions for daily close reports.

Hardware integrations:
- Barcode scanner as keyboard wedge input.
- Receipt printer through browser print first, then WebUSB/WebSerial or a local print agent.
- Cash drawer pulse through receipt printer.
- Kitchen display on a second browser screen.
- Scale integration through WebSerial or a small local Node bridge.

## Notes

This is a sales-ready prototype, not a payment-certified production POS. Real deployment still needs secure authentication, database persistence, payment processor integration, fiscal/tax validation, backups, monitoring, and hardware testing.
