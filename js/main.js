document.getElementById("countNo").innerHTML = "This website has been visited : " + localStorage.getItem("contit") + " times";
function countClicks() {
    if (localStorage.getItem("contit")) {
      localStorage.setItem("contit",Number(localStorage.getItem("contit"))+1);
    } else {
      localStorage.setItem("contit",1);      
    }
    document.getElementById("countNo").innerHTML = "This website has been visited : " + localStorage.getItem("contit") + " times";
}