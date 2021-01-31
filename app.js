const percentage = document.querySelector('.percentage')
const background = document.querySelector('.background')

let load = 0
//The blurring effect is at an interval of 44 miliseconds.
let int = setInterval(blurring, 44)

function blurring() {
    load++
    if (load > 99) {
        clearInterval(int)
    }
//As the numbers scale up, the opacity goes from 1 to 0.
    percentage.innerText = `${load}%`
    percentage.style.opacity = scale(load, 0, 100, 1, 0)
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
