const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let scrollScheduled = false;
function updateHero(){
  if(!reducedMotion.matches && innerWidth>760){
    const y=Math.min(scrollY,650);
    document.documentElement.style.setProperty('--portrait-y',`${y*.045}px`);
    document.documentElement.style.setProperty('--side-y',`${y*-.12}px`);
  }
  scrollScheduled=false;
}
addEventListener('scroll',()=>{if(!scrollScheduled){scrollScheduled=true;requestAnimationFrame(updateHero)}},{passive:true});
const services=[
 {title:'Sua marca<br>em pauta.',description:'Histórias relevantes, relacionamento com a imprensa e presença nos espaços certos.',image:'bastidores',alt:'Lívia em atuação nos bastidores do Planeta Band',word:'presença'},
 {title:'Direção para<br>o próximo passo.',description:'Posicionamento, mensagens e canais conectados aos objetivos da sua marca.',image:'estudio',alt:'Lívia em estúdio, com computador e microfone',word:'estratégia'},
 {title:'Confiança<br>para falar.',description:'Preparação de porta-vozes para entrevistas, apresentações e conversas que importam.',image:'estudio',alt:'Estúdio de entrevistas com Lívia Veiga',word:'confiança'},
 {title:'Reputação<br>em primeiro lugar.',description:'Prevenção, planejamento e comunicação responsável em momentos sensíveis.',image:'livia',alt:'Retrato de Lívia Veiga',word:'reputação'}
];
document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>{
 const i=Number(button.dataset.service),s=services[i];
 document.querySelectorAll('[data-service]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 document.getElementById('service-number').textContent=`0${i+1} /`;
 document.getElementById('service-title').innerHTML=s.title;
 document.getElementById('service-description').textContent=s.description;
 const img=document.getElementById('service-image');img.src=`assets/${s.image}.webp`;img.alt=s.alt;
 document.querySelector('.service-word').textContent=s.word;
}));
if(!reducedMotion.matches && 'IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.08});
 document.querySelectorAll('.services-layout,.about-copy,.about-art,.stories-heading,.case,.purpose h2,.purpose-foot').forEach(el=>{el.classList.add('reveal-ready');observer.observe(el)});
}
