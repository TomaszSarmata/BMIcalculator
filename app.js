
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('.result-field')

    const guide = document.querySelector('#guide')
    guide.classList.remove('invisible')

    if ((height === '') || (height === ' ') || (height <= 0) || (isNaN(height))) {
        result.innerHTML = 'Please provide a valid height e.g. 1.8'
    } else if ((weight === '') || (weight === ' ') || (weight <=  0) || (isNaN(weight))){
        result.innerHTML = 'Please provide a valid weight e.g. 86'
    } else {
        const BMI = Math.round(weight / (height ** 2))
        result.innerHTML = `Your current BMI is at ${BMI}`
    }
})