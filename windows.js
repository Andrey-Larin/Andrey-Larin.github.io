window.onload = function() {
    var returnAnt = JSON.parse(localStorage.getItem("Ant"));
    
    if (returnAnt == 1) {
        document.location.href = "/pobeda.html";
        
    }
 };