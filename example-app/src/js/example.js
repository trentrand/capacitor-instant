import { Instant } from '@trentrand/capacitor-instant';

async function checkInstantStatus() {
  try {
    const { value: isInstant } = await Instant.isInstantApp();
    const statusElement = document.getElementById('status');

    if (isInstant) {
      statusElement.textContent = 'Running as Instant App';
      statusElement.classList.add('instant');
    } else {
      statusElement.textContent = 'Running as Full App';
      statusElement.classList.add('full');
    }
  } catch (error) {
    console.error('Failed to check instant app status:', error);
    const statusElement = document.getElementById('status');
    statusElement.textContent = 'Error checking instant app status';
    statusElement.style.background = '#f44336';
  }
}

// Check status when the page loads
document.addEventListener('DOMContentLoaded', checkInstantStatus);
