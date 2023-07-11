//slides the testmonials
let btn =document.getElementsByClassName('btn');
let slide =document.getElementById('slide');
btn[0].onclick=()=>{
    slide.style.transform ='translateX(0px)';
    for(let i=0; i<3;i++){
        btn[i].classList.remove("active")
    }
    event.target.classList.add("active")


}

btn[1].addEventListener('click',()=>{
    slide.style.transform ='translateX(-800px)';
    for(let i=0; i<3;i++){
        btn[i].classList.remove("active")
    }
    event.target.classList.add("active")
}) 
btn[2].addEventListener('click',()=>{
    slide.style.transform ='translateX(-1600px)';
    for(let i=0; i<3;i++){
        btn[i].classList.remove("active")
    }
    event.target.classList.add("active")
}) 

// menu click show
const bar = document.getElementById('bar');
const nav =document.getElementById('navbar');
const close = document.getElementById('close')
 if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active-bar')
    })
 }
 if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active-bar')
    })
 }


 //product change big in click 
//product change big in click 
//product change big in click 
var mainImg = document.getElementById('mainImg');
var smallImg = document.getElementsByClassName('small-img')
smallImg.item(0).onclick = function(){
   mainImg.src = smallImg.item(0).src;
   console.log('hello')
}
smallImg[1].onclick = function() {
   mainImg.src = smallImg[1].src;
}
smallImg[2].onclick=()=>{
   mainImg.src=smallImg[2].src;
}


// document.addEventListener('DOMContentLoaded', function() {
//     var mainImg = document.getElementById('mainImg');
//     var smallImg = document.getElementsByClassName('small-img-group')
//     smallImg.item(0).onclick = function(){
//        mainImg.src = smallImg.item(0).src;
//        console.log('hello')
//     }
//     smallImg[1].onclick = function() {
//        mainImg.src = smallImg[1].src;
//     }
//     smallImg[2].onclick=()=>{
//        mainImg.src=smallImg[2].src;
//     }
    
//   });