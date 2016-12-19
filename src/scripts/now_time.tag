<now_time>
  <span>{hours}:{minutes}:{seconds}</span>
  <script>
    var self = this
    this.tick = function () {
      date = new Date(); 
      self.update({ hours: date.getHours(), minutes: date.getMinutes(), seconds: date.getSeconds() })
    }
    var timer = setInterval(this.tick, 1000)
  </script>
</now_time>
