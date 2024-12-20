
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    bio.classList.toggle('hidden');
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  window.addEventListener('scroll', function () {
    const missionVisionSection = document.getElementById('missionVisionSection');
    const rect = missionVisionSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      missionVisionSection.classList.add('opacity-100');
    }
  });
  