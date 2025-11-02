/* =========================
   HAMBURGER MENU TOGGLE
========================= */
const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('navMenu');

if (menuIcon && navMenu) {
  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

/* =========================
   VOICE ALERT FUNCTION
========================= */
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  const lang = localStorage.getItem("language") || "en";

  // Set language for speech
  utterance.lang = lang === "fr" ? "fr-FR" : lang === "pidgin" ? "en-NG" : "en-US";
  window.speechSynthesis.speak(utterance);
}

/* =========================
   LOCAL STORAGE HELPERS
========================= */
function saveStops(stops) {
  localStorage.setItem("stops", JSON.stringify(stops));
}

function getStops() {
  return JSON.parse(localStorage.getItem("stops") || "[]");
}

/* =========================
   DISTANCE HELPER (HAVERSINE FORMULA)
========================= */
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // radius of Earth in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) ** 2 +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // distance in meters
}

/* =========================
   PAGE-READY FUNCTION
========================= */
// Example: Update any UI elements, load defaults, etc.
document.addEventListener("DOMContentLoaded", () => {
  // Set default language in forms if needed
  const languageSelect = document.getElementById("language");
  if (languageSelect) {
    languageSelect.value = localStorage.getItem("language") || "en";
    languageSelect.addEventListener("change", () => {
      localStorage.setItem("language", languageSelect.value);
      alert("Language updated to " + languageSelect.value);
    });
  }
});
