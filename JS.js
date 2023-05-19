/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const leng = document.getElementById("length")
const vol = document.getElementById("volume")
const mass = document.getElementById("mass")
const btn = document.getElementById("btn")
let buttonmode=document.getElementById("modebtn")
let inp =document.getElementById("type")
let number = 0
let flip = false


function convert()
{
    number=inp.value
    let metter =(3.281*number).toFixed(2)

    let feet = ((1/3.281)*number).toFixed(2)

    leng.textContent= number  +` meters = ${metter} feet |  ${number} feet = ${feet} meters `
    
    let liter =(0.264*number).toFixed(2)
    let gallon =((1/0.264)*number).toFixed(2)

    vol.textContent=`${number} liters = ${liter} gallons |  ${number} gallons = ${gallon} Liters `
    
    let kilo = (2.204*number).toFixed(2)
    let pounds=((1/2.204)*number).toFixed(2)
    mass.textContent=` ${number} kilos = ${kilo} pounds |  ${number} pounds = ${pounds} kilos `

    inp.value=""
}

btn.addEventListener("click",convert)

function darkmode()
{
    let first =document.getElementById("firstdiv")
    let second =document.getElementById("seconddiv")
    let unit = document.getElementsByClassName("unit")
    let img = document.getElementById("sun")
    img.src="night-mode.png"

    let elem =document.body

    first.classList.add("darkFirstdiv")
    for(let i=0;i<unit.length;i++)
    {
        unit[i].classList.add("darkUnit")
    }
    second.classList.add("darkSeconddiv")
    elem.classList.toggle("darkBody")

}
function normalmode(){
    let first =document.getElementsByClassName("firstdiv")
    let second =document.getElementsByClassName("seconddiv")
    let unit = document.getElementsByClassName("unit")
    let img = document.getElementById("sun")
    img.src="sun.png"
    let elem =document.body

    first[0].classList.remove("darkFirstdiv")
    for(let i=0;i<unit.length;i++)
    {
        unit[i].classList.remove("darkUnit")
    }
    second[0].classList.remove("darkSeconddiv")
    elem.classList.toggle("darkBody")

}


buttonmode.addEventListener("click",function(){

    if(flip)
    {
        normalmode()
    }
    else{
        darkmode()
    }
    flip=!flip
})


