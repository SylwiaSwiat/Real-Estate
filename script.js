const moreAbout = document.querySelector('.more-about');
const moreAboutBtn = document.querySelector('#more-about-btn')

moreAboutBtn.addEventListener('click', function(){
    moreAbout.classList.toggle('more-about')
    if(moreAbout.className==='more-about') moreAboutBtn.innerHTML='Read More'
else {moreAboutBtn.innerHTML='Read Less'}})