!function(){
  //日历

  let view = document.querySelector('.calendarContainer')
  
  let controller = {
    view: null,
    init: function(view){
      this.view = view
      this.month_leap = [31,29,31,30,31,30,31,31,30,31,30,31]
      this.month_normal = [31,28,31,30,31,30,31,31,30,31,30,31]
      this.month = ["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"]
      this.monthAbbr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
      this.weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Firday","Saturday"]
    
      this.today_date = view.querySelector('.todayDate')
      this.today_month = view.querySelector('.todayMonth')
      this.today_week = view.querySelector('.todayWeek')
    
      this.title_month = view.querySelector('.monthAndYear .titleMonth')
      this.title_year = view.querySelector('.monthAndYear .titleYear')
      this.days = view.querySelector('.calendar .daysList')
    
      this.dateNow = new Date()
      this.dateYear = this.dateNow.getFullYear()
      this.dateMonth = this.dateNow.getMonth()
      this.dateWeek = this.dateNow.getDay()
      this.dateDay = this.dateNow.getDate()

      this.createDate()
      this.bindEvents()
    },
    bindEvents: function(){
      let _this = this
      prev.onclick = function(e){
        e.preventDefault()
        _this.dateMonth--
        if(_this.dateMonth < 0){
          _this.dateYear --
          _this.dateMonth = 11
        }
        _this.createDays()
      }
      next.onclick = function(e){
        e.preventDefault()
        _this.dateMonth++
        if(_this.dateMonth > 11){
          _this.dateYear ++
          _this.dateMonth = 0
        }
        _this.createDays()
      }
    },
    dateStart: function(year, month){
      let tmpDate = new Date(year, month, 1)
      return tmpDate.getDay()
    },
    isLeapYear: function(year, month){
      let _this = this
      if(year % 4 === 0){
        return _this.month_leap[month]
      }else{
        return _this.month_normal[month]
      }
    },
    createDate: function(){
      let _this = this
      _this.createDays()
      _this.today_date.innerText = _this.dateDay
      _this.today_month.innerText = _this.monthAbbr[_this.dateMonth]
      _this.today_week.innerText = _this.weeks[_this.dateWeek]
    },
    createDays: function(){
      let _this = this
      let tmpStr = ''
      let tmpTotal = _this.isLeapYear(_this.dateYear, _this.dateMonth)
      let tmpStart = _this.dateStart(_this.dateYear, _this.dateMonth)
      let className = ''
      for(let i = 1; i < tmpStart+1; i++){
        tmpStr += '<li><span></span></li>'
      }
      for(let i = 1; i < tmpTotal+1; i++){
        if(i === _this.dateDay && _this.dateYear === _this.dateNow.getFullYear() && _this.dateMonth === _this.dateNow.getMonth()){
          className = "class='active'"
        }
        tmpStr += '<li><span ' + className + '>' + i + '</span></li>'
        className = ''
      }
      _this.days.innerHTML = tmpStr
      _this.title_month.innerText = _this.month[_this.dateMonth]
      _this.title_year.innerText = _this.dateYear
    }
  }

  controller.init.call(controller, view)
}.call()