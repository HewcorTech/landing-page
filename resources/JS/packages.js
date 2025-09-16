const smartliving = document.getElementById('smart-btn');
const smartlist = document.getElementById('smartlist');

smartliving.addEventListener('click', (e) => {
  e.stopPropagation(); // don't let this click bubble up
  smartlist.style.display =
    smartlist.style.display === 'flex' ? 'none' : 'flex';
});

const smartIncluded = document.getElementById('smart-included-btn');
const smartSecondary = document.getElementById('smart-secondary');
smartIncluded.addEventListener('click', (e) => {
    e.stopPropagation(); 
    smartSecondary.style.display = 
    smartSecondary.style.display === 'flex' ? 'none' : 'flex';
});

const secureent = document.getElementById('secureent-btn');
const secureentsecond = document.getElementById('secureentsecondary');
secureent.addEventListener('click', (e) => {
    e.stopPropagation(); 
    secureentsecond.style.display = 
    secureentsecond.style.display === 'flex' ? 'none' : 'flex';
});

const corebtn = document.getElementById('core-btn');
const core = document.getElementById('energyconnectedlist');
corebtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    core.style.display = 
    core.style.display === 'flex' ? 'none' : 'flex';
});

const enconbtn = document.getElementById('encont-btn');
const enercon = document.getElementById('enerconn');
enconbtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    enercon.style.display = 
    enercon.style.display === 'flex' ? 'none' : 'flex';
});


const safesoundbtn = document.getElementById('safesound-btn');
const safesound = document.getElementById('safesoundsec');
safesoundbtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    safesound.style.display = 
    safesound.style.display === 'flex' ? 'none' : 'flex';
});


const smartrbtn = document.getElementById('smrtrout-btn');
const smartrout = document.getElementById('smrtrout');
smartrbtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    smartrout.style.display = 
    smartrout.style.display === 'flex' ? 'none' : 'flex';
});

// close if clicked

document.addEventListener('click', (e) => {
  if (!smartlist.contains(e.target) && e.target !== smartliving) {
    smartlist.style.display = 'none';
  }
  if (!smartSecondary.contains(e.target) && e.target !== smartIncluded) {
    smartSecondary.style.display = 'none';
  }
  if (!secureentsecond.contains(e.target) && e.target !== secureent) {
    secureentsecond.style.display = 'none';
  }

  if (!simplelivsecond.contains(e.target) && e.target !== simplelivbtn) {
    simplelivsecond.style.display = 'none';
  }

  if (!core.contains(e.target) && e.target !== corebtn) {
    core.style.display = 'none';
  }

  if (!enercon.contains(e.target) && e.target !== enconbtn) {
    enercon.style.display = 'none';
  }

  if (!safesound.contains(e.target) && e.target !== safesoundvbtn) {
    safesound.style.display = 'none';
  }
  
  if (!smartrout.contains(e.target) && e.target !== smartrbtn) {
    smartrout.style.display = 'none';
  }
});