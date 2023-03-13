function copyText(text) {
      
    var a = document.getElementById('text');
    a.classList.remove('default');
    navigator.clipboard.writeText(a.classList);
    var x = document.getElementById("snackbar");
    a.classList.add('default');
    
    x.className = "show";
  
    
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


function changeAnim(add, selected){
    var x = document.getElementById("text");
    var y = document.getElementById(selected);
    
    if(x.classList.contains(add) && x.classList.length>1){
        x.classList.remove(add);
        y.classList.remove('selected');
    }else{
        x.classList.add(add);
        y.classList.add('selected');
    }

    if(add == 'h-spinr' && x.classList.contains('h-spinl')){
        
        y.classList.remove('selected');
        x.classList.add('h-spinl')
        x.classList.remove('h-spinr')
    }

    if(add == 'h-spinl' && x.classList.contains('h-spinr')){
        
        y.classList.remove('selected');
        x.classList.add('h-spinr')
        x.classList.remove('h-spinl')
    }
    if(y.classList.contains('ea')){


        var z = document.querySelectorAll(".ea")

        for (var i = 0; i < z.length; i++) {
            z[i].classList.remove('selected')
            
        }

        x.classList.remove('ea-sizeup', 'ea-fade', 'ea-spininr', 'ea-spininl')
        x.classList.add(add)
        y.classList.add('selected');


    }

    

    

   

}






function HoverDropdown(){
    var x = document.getElementById('hover-anim-dropdown');
    var scale = document.getElementById('scale');
    var opacity = document.getElementById('opacity');
    var spinr = document.getElementById('spinr');
    var spinl = document.getElementById('spinl');

    if(x.textContent == '+ hover animations'){
        x.textContent="- hover animations"
        scale.textContent= "";
        opacity.textContent= "";
        spinr.textContent= "";
        spinl.textContent= "";
        
    } else{
        x.textContent="+ hover animations"
        scale.textContent = "scale";
        opacity.textContent= "opacity";
        spinr.textContent= "spin right";
        spinl.textContent= "spin left";
    }

    


   
}
function EaDropdown(){
    var x = document.getElementById('ea-anim-dropdown');
    var fade = document.getElementById('fade');
    var sizeup = document.getElementById('sizeup');
    var spininr = document.getElementById('spininr');
    var spininl = document.getElementById('spininl');
   

    if(x.textContent == '+ enter animations'){
        x.textContent="- enter animations"
        fade.textContent= "";
        sizeup.textContent= "";
        spininr.textContent= "";
        spininl.textContent= "";
        
    } else{
        x.textContent="+ enter animations"
        fade.textContent = "fade";
        sizeup.textContent= "sizeup";
        spininr.textContent = "spin in right";
        spininl.textContent = "spin in left";
    }

    


   
}





