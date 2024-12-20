// Handle form submission
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const session = document.getElementById("session").value;
  
    if (name && email && session) {
      alert(`Thank you, ${name}! You have successfully registered for the ${session}.`);
      document.getElementById("signup-form").reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
  