console.log('Loaded!');
var img =document.getElementById('madi');
var margineleft=0;
var marginright=0;
function moveRight(){
    margineleft+=10;
    img.style.marginLeft=margineleft+'px';
    if(margineleft>100){
      var interval = setInterval(moveLeft,100)
    
        }
}
function moveLeft(){
    marginright+=10;
    img.style.marginRight=marginright+'px';
    if(marginright>100){
        var interval=setInterval(moveRight,100);
        
    }
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
};