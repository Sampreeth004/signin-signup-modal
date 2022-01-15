function togglePopup()
   {
       document.getElementById("popup-1")
        .classList.toggle("active");
    }
    function togglePopup2()
   {
       document.getElementById("popup-2")
        .classList.toggle("active");
    }
    function showPWD1() {
    var x = document.getElementById("pwd1");
    if (x.type === "password") {
    x.type = "text";
    } else {
     x.type = "password";
    }
   }
    function showPWD2() {
    var x = document.getElementById("pwd2");
    var y=document.getElementById("pwd3");
    if (x.type === "password" && y.type === "password") {
    x.type = "text";
    y.type = "text";
    } else {
     x.type = "password";
     y.type = "password";
    }
   }