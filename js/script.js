document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("user-form");
    const output = document.getElementById("output");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", userForm);

    function userForm() {
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const province = document.getElementById("province").value;
        const membership = document.querySelector('input[name="membership"]:checked').value;

        const result = `
            Full Name: ${firstName} ${lastName}<br>
            Email: ${email}<br>
            Address: ${address}<br>
            City: ${city}<br>
            Province: ${province}<br>
            Membership: ${membership}`;

        output.innerHTML = result;
    }


});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("excel-form");
    const output = document.getElementById("output");
    const calculateButton = document.getElementById("calculate-button");
    const themeSwitch = document.getElementById("theme-switch");

    calculateButton.addEventListener("click", myExcelFuns);
    themeSwitch.addEventListener("click", switchTheme);

    let result = '';

    function myExcelFuns() {
        const numbersInput = document.getElementById("numbers").value;

        if (!numbersInput) {
            alert("Please enter numbers separated by spaces.");
            return;
        }

        const numberStr = numbersInput.trim();
        const numberArr = numberStr.split(" ");
        const finalNumericArray = [];

        for (let i = 0; i < numberArr.length; i++) {
            const num = parseFloat(numberArr[i]);
            if (!isNaN(num)) {
                finalNumericArray.push(num);
            }
        }

        const selectedFunction = document.querySelector('input[name="function"]:checked').value;

        if (selectedFunction === "autosum") {
            result = finalNumericArray.reduce((acc, num) => acc + num, 0);
        } else if (selectedFunction === "average") {
            const sum = finalNumericArray.reduce((acc, num) => acc + num, 0);
            result = sum / finalNumericArray.length;
        } else if (selectedFunction === "max") {
            result = Math.max(...finalNumericArray);
        } else if (selectedFunction === "min") {
            result = Math.min(...finalNumericArray);
        }

        displayResult();
    }

    function displayResult() {
        output.innerHTML = `Result: ${result}`;
    }

    themeSwitch.addEventListener("click", switchTheme);

    function switchTheme() {
        if (themeSwitch.textContent === "Dark Theme") {
            themeSwitch.textContent = "Light Theme";
        } else {
            themeSwitch.textContent = "Dark Theme";
        }
        document.body.classList.toggle("dark-theme");
    }
});
