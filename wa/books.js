var e = document.getElementById("c");
    var b=1;
    setInterval(function(){
        if(b>1){
            e.style.marginLeft=0;
        }else{
        b+=1;
    }
    },50);
window.onscroll = function (){
    console.log(this.scrollY);
    if(scrollY >= 593){
        document.getElementById("js").innerHTML='<ul id="js"><li><h3 id="r" onclick="ff()">Books</h3></li></ul>'
    }else if(scrollY <= 593){
        document.getElementById("js").innerHTML='<ul id="js"><li><h3 id="g" onclick="ff()">Books</h3></li></ul>'
    }
}



function ff() {
    window.scrollTo({
        top:593,
        behavior:"smooth",
    });
}

/*window.console.log('ff:' + screen.availWidth);
if(screen.availWidth <= 400){
    alert('ghghg');
}*/