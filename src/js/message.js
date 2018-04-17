
!function () {
  var model = {
    // 获取数据
    init: function () {
      var APP_ID = 'prrlz3kynz093FMf8IPn7Kfu-gzGzoHsz'
      var APP_KEY = 'Rv4bPvFa3wEeri0Inx4D46V2'

      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    fetch: function () {
      var query = new AV.Query('MessageObject');
      return query.find() // Promise 对象
    },
    // 创建数据
    save: function (name, content) {
      var Message = AV.Object.extend('MessageObject');
      var message = new Message();
      console.log(name, content)
      return message.save({  // Promise 对象
        "name": name,
        "content": content
      })
    }
  }

  var view = document.querySelector('.messageContainer')


  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function (view, model) {
      this.view = view
      this.model = model

      this.messageList = view.querySelector('.messageList')
      this.form = view.querySelector('form')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function () {
      this.model.fetch().then(
        (messages) => {
          let array = messages.map((item) => item.attributes)
          array.forEach((item) => {
            let messageList = this.view.querySelector('.messageList')
            let userName = item.name
            let content = item.content
            let li = document.createElement('li')
            li.innerHTML = `
            <div class="square"></div>
            <span class="userName">${userName}</span>
            <span class="char">:</span>
            <span class="messageWords">${content}</span>
            `
            messageList.appendChild(li)
          })
        }
      )
    },
    bindEvents: function () {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function () {
      let myForm = this.form
      let content = myForm.querySelector('input[name=messageWords]').value
      let userName = myForm.querySelector('input[name=userName]').value
      if(content === '' || userName === ''){
        alert('姓名或留言内容不能为空')
      }else{
        this.model.save(userName, content).then((object) => {
          let li = document.createElement('li')
          li.innerHTML = `
            <div class="square"></div>
            <span class="userName">${userName}</span>
            <span class="char">:</span>
            <span class="messageWords">${content}</span>
          `
          let messageList = this.view.querySelector('.messageList')
          console.log(messageList)
          messageList.appendChild(li)
          myForm.querySelector('input[name=messageWords]').value = ''
        })
      }
    }
  }

  controller.init.call(controller, view, model)


}.call()