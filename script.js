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

function animate(time) {
  requestAnimationFrame(animate)
  TWEEN.update(time)
}
requestAnimationFrame(animate)

for(let i = 0; i < aTags.length; i++){
  aTags[i].onclick = function(e){
    e.preventDefault()  
    let href = e.currentTarget.getAttribute('href')
    let targetElement = document.querySelector(href)
    let top = targetElement.offsetTop

    let currentTop = window.scrollY
    let targetTop = top - 80

    // Setup the animation loop.

    var coords = { y: currentTop }
    var tween = new TWEEN.Tween(coords)
      .to({ y: targetTop }, 1000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function() {
        window.scrollTo(0, coords.y)
      })
      .start()
  }
}