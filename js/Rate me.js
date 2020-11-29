function addRow() {
    "use strict";
 
     var table = document.getElementById("table");
     var row= document.createElement("tr");
     var td1 = document.createElement("td");
     var td2 = document.createElement("td");
     var td3 = document.createElement("td");
     var td4 = document.createElement("td");     
 
     td1.innerHTML = document.getElementById("name").value;
     td2.innerHTML  = document.getElementById("skill").value;
     td3.innerHTML  = document.getElementById("level").value;
     td4.innerHTML  = document.getElementById("comment").value;
     row.appendChild(td1);
     row.appendChild(td2);
     row.appendChild(td3);
     row.appendChild(td4);
 
     table.children[0].appendChild(row);
 }