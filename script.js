setTimeout(() => {
  siteWelcome.classList.remove('active') 
}, 1000)
portfolioAll.onclick = function(){
  portfolioBar.className = 'footBar state-1'
}
portfolioFrame.onclick = function(){
  portfolioBar.className = 'footBar state-2'
}
portfolioJs.onclick = function(){
  portfolioBar.className = 'footBar state-3'
}
window.onscroll = function(){
  if(window.scrollY > 20){
    topNavBar.classList.add('sticky')
  }else{
    topNavBar.classList.remove('sticky')
  }
}
let aTags = document.querySelectorAll('nav > .menu > li > a')
for(let i = 0; i < aTags.length; i++){
  aTags[i].onclick = function(e){
    e.preventDefault()  
    let href = e.currentTarget.getAttribute('href')
    let targetElement = document.querySelector(href)
    let top = targetElement.offsetTop
    window.scrollTo(0, top - 80)
  }
}