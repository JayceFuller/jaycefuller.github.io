document.addEventListener("DOMContentLoaded", () => {
  fetch("./shared/_Navbar.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("_Navbar file not found");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
      initializeModeToggle();
    })
    .catch(error => console.error("Error loading navbar:", error));
});


function initializeModeToggle() {
    const toggleButton = document.getElementById('mode-toggle');
    const htmlElement = document.documentElement;
    const savedMode = localStorage.getItem('mode');
    const initialMode = savedMode || 'dark';
    htmlElement.setAttribute('data-theme', initialMode);

    toggleButton.addEventListener('click', () => {
        const currentMode = htmlElement.getAttribute('data-theme');
        const newMode = currentMode === 'dark' ? 'dark' : 'light';

        htmlElement.setAttribute('data-theme', newMode);
        localStorage.setItem('mode', newMode)
    });
}