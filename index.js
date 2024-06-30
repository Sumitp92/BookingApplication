function handleFormSubmit(event) {
    event.preventDefault();
  
    const form = event.target;
  
    const username = form.querySelector('#username').value.trim();
    const email = form.querySelector('#email').value.trim();
    const phone = form.querySelector('#phone').value.trim();
  
    // Create an object with user details
    const userDetails = {
      username: username,
      email: email,
      phone: phone
    };
  
    // Store the object in local storage with the key "User Details"
    localStorage.setItem('User Details', JSON.stringify(userDetails));
  
    // Clear the form
    form.reset();
  
    alert('Appointment booked successfully!');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
  });
  
  // Export for testing purposes
  module.exports = handleFormSubmit;
  