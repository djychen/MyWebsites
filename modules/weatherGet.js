const apiKey = '926c7ae4f0f07b93bdab9ff96fde652d';
const url = 'https://api.openweathermap.org/data/2.5/weather?';
// Selecting page elements
const inputField = document.querySelector('#input');
const getButton = document.querySelector('#get');
const responseField = document.querySelector('#responseField');

const getWeather = async() => {
  const city = inputField.value;
  const queryParams = `q=${city}&appid=${apiKey}&units=metric`;
  const endpoint = `${url}${queryParams}`;
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'});
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch(error) {
      console.log(error);
  }
}

  const renderResponse = (res) => {
    if (!res || !res) {
      responseField.innerHTML = '<p>No weather data available.</p>';
      return;
    }

    const weatherData = `
    <p>Temperature in ${res.name}: ${res.main.temp}°C; Humidity: ${res.main.humidity}%</p> `;
    
    responseField.innerHTML = weatherData;
    console.log('Rendered weather data:', weatherData); // Add this line
  }

  // Clear previous results and display results to webpage
const displayWeather = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  if (getButton.textContent === 'Get') { 
    getWeather();
    getButton.textContent = 'Clear';
  } else {
    clearFields([inputField]);
    getButton.textContent = 'Get';
  }
}

function clearFields(fields) {
  fields.forEach(field => field.value = '');
}
getButton.addEventListener('click', displayWeather);
