var display = document.getElementById("display");
var preview = document.getElementById("preview");
var hair = document.getElementById("hair");
var eyes = document.getElementById("eyes");
var nose = document.getElementById("nose");
var mouth = document.getElementById("mouth");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var add = document.getElementById("add");
var random = document.getElementById("random");

var num = 1;




document.getElementById("color").addEventListener("change", function(){
    document.getElementById("preview").style.backgroundColor = color.value;
    
});

                                                  
                                                                                           
document.getElementById("number").addEventListener("click", function(){
    document.getElementById("input1").type = number;
    
    document.getElementById("input2").type = number;
    
    document.getElementById("input3").type = number;
    
    document.getElementById("input4").type = number;
});


document.getElementById("range").addEventListener("click", function(){
    document.getElementById("input1").type = "range";
    
    document.getElementById("input2").type = "range";
    
    document.getElementById("input3").type = "range";
    
    document.getElementById("input4").type = "range";
});



document.getElementById("input1").addEventListener("change", function(){
    
    hair.style.width = input1.value + "%";
    
});

document.getElementById("input2").addEventListener("change", function(){
    
    eyes.style.width = input2.value + "%";
    
});

document.getElementById("input3").addEventListener("change", function(){
    
    nose.style.width = input3.value + "%";
    
});

document.getElementById("input4").addEventListener("change", function(){
 
    mouth.style.width = input4.value + "%";
    
});


hair.addEventListener("click", function(){
    num ++;
    
    hair.src = "img/hair"+num+".png";
    
    if(num >= 3){
        num = 0;
    }

});

eyes.addEventListener("click", function(){
    num ++;
    
    eyes.src = "img/eyes"+num+".png";
    
    if(num >= 3){
        num = 0;
    }

});

nose.addEventListener("click", function(){
    num ++;
    
    nose.src = "img/nose"+num+".png";
    
    if(num >= 3){
        num = 0;
    }

});

mouth.addEventListener("click", function(){
    num ++;
    
    mouth.src = "img/mouth"+num+".png";
    
    if(num >= 3){
        num = 0;
    }

});

add.addEventListener("click", function(){
    createFace();
});

random.addEventListener("click", function(){
randomFace();
});

function createFace(){
    var ndiv = document.createElement("div");
    ndiv.className = "newDivs";
    display.appendChild(ndiv);
    
    ndiv.innerHTML = preview.innerHTML;
    ndiv.style.backgroundColor = preview.style.backgroundColor;
    
//    var nhair = document.createElement("img");
//    nhair.className = "newImgs";
//    nhair.src = hair.src;
//    ndiv.appendChild(nhair);
//    
//    
//    var neyes = document.createElement("img");
//    nhair.className = "newImgs";
//    ndiv.appendChild(neyes);
//    
//    
//    var nnose = document.createElement("img");
//    nhair.className = "newImgs";
//    ndiv.appendChild(nnose);
//    
//    
//    var nmouth = document.createElement("img");
//    nhair.className = "newImgs";
//    ndiv.appendChild(nmouth);
};

function randomFace(){
    var randomMath = Math.round(Math.random()*2)+1,
    r = Math.round(Math.random()*255),
    g = Math.round(Math.random()*255),
    b = Math.round(Math.random()*255);
    
    
    hair.src = "img/hair"+randomMath+".png";
    eyes.src = "img/eyes"+randomMath+".png";
    nose.src = "img/nose"+randomMath+".png";
    mouth.src = "img/mouth"+randomMath+".png";
    preview.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    

};