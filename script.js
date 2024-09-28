const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if (bmi<18.6){
      results.innerHTML = `<span>BMI = ${bmi} you are under Weight 😥</span>`;
    }
    else if (bmi>18.6&& bmi<24.9){
      results.innerHTML = `<span>BMI = ${bmi} you are in Normal range 😊</span>`;
    }
    else if (bmi>24.9&& bmi<29.9){
      results.innerHTML = `<span>BMI = ${bmi} you are Overweight 🤭</span>`;
    }
    else if (bmi>29.9&& bmi<34.9){
      results.innerHTML = `<span>BMI = ${bmi} you are Obese 🫣</span>`;
    }
    else {
      results.innerHTML = `<span>BMI = ${bmi} you are extremely Obese 🤡</span>`;
    }

  }

  



});

