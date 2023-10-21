document.addEventListener('DOMContentLoaded', () => {

let cel_data = document.getElementById('cel-data')
let kel_data = document.getElementById('kel-data')
let far_data = document.getElementById('far-data')
document.querySelector('#convert-button').addEventListener('click',()=>{
    const selected_temp = document.getElementById('temp-select').value
    const temp_input = document.querySelector('#myinput').value
    if(selected_temp=='Celsius')
    {

        cel_data.innerHTML=temp_input
        far_data.innerHTML=((temp_input*(9/5))+32).toFixed(2)
        kel_data.innerHTML=(+temp_input)+273.15
       

    }
    else if(selected_temp == 'Fahrenheit')
    {
        cel_data.innerHTML=((temp_input - 32) *(5/9)).toFixed(2)
        far_data.innerHTML=temp_input
        kel_data.innerHTML=((temp_input-32) * (5/9) + (273.15)).toFixed(2)
       
    }
    else if(selected_temp=='Kelvin')
    {
        cel_data.innerHTML=(temp_input-273.15).toFixed(2)
        far_data.innerHTML=((temp_input-273.15)*(9/5)+(32)).toFixed(2)
        kel_data.innerHTML=temp_input
       
    }
    document.querySelector('#myinput').value=''
})
});