import { slides } from './data/slides.js';

const deck = document.getElementById('deck');
let current = 0;

function render() {
  const isMobile = window.innerWidth < 900;
  deck.innerHTML = '';
  if (isMobile) {
    deck.className = 'deck mobile';
    slides.forEach((slide, i) => deck.appendChild(slideEl(slide, i)));
    document.getElementById('nav').style.display = 'none';
  } else {
    deck.className = 'deck desktop';
    deck.appendChild(slideEl(slides[current], current));
    document.getElementById('nav').style.display = 'flex';
  }
  document.getElementById('counter').textContent = `${current + 1} / ${slides.length}`;
}

function slideEl(s, i) {
  const el = document.createElement('section');
  el.className = `slide ${s.hero || s.dark ? 'dark' : ''}`;
  el.innerHTML = `<div class="slide-inner"><div class="kicker">Слайд ${String(i+1).padStart(2,'0')}</div><h1>${s.t}</h1>
  ${s.s ? `<p class='sub'>${s.s}</p>` : ''}
  <ul>${(s.b||[]).map(x=>`<li>${x}</li>`).join('')}</ul>
  ${s.sources ? `<div class='sources'><b>Источники:</b>${s.sources.map(x=>`<div>${x}</div>`).join('')}</div>`:''}
  </div>`;
  return el;
}

function go(d){ current=Math.max(0,Math.min(slides.length-1,current+d)); render(); }
document.getElementById('prev').onclick=()=>go(-1);
document.getElementById('next').onclick=()=>go(1);
window.addEventListener('keydown', (e)=>{
  if (window.innerWidth < 900) return;
  if(['ArrowRight',' ','PageDown'].includes(e.key)) go(1);
  if(['ArrowLeft','PageUp'].includes(e.key)) go(-1);
  if(e.key==='Home') {current=0; render();}
  if(e.key==='End') {current=slides.length-1; render();}
  if(e.key.toLowerCase()==='f') document.documentElement.requestFullscreen?.();
});
window.addEventListener('resize', render);
render();
