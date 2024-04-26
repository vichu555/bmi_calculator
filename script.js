const calculateBmi=()=>{
    var age=parseInt(document.getElementById("age").value);
    var gender=document.getElementById("gender").value;
    var h=parseInt(document.getElementById("height").value);
    var w=parseInt(document.getElementById("weight").value);
    h=h/100;
    var bmi,bmicategory;
    if(gender === 'male'){
        bmi= 0.5 * w / (h*h) +0.03 * age - 0.28;
    }
    else{
        bmi= 0.5 * w / (h*h) +0.03 * age - 0.02;
    }

    if(bmi < 18.5){
        bmicategory = 'You are Underweight,Eat healthy';
    }
    else if(bmi >= 18.5 && bmi <25){
        bmicategory = 'You are an normal weight!...'
    }
    else if(bmi >=25 && bmi <30){
        bmicategory = 'you are overweight,do some exercise and follow diet'
    }
    else{
        bmicategory='obese'
    }
    document.getElementById('result').style.display='block';
    document.getElementById('bmi_res').innerHTML=`your bmi : ${bmi.toFixed(2)}`
    document.getElementById('bmi_cat').innerHTML=`${bmicategory}`

}
const reset=()=>{
    document.getElementById("age").value=" ";
    document.getElementById("gender").value=" ";
    document.getElementById("height").value=" ";
    document.getElementById("weight").value=" ";
}