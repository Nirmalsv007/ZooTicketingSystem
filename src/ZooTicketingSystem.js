import { question } from 'readline-sync';
import Ticket from './Ticket.js';
import Security from './Security.js';

class ZooTicketingSystem {
  constructor() {
    this.zooTicket = new Ticket();
  }

  start() {
    console.log('Welcome to the Zoo');
    this.addGuestsPrompt();
    this.displayTicketDetails();
  }

  addGuestsPrompt() {
    while (true) {
      const ageInput = question('Enter guest age (or "done" to finish): ');

      if (this.isDone(ageInput)) {
        break;
      }

      const age = parseInt(ageInput, 10);
      this.processGuestAge(age);
    }
  }

  processGuestAge(age) {
    if (!isNaN(age)) {
      this.zooTicket.addGuest(age);
    } else {
      console.log('Invalid input. Please enter a valid age.');
    }
  }

  isDone(input) {
    return input.toLowerCase() === 'done';
  }

  displayTicketDetails() {
    console.log('Ticket Details:');
    this.zooTicket.displayTicketDetails();
    Security.verifyTicket(this.zooTicket);
  }
}

export default ZooTicketingSystem
