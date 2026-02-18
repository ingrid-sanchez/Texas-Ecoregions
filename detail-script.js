// Show the correct detail page on load
document.addEventListener('DOMContentLoaded', function() {
  const targetEcoregion = sessionStorage.getItem('targetEcoregion');
  
  if (targetEcoregion) {
    // Hide all detail pages
    const pages = document.querySelectorAll('.detail-page');
    pages.forEach(page => {
      page.classList.remove('active');
      page.style.display = 'none';
    });
    
    // Show the target page
    const targetPage = document.getElementById(targetEcoregion);
    if (targetPage) {
      targetPage.classList.add('active');
      targetPage.style.display = 'block';
    }
    
    // Clear the sessionStorage
    sessionStorage.removeItem('targetEcoregion');
  }
});

// Handle back button clicks
function goBack() {
  window.location.href = 'english-landing.html';
}

// Plant list auto scroll (Need to copy into spanish version)
const plantlist = document.getElementById('plantlist');
const plantlistScrollWidth = plantlist.scrollWidth;

window.addEventListener('load', () => {
  self.setInterval(() => {
    if (plantlist.scrollLeft !== plantlistScrollWidth) {
      plantlist.scrollTo(plantlist.scrollLeft + 1, 0);
    }
  }, 15);
});