var iris = document.getElementById('iris'),
    sclera = document.getElementById('sclera'),
    delay = 0.5,
    offsetRadius = ((Math.PI / 180) * 90),
    posX, posY, offsetX, offsetY, containX, containY, translateX, translateY;

window.addEventListener('mousemove', function(e){
    posX = e.clientX;
    posY = e.clientY;
});

function moveEye(){
    var windowWidth = document.body.offsetWidth,
        windowHeight = document.body.offsetHeight,
        x, y;
    translateX = posX - windowWidth / 2;
    translateY = posY - windowHeight / 2;
    offsetX = (translateX > windowWidth / 4 || translateX < -windowWidth / 4) ? 1 : 2;
    offsetY = (translateY > windowHeight / 3 || translateY < -windowHeight / 3) ? 1 : 2;
    containX = (translateX > windowWidth / 30 || translateX < -windowWidth / 30) ? 80 : 10;
    containY = (translateY > windowHeight / 25 || translateY < -windowHeight / 25) ? 80 : 10;

    x = offsetRadius - Math.atan2(translateX, translateY);
    x = Math.cos(x) / offsetX;
    x *= containX;

    y = offsetRadius - Math.atan2(translateX, translateY);
    y = Math.sin(y) / offsetY;
    y *= containY;

    iris.prefixedStyle('transform', 'translateX('+x+'%) translateY('+y+'%) rotateX('+y / -1.5+'deg) rotateY('+x / 1.5+'deg)');
    iris.prefixedStyle('transition', delay + 's');
    sclera.prefixedStyle('transform', 'translateX('+x / -10+'px)');
}
Element.prototype.prefixedStyle = function(property, style){
    var prefixes = ['webkit', 'moz', 'o'],
        i = 0;
    property = property.charAt(0).toUpperCase() + property.slice(1);
  
    while (prefix = prefixes[i++]){
        this.style[prefix + property] = style;
    }
};

window.setInterval(function(){
    moveEye();
}, delay * 400);