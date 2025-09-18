const smartliving = document.getElementById('smart-btn');
const smartlist = document.getElementById('smartlist');

smartliving.addEventListener('click', (e) => {
  e.stopPropagation(); // don't let this click bubble up
  smartlist.style.display =
    smartlist.style.display === 'flex' ? 'none' : 'flex';
});



const corebtn = document.getElementById('core-btn');
const core = document.getElementById('energyconnectedlist');

corebtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    core.style.display = 
    core.style.display === 'flex' ? 'none' : 'flex';
});

const sigbtn = document.getElementById('signature-btn');
const sig = document.getElementById('signaturecollection');

sigbtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    sig.style.display = 
    sig.style.display === 'flex' ? 'none' : 'flex';
});

// close if clicked

document.addEventListener('click', (e) => {
  if (!smartlist.contains(e.target) && e.target !== smartliving) {
    smartlist.style.display = 'none';
  }
  
  if (!core.contains(e.target) && e.target !== corebtn) {
    core.style.display = 'none';
  }

  if (!sig.contains(e.target) && e.target !== sigbtn) {
    sig.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const popups = [
    { buttonId: "smart-included-btn", overlayId: "overlay-smart", popupId: "smart-secondary" },
    { buttonId: "secureent-btn", overlayId: "overlay-smart", popupId: "secureentsecondary" },
    { buttonId: "simplelive-btn", overlayId: "overlay-smart", popupId: "simplelive" },
    { buttonId: "encont-btn", overlayId: "overlay-core", popupId: "enerconn" },
    { buttonId: "safesound-btn", overlayId: "overlay-core", popupId: "safesoundsec" },
    { buttonId: "smrtrout-btn", overlayId: "overlay-core", popupId: "smrtrout" },
    // Add more as needed for signature...
  ];

  popups.forEach(({ buttonId, overlayId, popupId }) => {
    const btn = document.getElementById(buttonId);
    const overlay = document.getElementById(overlayId);
    const popup = document.getElementById(popupId);

    if (btn && overlay && popup) {
      btn.addEventListener("click", () => {
        overlay.style.display = "block";
        popup.style.display = "block";
      });

      // Close when clicking the overlay
      overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        popup.style.display = "none";
      });
    }
  });
});