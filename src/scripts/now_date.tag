require('./weekday.tag');
<now_date>
  <span>今は{year}/{month}/{day}(<weekday num={week}></weekday>)</span>
  <script>
    var date=new Date(); 
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.week = date.getDay();
    this.day = date.getDate();
  </script>
</now_date>