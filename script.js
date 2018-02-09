setTimeout(() => {
  siteWelcome.classList.remove('active') 
}, 3000)
portfolioAll.onclick = function(){
  portfolioBar.className = 'footBar state-1'
}
portfolioFrame.onclick = function(){
  portfolioBar.className = 'footBar state-2'
}
portfolioJs.onclick = function(){
  portfolioBar.className = 'footBar state-3'
}
setTimeout(() => {
  setSection()
}, 3100)


let specialTags = document.querySelectorAll('[data-choosed]')
for(let i = 0; i < specialTags.length; i++){
  specialTags[i].classList.add('offset')
}

window.onscroll = function(){
  if(window.scrollY > 20){
    topNavBar.classList.add('sticky')
  }else{
    topNavBar.classList.remove('sticky')
  }
  setSection()
}

function setSection(){
  let specialTags = document.querySelectorAll('[data-choosed]')
  let minIndex = 0
  let min = specialTags[minIndex].offsetTop
  for(let i = 0; i < specialTags.length; i++){
    if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(min - window.scrollY)){
      minIndex = i
    }
  }
  specialTags[minIndex].classList.remove('offset')
  for(let i = 0; i < specialTags.length; i++){
    specialTags[i].classList.remove('active')
  }
  specialTags[minIndex].classList.add('active')
  let tagID = specialTags[minIndex].id
  let a = document.querySelector('a[href="#' + tagID + '"]')
  let li = a.parentNode
  let clearClassElement = li.parentNode.children
  for(let i = 0; i < clearClassElement.length; i++){
    clearClassElement[i].classList.remove('highlight')
  }
  li.classList.add('highlight')
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

let liTags = document.querySelectorAll('nav > ul > li')
console.log(liTags)
for(let i = 0; i < liTags.length; i++){
  liTags[i].onmouseenter = function(e){
    e.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function(e){
    e.currentTarget.classList.remove('active')
  }
}