import './style.css';

const api_key = 'd614b942c9e94ad39b0185909231807';

async function getWeather(location) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
}

function displayWeather(weather, div) {
    div.classList.add('weather');

    const location = document.createElement('div');
    location.classList.add('location');
    location.textContent = weather.location;

    const temperature = document.createElement('div');
    temperature.classList.add('temperature');
    if (unitsBtn.getUnits() === '°F') {
        temperature.textContent = weather.temp_f;
    } else {
        temperature.textContent = weather.temp_c;
    }

    const icon = document.createElement('img');
    icon.classList.add('icon');
    icon.src = weather.condition_img;

    const mainDisplay = document.createElement('div');
    mainDisplay.classList.add('main-display');
    mainDisplay.appendChild(temperature);
    mainDisplay.appendChild(icon);

    const condition = document.createElement('div');
    condition.classList.add('condition');
    condition.textContent = weather.condition;

    div.appendChild(location);
    div.appendChild(mainDisplay);
    div.appendChild(condition);
}

function parseData(data) {
    const weather = {
        location: data.location.name,
        temp_f: `${data.current.temp_f}°F`,
        temp_c: `${data.current.temp_c}°C`,
        condition: data.current.condition.text,
        condition_img: `http:${data.current.condition.icon}`
    }
    return weather;
}

function clearDisplay(div) {
    div.innerHTML = '';
}

function attachEvent(input, inputBtn, div) {
    inputBtn.addEventListener('click', async function (e) {
        e.preventDefault();
        clearDisplay(div);
        const data = await getWeather(input.value);
        const weather = await parseData(data);
        displayWeather(weather, div);
    });
}

const unitsBtn = (() => {
    const btn = document.createElement('button');
    btn.classList.add('units-btn');
    btn.textContent = '°C';
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        btn.textContent === '°C' ? btn.textContent = '°F' : btn.textContent = '°C';
    });

    const getBtn = () => { return btn }

    const getUnits = () => { return btn.textContent }

    return {
        getBtn,
        getUnits
    };
})();

function createPage() {
    const content = document.querySelector('.content');

    const innerContent = document.createElement('div');
    innerContent.classList.add('inner-content');

    // Create a form to get the user's location
    const form = document.createElement('form');
    form.classList.add('user-input');

    const label = document.createElement('label');
    label.for = 'location';
    label.textContent = 'City or Zipcode';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = label.for;
    input.name = label.for;
    input.placeholder = 'City or Zipcode'
    input.required = true;

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Go';

    // Create a div to display the weather results
    const weatherDiv = document.createElement('div');

    // Create a button to change the units
    // const unitsBtn = document.createElement('button');
    // unitsBtn.classList.add('units-btn');
    // unitsBtn.textContent = '°C'
    const unitBtn = unitsBtn.getBtn();

    form.appendChild(input);
    form.appendChild(submitBtn);

    innerContent.appendChild(form);
    innerContent.appendChild(weatherDiv);

    content.appendChild(unitBtn);
    content.appendChild(innerContent);

    // Handle the input
    attachEvent(input, submitBtn, weatherDiv);
}


createPage();