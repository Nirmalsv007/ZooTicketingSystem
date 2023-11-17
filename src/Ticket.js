import Pricing from './Pricing.js'

class Ticket {
  constructor() {
    this.guests = [];
    this.totalCharges = 0;
  }

  addGuest(age) {
    this.guests.push({ age });
    this.calculateCost(age);
  }

  calculateCost(age) {
    this.totalCharges += Pricing.calculateEntrancePrice(age);
  }

  displayTicketDetails() {
    this.guests.forEach((guest, index) => {
      console.log(`Guest ${index + 1} (age: ${guest.age})`);
    });
    console.log(`Total Charges: INR ${this.totalCharges}`);
  }
}

export default Ticket
