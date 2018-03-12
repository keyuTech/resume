//加载动画
setTimeout(() => {
  siteWelcome.classList.remove('active') 
}, 3000)
setTimeout(() => {
  siteWelcome.classList.remove('active')
  setSection()
}, 3100)

let specialTags = document.querySelectorAll('[data-choosed]')
for(let i = 0; i < specialTags.length; i++){
  specialTags[i].classList.add('offset')
}

window.onscroll = function(){
  if(window.scrollY > 0){
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

let aTags = document.querySelectorAll('.topNavBar > nav > .menu > li > a')

//引入Tweenjs
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
    let targetTop = top - 280

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

let liTags = document.querySelectorAll('.topNavBar > nav > ul > li')
for(let i = 0; i < liTags.length; i++){
  liTags[i].onmouseenter = function(e){
    e.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function(e){
    e.currentTarget.classList.remove('active')
  }
}


//日历
let month_leap = [31,29,31,30,31,30,31,31,30,31,30,31]
let month_normal = [31,28,31,30,31,30,31,31,30,31,30,31]
let month = ["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"]
let monthAbbr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Firday","Saturday"]

let today_date = document.querySelector('.todayDate')
let today_month = document.querySelector('.todayMonth')
let today_week = document.querySelector('.todayWeek')

let title_month = document.querySelector('.monthAndYear .titleMonth')
let title_year = document.querySelector('.monthAndYear .titleYear')
let days = document.querySelector('.calendar .daysList')

let dateNow = new Date()
let dateYear = dateNow.getFullYear()
let dateMonth = dateNow.getMonth()
let dateWeek = dateNow.getDay()
let dateDay = dateNow.getDate()

function dateStart(year, month){
  let tmpDate = new Date(year, month, 1)
  return tmpDate.getDay()
}
function isLeapYear(year, month){
  if(year % 4 === 0){
    return month_leap[month]
  }else{
    return month_normal[month]
  }
}

function createDate(){
  createDays()
  today_date.innerText = dateDay
  today_month.innerText = monthAbbr[dateMonth]
  today_week.innerText = weeks[dateWeek]
}
function createDays(){
  let tmpStr = ''
  let tmpTotal = isLeapYear(dateYear, dateMonth)
  let tmpStart = dateStart(dateYear, dateMonth)
  let className = ''
  for(let i = 1; i < tmpStart+1; i++){
    tmpStr += '<li><span></span></li>'
  }
  for(let i = 1; i < tmpTotal+1; i++){
    if(i === dateDay && dateYear === dateNow.getFullYear() && dateMonth === dateNow.getMonth()){
      className = "class='active'"
    }
    tmpStr += '<li><span ' + className + '>' + i + '</span></li>'
    className = ''
  }
  days.innerHTML = tmpStr
  title_month.innerText = month[dateMonth]
  title_year.innerText = dateYear
}

createDate()

prev.onclick = function(e){
  console.log(1)
  e.preventDefault()
  dateMonth--
  if(dateMonth < 0){
    dateYear --
    dateMonth = 11
  }
  createDays()
}
next.onclick = function(e){
  e.preventDefault()
  dateMonth++
  if(dateMonth > 11){
    dateYear ++
    dateMonth = 0
  }
  createDays()
}