import { calculateEntrancePrice } from './Pricing';

class Ticket {

  constructor() {
    this.guests = [];
    this.totalCharges = 0;
  }

  addGuest(age) {
    this.guests.push({ age });
    this.calculateCharges(age);
  }

  calculateCharges(age) {
    this.totalCharges += calculateEntrancePrice(age);
  }

  displayTicketDetails() {
    this.guests.forEach((guest, index) => {
      console.log(`Guest ${index + 1} (age: ${guest.age})`);
    });
    console.log(`Total Charges: INR ${this.totalCharges}`);
  }
}

export default Ticket;
