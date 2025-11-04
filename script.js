// --- Gestione localStorage ---
const savedValue = document.getElementById('savedValue');
const nameInput = document.getElementById('nameInput');
const saveBtn = document.getElementById('saveBtn');
const removeBtn = document.getElementById('removeBtn');

function updateSavedNameDisplay() {
  const name = localStorage.getItem('username');
  if (name) {
    savedValue.textContent = `Nome salvato: ${name}`;
  } else {
    savedValue.textContent = '';
  }
}

saveBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem('username', name);
    updateSavedNameDisplay();
    nameInput.value = '';
  }
});

removeBtn.addEventListener('click', () => {
  localStorage.removeItem('username');
  updateSavedNameDisplay();
});

updateSavedNameDisplay();

// --- Gestione contatore con sessionStorage ---
const timerElement = document.getElementById('timer');
let seconds = Number(sessionStorage.getItem('seconds')) || 0;

function updateTimer() {
  seconds++;
  timerElement.textContent = seconds;
  sessionStorage.setItem('seconds', seconds);
}

setInterval(updateTimer, 1000);
