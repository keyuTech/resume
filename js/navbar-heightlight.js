!function () {
  let view = document.querySelector('.topNavBar')
  
  let controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      let _view = this.view
      //滚动时添加高亮
      window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
          view.classList.add('sticky')
        } else {
          view.classList.remove('sticky')
        }
      }
      )
      //鼠标悬浮添加高亮
      let liTags = view.querySelectorAll('nav > ul > li')
      for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (e) {
          e.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function (e) {
          e.currentTarget.classList.remove('active')
        }
      }
    }
  }

  controller.init.call(controller, view)
}.call()