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