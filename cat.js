
var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";

    function details(){
      document.getElementById("calendar").innerHTML=calendar
      document.getElementById("monthName").innerHTML=monthName
      document.getElementById("dayName").innerHTML=dayName
      document.getElementById("dayNumber").innerHTML=calendar
      document.getElementById("year").innerHTML=year
      document.getElementById("Time").innerHTML=Time
      
    }
   
}

// it will output the property brings undefined and of the object myObject then the two function anonynomous because 
