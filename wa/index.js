var e = document.getElementById("c");
var b=1;
window.console.log('ff:' + screen.availWidth);
setInterval(function(){
    if(b>1){
        e.style.marginLeft='0';
    }else{
    b+=1;
}
},50);
window.onscroll = function (){
    console.log(this.scrollY);
    
    if(screen.availWidth <= 652){
        if(scrollY >= 845){
            document.getElementById("js").innerHTML='<ul id="js"><li><h3 id="g" onclick="f1()">Abaut Me</h3></li><li><h3 id="r" onclick="f2()">My Books</h3></li></ul>'
        }else if(scrollY >= 300){
            document.getElementById("js").innerHTML='<ul id="js"><li><h3 id="r" onclick="f1()">Abaut Me</h3></li><li><h3 id="g" onclick="f2()">My Books</h3></li></ul>'
        }else if(scrollY <= 242){
            document.getElementById("js").innerHTML='<ul id="js"><li><h3 id="g" onclick="f1()">Abaut Me</h3></li><li><h3 id="g" onclick="f2()">My Books</h3></li></ul>'
        }
    }else{
        if(scrollY >= 1003){
            document.getElementById("js").innerHTML='<ul id="js"><li><h3 id="g" onclick="f1()">Abaut Me</h3></li><li><h3 id="r" onclick="f2()">My Books</h3></li></ul>'
        }else if(scrollY >= 502){
            document.getElementById("js").innerHTML='<ul id="js"><li><h3 id="r" onclick="f1()">Abaut Me</h3></li><li><h3 id="g" onclick="f2()">My Books</h3></li></ul>'
        }else if(scrollY <= 111){
            document.getElementById("js").innerHTML='<ul id="js"><li><h3 id="g" onclick="f1()">Abaut Me</h3></li><li><h3 id="g" onclick="f2()">My Books</h3></li></ul>'
        }
    }
}

function f1() {
    if(screen.availWidth <= 652){
        window.scrollTo({
            top:482,
            behavior:"smooth",
        });
    }else{
        window.scrollTo({
        top:552,
        behavior:"smooth",
    });
    }
    
}function f2() {
    if(screen.availWidth <= 652){
        window.scrollTo({
            top:1053,
            behavior:"smooth",
        });
    }else{
        window.scrollTo({
            top:1265,
            behavior:"smooth",
        });
    }
    
    
}
        
