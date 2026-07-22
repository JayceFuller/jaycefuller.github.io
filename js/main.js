document.addEventListener("DOMContentLoaded", () => {
  fetch("../shared/_Navbar.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("_Navbar file not found");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
});