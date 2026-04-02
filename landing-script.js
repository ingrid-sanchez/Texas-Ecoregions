// Navigate to ecoregion detail page
function navigateToEcoregion(pageId) {
  const detailPageUrl = 'english-details.html';
  const hash = '#' + pageId;
  
  // Store the target page in sessionStorage so we can navigate to it
  sessionStorage.setItem('targetEcoregion', pageId);
  window.location.href = detailPageUrl;
}


// debugging
const xDisplay = document.getElementById('x');
const yDisplay = document.getElementById('y');

// Add an event listener to the document
document.addEventListener('mousemove', (event) => {
    // clientX/Y get coordinates relative to the browser window
    xDisplay.textContent = event.clientX;
    yDisplay.textContent = event.clientY;
});
