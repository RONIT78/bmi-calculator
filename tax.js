const button = document.querySelector("#calculate")





button.addEventListener('click', () => {

    const calculateTab = document.querySelector(".calculate")
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const msg = document.querySelector("#status")
    const message = document.querySelector(".message")
    const messag = document.querySelector(".messag")

    let heightStatus = false,
        weightStatus = false;
    // calculateTab.classList.add("active");

    // heightStatus checking

    if (height === "" || isNaN(height) || (height <= 0)) {
        document.querySelector(".height_error").innerHTML = 'Please provide a valid input';
        message.classList.add("show")
        calculateTab.classList.add("active");

    } else {
        document.querySelector(".height_error").innerHTML = '';
        heightStatus = true;

    }

    // weightStatus checking

    if (weight === "" || isNaN(weight) || (weight <= 0)) {
        document.querySelector(".weight_error").innerHTML = 'Please provide a valid input';
        messag.classList.add("showw")
        calculateTab.classList.add("activee");

    } else {
        document.querySelector(".weight_error").innerHTML = '';
        weightStatus = true;

    }


    if (heightStatus && weightStatus) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);


        if (bmi < 18.6) {
            msg.innerHTML = 'UNDER WEIGHT : BMI=' + bmi;
            calculateTab.classList.add("activ");
            msg.classList.add(".activv");

        } else if (bmi >= 18.6 && bmi < 24.9) {
            msg.innerHTML = 'NORMAL : BMI=' + bmi;
            calculateTab.classList.add("activ");
            msg.classList.add(".activv");

        } else {
            msg.innerHTML = 'OVER WEIGHT : BMI=' + bmi;
            calculateTab.classList.add("activ");
            msg.classList.add(".activv");

        }
    }








});