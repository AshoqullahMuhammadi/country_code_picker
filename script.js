const container = document.querySelector('.container');
const options = document.querySelector('.options');
const flag = document.querySelector('.input img');
const inputCountryCode = document.querySelector('.input h2');



import * as CountryCodes from "./country_codes.mjs";
CountryCodes.codes().forEach(country => {
    const option = document.createElement('div');
    option.classList.add('option');

    option.innerHTML = ` <h2>${country.dial_code}</h2>
    <h2>${country.name}</h2>
    <h2 style='display:none;'>${country.code}</h2>
    <img src="flags/${country.code.toLowerCase()}.png" alt="AF" srcset="" />`;
    options.appendChild(option);
});



container.addEventListener('click', function () {
    container.classList.toggle('active');
    const allCountries = document.querySelectorAll('.option');

    allCountries.forEach(function (country) {
        country.addEventListener('click', function () {
            const countryPhonCode = `${country.childNodes[1].textContent}`;
            const countryName = `${country.childNodes[3].textContent}`;
            const countryCode = `${country.childNodes[5].textContent.toLowerCase()}`;
            flag.src = `flags/${countryCode}.png`;
            inputCountryCode.textContent = countryPhonCode;

        });
    });

});