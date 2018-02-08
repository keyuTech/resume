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
console.log(aTags)
for(let i = 0; i < aTags.length; i++){
  aTags[i].onclick = function(e){
    console.log(e.currentTarget)
  }
}