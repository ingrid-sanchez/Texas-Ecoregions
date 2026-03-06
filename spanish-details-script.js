// Show the correct detail page on load
document.addEventListener('DOMContentLoaded', function() {
    // Populate all grids with species data
  populatePlantGrids();
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
  window.location.href = 'spanish-landing.html';
}

// HORIZONTAL SCROLLMENU -------------------------------------------------------------------------------------------------------
const plantlists = document.querySelectorAll('.scrollmenu.plantlist');

plantlists.forEach((plantlist) => {
  if (!plantlist) return;

  const clone = plantlist.innerHTML;
  plantlist.innerHTML += clone;

  let isAutoScrolling = true;
  const scrollSpeed = 0.5;
  let pauseTimeout = null;

  function loopScroll() {
    if (isAutoScrolling) {
      plantlist.scrollLeft += scrollSpeed;

      const contentWidth = plantlist.scrollWidth / 2;
      if (plantlist.scrollLeft >= contentWidth) {
        plantlist.scrollLeft -= contentWidth;
      } else if (plantlist.scrollLeft < 0) {
        plantlist.scrollLeft += contentWidth;
      }
    }
    requestAnimationFrame(loopScroll);
  }

  function pauseAutoScroll() {
    isAutoScrolling = false;
    if (pauseTimeout) clearTimeout(pauseTimeout);
    pauseTimeout = setTimeout(() => {
      isAutoScrolling = true;
    }, 2000);
  }

  // Pause on hover
  plantlist.addEventListener('mouseenter', () => { isAutoScrolling = false; });
  plantlist.addEventListener('mouseleave', () => { isAutoScrolling = true; });

  // MOUSE WHEEL (scroll menu, not entire page)
  plantlist.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent page from scrolling
    pauseAutoScroll();

    plantlist.scrollLeft += event.deltaY;

    const contentWidth = plantlist.scrollWidth / 2;
    if (plantlist.scrollLeft >= contentWidth) {
      plantlist.scrollLeft -= contentWidth;
    } else if (plantlist.scrollLeft < 0) {
      plantlist.scrollLeft += contentWidth;
    }
  }, { passive: false });

  // TOUCH SCREEN
  let touchStartX = 0;

  plantlist.addEventListener('touchstart', (e) => {
    pauseAutoScroll();
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
    }
  }, { passive: true });

  plantlist.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
      e.preventDefault();

      const deltaX = touchStartX - e.touches[0].clientX;
      plantlist.scrollLeft += deltaX;
      touchStartX = e.touches[0].clientX;

      const contentWidth = plantlist.scrollWidth / 2;
      if (plantlist.scrollLeft >= contentWidth) {
        plantlist.scrollLeft -= contentWidth;
      } else if (plantlist.scrollLeft < 0) {
        plantlist.scrollLeft += contentWidth;
      }
    }
  }, { passive: false });

  // Start auto-scroll for this plantlist
  requestAnimationFrame(loopScroll);
});


// Generate a consistent color from a species name for the placeholder
function getSpeciesColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 45%, 40%)`;
}

// Create a plant card element (Spanish version)
function createPlantCard(species) {
  const card = document.createElement('div');
  card.className = 'plant-card';
  const spanishName = spanishCommonNames[species.scientific] || species.common;
  card.setAttribute('data-scientific', species.scientific.toLowerCase());
  card.setAttribute('data-common', spanishName.toLowerCase());

  const color = getSpeciesColor(species.scientific);
  const hasImage = species.image && species.image.length > 0;
  const initials = species.scientific.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  card.innerHTML = `
    <div class="plant-image-placeholder" style="background: linear-gradient(135deg, ${color}, ${color}dd);">
      ${hasImage ? `<img src='${species.image}' alt='${species.scientific}' class='plant-image'>` : `<span class='plant-initials'>${initials}</span>`}
      <span class="invasive-badge">INVASORA</span>
    </div>
    <p class="plant-name">${species.scientific}</p>
    <p class="plant-common">${spanishName}</p>
    <p class="credit">Imagen de ${species.text}</p>
    <p class="plant-source">Fuente de datos: USFS Datos Nacionales de Especies Invasoras</p>
  `;

  return card;
}

// Populate all plant grids with species data
function populatePlantGrids() {
  const grids = document.querySelectorAll('.plant-grid[data-ecoregion]');
  grids.forEach(grid => {
    const ecoregionId = grid.getAttribute('data-ecoregion');
    const species = getSpeciesForEcoregion(ecoregionId);

    species.forEach(sp => {
      grid.appendChild(createPlantCard(sp));
    });

    // Add count display
    const page = grid.closest('.detail-page');
    if (page) {
      const subtitle = page.querySelector('.ecoregion-subtitle');
      if (subtitle) {
        subtitle.textContent = `${species.length} Especies Invasoras Documentadas`;
      }
    }
  });
}

// Filter plants by search input
function filterPlants(input) {
  const query = input.value.toLowerCase().trim();
  const grid = input.closest('.detail-page').querySelector('.plant-grid');
  const cards = grid.querySelectorAll('.plant-card');

  cards.forEach(card => {
    const scientific = card.getAttribute('data-scientific');
    const common = card.getAttribute('data-common');
    const matches = scientific.includes(query) || common.includes(query);
    card.style.display = matches ? '' : 'none';
  });
}
