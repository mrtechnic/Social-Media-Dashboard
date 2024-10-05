const darModeToggle = document.querySelector(".toggle");

if (darModeToggle) {
  // Check if element exists
  darModeToggle.addEventListener("click", () => {
    darModeToggle.classList.toggle("active");
    document.body.classList.toggle("darkmode");

    // Optional: Store user preference in local storage
    localStorage.setItem(
      "theme",
      document.body.classList.contains("darkmode") ? "dark" : "light"
    );
  });

  // Check for user preference on page load
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    darModeToggle.classList.add("active");
    document.body.classList.add("darkmode");
  }
}
