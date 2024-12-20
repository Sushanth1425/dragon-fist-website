
function selectPlan(planName) {
    document.getElementById("plan").value = planName;
    document.getElementById("signup-form").scrollIntoView({ behavior: 'smooth' });
  }
  
  document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const plan = document.getElementById("plan").value;
  
    if (name && email && plan) {
      alert(`Thank you, ${name}! Your sign-up for the ${plan} has been submitted.`);
      document.getElementById("signup-form").reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
  