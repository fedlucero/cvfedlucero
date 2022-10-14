//menu desplegable
function myFunction() {
   
      var x = document.getElementById("myLinks");
      if (x.style.display === "flex") {
         x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    }
    
    function esconder() {
      var x = document.getElementById("myLinks");
      var img =document.getElementById("imgPelado");
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    }