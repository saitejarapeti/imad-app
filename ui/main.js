console.log('Loaded!');
var img =document.getElementById('madi');
var margineleft=0;
function moveRight(){
    margineleft+=10;
    img.style.marginLeft=margineleft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
};