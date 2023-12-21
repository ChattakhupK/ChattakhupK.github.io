function bmi(w, h){
    h = h / 100
    let value = w / (h*h)
    return value.toFixed(2)
}

function showBmi(value){
    document.getElementById('out-bmi').innerHTML = value

    if( value >= 30){
        document.getElementById('out-result').innerHTML = 'อ้วนมาก'
    } else if( value >= 25 ){
        document.getElementById('out-result').innerHTML = 'อ้วน'
    } else if( value >= 18 ){
        document.getElementById('out-result').innerHTML = 'ปกติ'
    } else{
        document.getElementById('out-result').innerHTML = 'ผอม'
    }
}