const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.onclick = () => overlay.style.display = 'flex';
closeBtn.onclick = () => overlay.style.display = 'none';

overlay.addEventListener('click', (e)=>{
  if(e.target === overlay){
    overlay.style.display = 'none';
  }
});

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    overlay.style.display = 'none';
  }
});
