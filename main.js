// set your own values between here
let maxFontSize = 25.563
let minFontSize = 10
let maxWidth = 48
let minWidth = 34.375
// set your own values between here

let slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)
let yAxisIntersection = -minWidth * slope + minFontSize
let clampSlope = slope * 100
let finalClamp = `clamp(${minFontSize}rem, ${yAxisIntersection.toFixed(4)}rem + ${clampSlope.toFixed(4)}vw, ${maxFontSize}rem);`

// copy paste the string into your css!
console.log(finalClamp)



// let preferredValue = yAxisIntersection[rem] + (slope * 100)[vw]
// console.log(yAxisIntersection)
// 1.25rem ,0.809rem + 1.877vw, 2.5rem

// clamp(0.5rem, 0.4338009074246567rem + 0.2824434361948258vw, 0.688rem)