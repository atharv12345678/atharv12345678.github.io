document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
document.querySelectorAll('[data-placeholder]').forEach(link=>{
  link.addEventListener('click',e=>{
    if(link.getAttribute('href')==='#'){
      e.preventDefault();
      alert('Add your real '+link.dataset.placeholder+' URL in index.html before publishing.');
    }
  });
});
