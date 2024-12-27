document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const session = document.getElementById("session").value;

  if (name && email && session) {
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, session }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        alert(data.message);
        document.getElementById("signup-form").reset();
      })
      .catch(error => {
        console.error("Error:", error);
        alert("There was an error processing your registration.");
      });
  } else {
    alert("Please fill out all fields.");
  }
});
