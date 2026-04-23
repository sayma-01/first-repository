// Get elements
const desktop = document.getElementById('desktop');
const contextMenu = document.getElementById('contextMenu');
const startBtn = document.getElementById('startBtn');
const startMenu = document.getElementById('startMenu');
const timeElement = document.getElementById('time');

// Update time every second
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
}
setInterval(updateTime, 10000);
updateTime();

function displayDate() {
  const today = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric',weekday:'long' };
  document.getElementById('date').textContent = today.toLocaleDateString(undefined, options);
}   

displayDate();


function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeather(lat, lon); // Call your weather function with real coordinates
      },
      (error) => {
        console.error("Geolocation error:", error);
        // Handle errors (e.g., user denied permission)
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}   

getCurrentLocation();

// Fetch weather data for a specific location
async function getWeather(latitude, longitude) {
  try {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m`;
    
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Network response failed');
    
    const data = await response.json();
    displayWeather(data.current);
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

// Display weather on your page
function displayWeather(current) {
  document.getElementById('temperature').textContent = `${current.temperature_2m}°C`;
  document.getElementById('windSpeed').textContent = `Wind: ${current.wind_speed_10m} km/h`;
//   document.getElementById('condition').textContent = getWeatherDescription(current.weather_code);
}

// Call the function with coordinates (example: Berlin)
getWeather(52.52, 13.405);

// Update weather every 10 minutes
setInterval(() => {
  getWeather(52.52, 13.405);
}, 600000); // 600000ms = 10 minutes

// Context Menu
desktop.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    contextMenu.classList.add('active');
    contextMenu.style.left = e.pageX + 'px';
    contextMenu.style.top = e.pageY + 'px';
});

// Close context menu
document.addEventListener('click', (e) => {
    if (e.target !== contextMenu && !contextMenu.contains(e.target)) {
        contextMenu.classList.remove('active');
    }
});

// Context Menu Actions
document.querySelectorAll('.context-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        handleContextAction(action);
        contextMenu.classList.remove('active');
    });
});

function handleContextAction(action) {
    switch(action) {
        case 'refresh':
            alert('Desktop refreshed!');
            break;
        case 'new-folder':
            createNewFolder();
            break;
        case 'new-file':
            alert('New file created!');
            break;
        case 'paste':
            alert('Paste operation performed!');
            break;
        case 'display':
            alert('Opening Display Settings...');
            break;
        case 'properties':
            alert('Showing Desktop Properties');
            break;
    }
}

// Create New Folder
function createNewFolder() {
    const folderName = prompt('Enter folder name:', 'New Folder');
    if (folderName) {
        const newIcon = document.createElement('div');
        newIcon.className = 'desktop-icon';
        newIcon.draggable = true;
        newIcon.innerHTML = `
            <div class="icon-image">📁</div>
            <div class="icon-label">${folderName}</div>
        `;
        desktop.appendChild(newIcon);
        addIconEventListeners(newIcon);
    }
}

// Start Menu Toggle
startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    startMenu.classList.toggle('active');
});

// Close start menu when clicking outside
document.addEventListener('click', (e) => {
    if (e.target !== startBtn && !startMenu.contains(e.target)) {
        startMenu.classList.remove('active');
    }
});

// Desktop Icon Selection
function addIconEventListeners(icon) {
    icon.addEventListener('click', () => {
        document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
        icon.classList.add('selected');
    });

    icon.addEventListener('dblclick', () => {
        const label = icon.querySelector('.icon-label').textContent;
        alert(`Opening: ${label}`);
    });

    // Drag functionality
    icon.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.target.closest('.desktop-icon').style.opacity = '0.5';
    });

    icon.addEventListener('dragend', (e) => {
        e.target.closest('.desktop-icon').style.opacity = '1';
    });

    icon.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    icon.addEventListener('drop', (e) => {
        e.preventDefault();
    });
}

// Add event listeners to initial icons
document.querySelectorAll('.desktop-icon').forEach(icon => {
    addIconEventListeners(icon);
});

// Taskbar app clicks
document.querySelectorAll('.taskbar-app').forEach(app => {
    app.addEventListener('click', () => {
        const title = app.getAttribute('title');
        alert(`Opening ${title}...`);
    });
});

// Start menu app tiles
document.querySelectorAll('.app-tile').forEach(tile => {
    tile.addEventListener('click', () => {
        alert(`Opening ${tile.textContent}`);
        startMenu.classList.remove('active');
        console.log('.app-tile');
    });
});

// Start menu footer items
document.querySelectorAll('.start-menu-footer .menu-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Opening ${item.textContent}`);
        startMenu.classList.remove('active');
    });
});

// Close menus on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        contextMenu.classList.remove('active');
        startMenu.classList.remove('active');
    }
});