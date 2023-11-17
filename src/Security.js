class Security {
    static verifyTicket(ticket) {
      console.log('Verifying Ticket: ');
      ticket.guests.forEach((guest, index) => {
        console.log(`Guest ${index + 1} (age: ${guest.age})`);
      });
    }
  }
  
  export default Security;
  