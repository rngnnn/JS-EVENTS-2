let buton1 = document.getElementById("myButton")
let sonuc = document.getElementById("result")

// console.log(buton1)
// console.log(sonuc)


//! Callback yazım çeşitleri

//? 1. yol

// buton1.addEventListener("click",function konsol(){
//     console.log("buton1 clicked")
// })


//? 2. yol (Fonksiyon ismi opsiyonel)
// buton1.addEventListener("click",function (){
//     console.log("buton1 clicked")
//     sonuc.textContent = "Button 1 clicked "
// })

// buton1.addEventListener("dblclick",function (){
    
//     sonuc.textContent = "Button 1 double clicked "
//     console.log("buton1 double clicked")
// })

//? 3. yol dışardan arrow / named fonksiyon çağırma

// const clicked2 = () => {sonuc.textContent = "Button 1 clicked "}

// buton1.addEventListener("click",clicked2) //çağırma parantezleri olmadan yazılacak

//? 4. yol dışarıdan fonksiyon çağırmak


// function clicked () {

//     sonuc.textContent += " Button 1 clicked function called from outside"
// }

// buton1.addEventListener("click",clicked)

//? mouseover ouseout eventleri

// let myImg=document.getElementById("myImage")

// myImg.addEventListener("mouseover",()=>{

// myImg.style.width="300px"
// console.log("imaj 300px oldu");

// })

// myImg.addEventListener("mouseout",()=>{

//     myImg.style.width="100px"
//     console.log("imaj 100px oldu");
    
// })

// buton1.addEventListener("click",()=>{
// myImg.style.display="block";

// })


let secim=document.getElementById("colors")
secim.addEventListener("change",()=>{

let selectedColor=secim.value
document.getElementById("selectedColor").textContent=`secilen Renk: ${selectedColor}`
document.body.style.backgroundColor=selectedColor
})

//?Random background color


//random renk
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;

}

const buton2=document.getElementById("colorButton")
buton2.addEventListener("click",()=>{
const renk=getRandomColor()
// console.log(renk);
document.body.style.backgroundColor=renk



})