/**
 * Created by Administrator on 2017/8/8.
 */
var windowWidth;
var windowHeight;

var moji,
    door,
    left_window,
    right_window,
    persion,
    btn_ji,
    btn_ji_text,
    play_content;

window.onload = function(){
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    console.log('windowHeight:' + windowHeight + '  windowWidth:' + windowWidth);

    moji = document.getElementById('moji');
    door = document.getElementById('door');
    left_window = document.getElementById('left_wind');
    right_window = document.getElementById('right_wind');
    persion = document.getElementById('persion');

    btn_ji = document.getElementById('btn-ji');
    btn_ji_text = document.getElementById('btn-text');
    play_content =  document.getElementById('play-content');

    init();
};

function start(){
    btn_ji_text.setAttribute('class', 'play-clicked');
    moji.setAttribute('class', 'moji-move-left');
    persion.setAttribute('class', 'persion-move-right');
    door.setAttribute('class', 'window-content-scale');
    left_window.setAttribute('class', 'window-move-left');
    right_window.setAttribute('class', 'window-move-right');
    play_content.setAttribute('class', 'nav-move-bottom');
    setTimeout(function clear() {
        container.style.visibility = 'hidden';
    }, 600);
}


var count = 50;
var container;

function init(){
    container=document.getElementById("leafContainer");
    for (var i = 0; i < count; i++) {
        container.appendChild(createLeaf());
    }
}
function randomInteger(min,max){
    return parseInt(Math.random()*(max-min)-1)+min;
}
function randomFloat(min,max){
    return min+Math.random()*(max-min);
}
function durationValue(value)
{
    return value + 's';
}
function createLeaf(){
    this.srcs="img/realLeaf"+randomInteger(1,5)+".png";
    this.tops="-100px";
    this.right=""+randomInteger(0,document.body.clientWidth)+"px";
    this.imgSpinName=(Math.random()<0.5)?'leftRotation':'rightRotation';
    this.divName="fade,drop";
    this.aniDuration=durationValue(randomFloat(5,11));
    this.imgSpinDuration=durationValue(randomFloat(4,8));
    this.leafDelay=durationValue(randomFloat(0,5));
    var leafDiv=document.createElement('div');
    var leafImage=document.createElement('img');
    leafImage.src=this.srcs;
    leafDiv.style.top=this.tops;
    leafDiv.style.left=this.right;
    leafDiv.style.webkitAnimationName=this.divName;
    leafImage.style.webkitAnimationName=this.imgSpinName;
    leafDiv.style.webkitAnimationDuration=this.aniDuration+','+this.aniDuration;
    leafDiv.style.webkitAnimationDelay=this.leafDelay+','+this.leafDelay;
    leafImage.style.webkitAnimationDuration=this.imgSpinDuration;
    leafDiv.appendChild(leafImage);
    return leafDiv;
}