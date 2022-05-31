
function getdata(){
       //console.log("wwww");
    // var btn = document.getElementById("btn");
    var yname = document.getElementById("yname").value;
    var ylink = "https://api.github.com/users/"+ yname +"/repos" ;
    // var ylink = `https://api.github.com/users/${yname}/repos` ;
   // console.log(ylink);
    //1
    var ajax = new XMLHttpRequest();
    //2
    ajax.open("GET",ylink);
    //3
    ajax.send();
    //4
    ajax.onreadystatechange = function(){
       // console.log(ajax.response);
        if(ajax.readyState == 4){
            var data = JSON.parse(ajax.response);
            // write anything you want api
             //console.log(data);
            var count = data.length; // big eroooorrrrrrr as my big heaaadddd becarful to sbling y bnnnnnnnnttttt baaaaaa2aaaaa
            var strn ="";
            console.log(count);
            for(var i =0 ; i<count ; i++){
                strn += "<li> " + data[i].name + "</li>" ;
                    // strn += "<li>mohamed</li>";
            }
            //console.log(strn);
            document.getElementById("resl").innerHTML = strn;
        }
     }

}

// var loder = document.querySelector(".spinner");
var loder = document.getElementById("spinner");
window.addEventListener("load" , function(){
    loder.style.display = "none";
    // console.log(s);
    // s.className ="hiddin";
})