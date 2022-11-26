function BMI(wvalue,hvalue){
    let weight = document.getElementById(wvalue).value
    let height = document.getElementById(hvalue).value
    let total = weight / ((height/100)**2)
    return total.toFixed(2)
}

function toBMI(){
    let boxshow = document.getElementById('BMIshow')
    let stateshow = document.getElementById('stateShow')
    let BMIvalue = BMI("it1","it2")
    if(BMIvalue>=30){
        stateshow.value = "โรคอ้วนอันอันตราย"
    } 
    else if(BMIvalue>=25.00 && BMIvalue<=29.9){
        stateshow.value = "โรคอ้วน"
    }
    else if(BMIvalue>=23.00 && BMIvalue<=24.9){
        stateshow.value = "น้ำหนักเกิน"
    }
    else if(BMIvalue>=18.5 && BMIvalue<=22.9){
        stateshow.value = "สมส่วน"
    }
    else{
        stateshow.value = "น้ำหนักต่ำกว่าเกณฑ์"
    }
    
    boxshow.value = BMIvalue
}

let click = document.getElementById('bot')
click.onclick = function(){toBMI()}
