!function(){
  let view = document.querySelector('#carousel')
  let controller = {
    view: null,
    init: function(view){
      this.view = view
      this.initSwiper()
    },
    initSwiper: function(){
      let mySwiper = new Swiper (view.querySelector('.swiper-container'), {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })  
    }
  }
  controller.init.call(controller, view)
}.call()