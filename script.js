const events = {
    "2024-10": [
      { title: "Martial Arts Basics", date: "2024-10-12", location: "Club Hall", description: "Learn the basics of self-defense in this introductory workshop." },
      { title: "Stress Relief Workshop", date: "2024-10-18", location: "Online", description: "An interactive online session to practice stress management techniques." }
    ],
    "2024-11": [
      { title: "Yoga for Relaxation", date: "2024-11-08", location: "Club Garden", description: "A refreshing yoga session to help you relax and unwind." }
    ]
  };

  function loadEventsForMonth() {
    const selectedMonth = document.getElementById("calendar").value;
    const eventList = document.getElementById("events-list");
  
    eventList.innerHTML = "";
  
    if (events[selectedMonth]) {
      events[selectedMonth].forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.className = "bg-white p-6 rounded-lg shadow-lg";
        eventDiv.innerHTML = `
          <h3 class="text-xl font-bold mb-2">${event.title}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <button onclick="showEventDetails('${event.title}', '${event.date}', '${event.location}', '${event.description}')" class="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">View Details</button>
        `;
        eventList.appendChild(eventDiv);
      });
    } else {
      const noEvents = document.createElement("p");
      noEvents.className = "text-gray-700";
      noEvents.innerText = "No events scheduled for this month.";
      eventList.appendChild(noEvents);
    }
  }
  function showEventDetails(title, date, location, description) {
    const eventInfo = document.getElementById("event-info");
    eventInfo.innerHTML = `
      <h3 class="text-2xl font-bold mb-2">${title}</h3>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p class="mt-4">${description}</p>
      <button onclick="navigateToSection('upcoming-events')" class="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">Back to Calendar</button>
    `;
  }
  function navigateToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }

  