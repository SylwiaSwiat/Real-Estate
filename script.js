const moreAbout = document.querySelector('.more-about');
const moreAboutBtn = document.querySelector('.more-about-btn')
const allProperty1 = document.querySelector('.hide1')
const allProperty2 = document.querySelector('.hide2')
const allProperty3 = document.querySelector('.hide3')
const viewAllBtn = document.querySelector('.view')
const agent1 = document.querySelector('.agent1')
const agent2 = document.querySelector('.agent2')
const agent3 = document.querySelector('.agent3')
const agent1btn = document.querySelector('#agent1btn')
const agent2btn = document.querySelector('#agent2btn')
const agent3btn = document.querySelector('#agent3btn')
const loginMenu = document.querySelector('header .active')
const loginShow = document.querySelector('.flipper')
const closeBtn = document.querySelector('#closeBtn')
const loginBtn = document.querySelector('#loginBtn')
const registerBtn = document.querySelector('#registerBtn')
const log = document.querySelector('#log')
const reg = document.querySelector('#register')


moreAboutBtn.addEventListener('click', moreInfo)

function moreInfo(){
    moreAbout.classList.toggle('more-about')
    if(moreAbout.className==='more-about') moreAboutBtn.innerHTML='Read More'
else {moreAboutBtn.innerHTML='Read Less'}}

viewAllBtn.addEventListener('click', function(){
    allProperty1.classList.remove('hide1')
    allProperty2.classList.remove('hide2')
    allProperty3.classList.remove('hide3')
    allProperty1.classList.add('box')
    allProperty2.classList.add('box')
    allProperty3.classList.add('box')
})

agent1btn.addEventListener('click', function(){
    agent1.classList.toggle('agent1')
    agent1.className==='agent1' ? agent1btn.innerHTML='Read More' : agent1btn.innerHTML='Read Less'
})
agent2btn.addEventListener('click', function(){
    agent2.classList.toggle('agent2')
    agent2.className==='agent2' ? agent2btn.innerHTML='Read More' : agent2btn.innerHTML='Read Less'
})
agent3btn.addEventListener('click', function(){
    agent3.classList.toggle('agent3')
    agent3.className==='agent3' ? agent3btn.innerHTML='Read More' : agent3btn.innerHTML='Read Less'
})

loginMenu.addEventListener('click', () => loginShow.style.clipPath=`circle(100% at 50% 50%)`)
closeBtn.addEventListener('click', ()=> loginShow.style.clipPath=`circle(0 at 50% 50%)`)
const regLog = ()=>{
    reg.classList.toggle('show')
    log.classList.toggle('show')
}
registerBtn.addEventListener('click', regLog)
loginBtn.addEventListener('click', regLog)