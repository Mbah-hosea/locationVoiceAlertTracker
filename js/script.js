// Hamburger menu toggle
const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('navMenu');

if(menuIcon){
  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// TTS function for alerts
function triggerAlert(message){
  const utterance = new SpeechSynthesisUtterance(message);
  const language = localStorage.getItem('language') || 'en';
  utterance.lang = language === 'fr' ? 'fr-FR' : language === 'pidgin' ? 'en-NG' : 'en-US';
  window.speechSynthesis.speak(utterance);
}

// Distance calculation (Haversine formula)
function getDistance(lat1, lon1, lat2, lon2){
  const R = 6371e3;
  const φ1 = lat1 * Math.PI/180;
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1)*Math.PI/180;
  const Δλ = (lon2-lon1)*Math.PI/180;
  const a = Math.sin(Δφ/2)*2 + Math.cos(φ1)*Math.cos(φ2)*Math.sin(Δλ/2)*2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R*c;
}

// Load alert settings
let alertSettings = JSON.parse(localStorage.getItem('alertSettings')) || null;
