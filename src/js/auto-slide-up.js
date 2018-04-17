!function(){
  //添加offset类使得section下移
  let specialTags = document.querySelectorAll('[data-choosed]')
  for(let i = 0; i < specialTags.length; i++){
    specialTags[i].classList.add('offset')
  }
  setSectionUp()

  window.addEventListener('scroll', function(){
    setSectionUp()
  })

  function setSectionUp(){
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
}.call()
