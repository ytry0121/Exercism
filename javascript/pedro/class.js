class Can {
  constructor(quantity) {
    this.quantity = quantity;
  }

  pour(glass) {
    this.quantity = glass.fill(this.quantity);
  }

  quantityLeft() {
    return this.quantity;
  }
}

class Glass {
  constructor(capacity) {
    this.capacity = capacity;
    this.quantity = 0;
  }

  fill(quantity) {
    const capacityLeft = this.capacity - this.quantity;
    const quantityPoured = Math.max(quantity - capacityLeft, 0);
    this.quantity += quantityPoured;
    return quantityPoured;
  }

  drink() {
    this.quantity = 0;
  }
}

const sapporoCan = new Can(500);
const kirinCan = new Can(330);

console.log(sapporoCan.quantityLeft()); // 500
console.log(kirinCan.quantityLeft()); // 330

const pedroGlass = new Glass(250);

sapporoCan.pour(pedroGlass);

console.log(sapporoCan.quantityLeft()); // 250
console.log(kirinCan.quantityLeft()); // 330

// perdroGlass.drink();

kirinCan.pour(pedroGlass);

console.log(sapporoCan.quantityLeft()); // 250
console.log(kirinCan.quantityLeft()); // 330
