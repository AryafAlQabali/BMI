const btn = document.getElementById('calculate');

btn.addEventListener('click', function(){

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weigth').value;

    if(height == '' || weight == ''){
        alert('Please fill out the input fields!😥');

        return;
    }

    //bmi = weigth in kg / (height in m * height in m)

    height = height / 100

    let bmi = (weight/ (height * height));

    bmi = bmi.toFixed(2);

    // console.log(bmi);

    document.querySelector('#result').innerHTML = bmi;

    let status = '';
    
    if (bmi < 18.5){
        status = "Underweight😟";

    } else if (bmi >= 18.5 && bmi < 25 ){
        status = "Healthy🤩";

    }else if (bmi >= 25 && bmi < 30 ){
        status = "Overweight😓";

    }else {
        status = "Obese😣";
    }

    document.querySelector('.comment').innerHTML = `Comment: your are 
    <span id="comment">${status}</span>`;
    
});