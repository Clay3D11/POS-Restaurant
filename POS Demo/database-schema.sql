CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE staff_profiles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  role_id INT NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  pin_hash VARCHAR(255) NOT NULL,
  hourly_rate DECIMAL(8, 2) NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(80) NOT NULL UNIQUE,
  department_type ENUM('restaurant', 'grocery', 'service') NOT NULL
);

CREATE TABLE vendors (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  phone VARCHAR(40),
  email VARCHAR(120),
  payment_terms VARCHAR(80)
);

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category_id INT NOT NULL,
  vendor_id INT,
  sku VARCHAR(64) NOT NULL UNIQUE,
  name VARCHAR(160) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  cost DECIMAL(10, 2) NOT NULL DEFAULT 0,
  tax_rate DECIMAL(6, 5) NOT NULL DEFAULT 0,
  par_level DECIMAL(10, 2) NOT NULL DEFAULT 0,
  on_hand DECIMAL(10, 2) NOT NULL DEFAULT 0,
  is_kitchen_item BOOLEAN NOT NULL DEFAULT FALSE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (vendor_id) REFERENCES vendors(id)
);

CREATE TABLE shifts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  staff_id INT NOT NULL,
  clock_in TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  clock_out TIMESTAMP NULL,
  starting_cash DECIMAL(10, 2) NOT NULL DEFAULT 0,
  ending_cash DECIMAL(10, 2),
  FOREIGN KEY (staff_id) REFERENCES staff_profiles(id)
);

CREATE TABLE orders (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  order_number BIGINT NOT NULL UNIQUE,
  staff_id INT NOT NULL,
  shift_id INT,
  service_mode ENUM('counter', 'dine_in', 'delivery', 'ebt') NOT NULL DEFAULT 'counter',
  subtotal DECIMAL(10, 2) NOT NULL,
  tax DECIMAL(10, 2) NOT NULL,
  discount DECIMAL(10, 2) NOT NULL DEFAULT 0,
  total DECIMAL(10, 2) NOT NULL,
  status ENUM('open', 'held', 'paid', 'voided', 'refunded') NOT NULL DEFAULT 'open',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (staff_id) REFERENCES staff_profiles(id),
  FOREIGN KEY (shift_id) REFERENCES shifts(id)
);

CREATE TABLE order_lines (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  order_id BIGINT NOT NULL,
  product_id INT NOT NULL,
  quantity DECIMAL(10, 2) NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  unit_cost DECIMAL(10, 2) NOT NULL,
  tax DECIMAL(10, 2) NOT NULL DEFAULT 0,
  line_total DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE payments (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  order_id BIGINT NOT NULL,
  payment_type ENUM('cash', 'card', 'split', 'ebt', 'gift_card') NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  tendered DECIMAL(10, 2) NOT NULL,
  change_due DECIMAL(10, 2) NOT NULL DEFAULT 0,
  processor_reference VARCHAR(160),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE inventory_ledger (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  product_id INT NOT NULL,
  order_line_id BIGINT,
  movement_type ENUM('sale', 'receive', 'adjustment', 'waste', 'transfer') NOT NULL,
  quantity_delta DECIMAL(10, 2) NOT NULL,
  note VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (order_line_id) REFERENCES order_lines(id)
);

CREATE TABLE kitchen_tickets (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  order_id BIGINT NOT NULL,
  status ENUM('new', 'cooking', 'ready', 'served', 'cancelled') NOT NULL DEFAULT 'new',
  opened_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE purchase_orders (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  vendor_id INT NOT NULL,
  status ENUM('draft', 'sent', 'received', 'cancelled') NOT NULL DEFAULT 'draft',
  expected_total DECIMAL(10, 2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (vendor_id) REFERENCES vendors(id)
);

CREATE TABLE audit_events (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  staff_id INT,
  event_type VARCHAR(80) NOT NULL,
  entity_type VARCHAR(80) NOT NULL,
  entity_id VARCHAR(80),
  details JSON,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (staff_id) REFERENCES staff_profiles(id)
);
