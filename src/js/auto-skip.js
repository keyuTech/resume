!function(){
  let view = document.querySelector('.menu')
  let controller = {
    view: null,
    init: function(view){
      this.view = view
      this.aTags = view.querySelectorAll('li > a')
      this.bindEvents(this.aTags)
    },
    bindEvents: function(aTags){
      let _this = this
      for(let i = 0; i < aTags.length; i++){
        aTags[i].onclick = function(e){
          e.preventDefault()
          let href = e.currentTarget.getAttribute('href')
          let targetElement = document.querySelector(href)
          _this.top = targetElement.offsetTop
          _this.addAnimate()
        }
      }
    },
    addAnimate: function(){
      let currentTop = window.scrollY
      let targetTop = this.top - 280

      //引入Tweenjs
      function animate(time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      requestAnimationFrame(animate)
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
  controller.init.call(controller, view)
}.call()