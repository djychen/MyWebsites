//import domFunctions from './dom-functions.js';
//const { toggleHiddenElement} = domFunctions; 

// Information to reach API
const apiUrl = 'https://localhost:7049/api/Employee/AddStaff?';

// Some page elements
const nameField = document.querySelector('#name');
const departmentField = document.querySelector('#department');
const addButton = document.querySelector('#add');
const responseField = document.querySelector('#responseField');

// Function to call the API
async function postDataToApi() {
  // Get the values from the input fields
  const employeeName = nameField.value.trim();
  const employeeDepartment = departmentField.value.trim();
  // Check if the input fields are empty
  if (!employeeName || !employeeDepartment) {
    return;
  }

  const queryString = `name=${employeeName}&department=${employeeDepartment}`;
  const endpoint = `${apiUrl}${queryString}`;

  try {
   // Send the data to the API
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // Check if the response is ok
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // Get the JSON response from the response
    const jsonResponse = await response.json();
    // Render the JSON response to the page
    renderJsonResponse(jsonResponse);
  } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
  }
}

const renderJsonResponse = (response) => {
  // Log the entire response first
  console.log('Full response:', response);

  // Creates an empty object to store the JSON in key-value pairs
  let rawJson = {}
  for(let key in response){
    rawJson[key] = response[key]
  }
  // Log the rawJson object
  console.log('rawJson:', rawJson);

  // Extracting data from rawJson
  const success = rawJson.success;
  const message = rawJson.message;
  const code = rawJson.code;

  // Logging the extracted data
  console.log('Success:', success);
  console.log('Message:', message);
  console.log('Code:', code);

  if (success) {
    // Manipulates responseField to show the returned JSON.
    responseField.innerHTML = `<p>${message}</p>`;
  } else {
    responseField.innerHTML = `<p>Error: ${message}</p>`;
  }
}

// Clear page and call Asynchronous functions
const displayResponse = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  if (addButton.textContent === 'Add') {
    postDataToApi();
    addButton.textContent = 'Clear';
  } else {
    clearFields([nameField, departmentField]);
    addButton.textContent = 'Add';
  }
}

function clearFields(fields) {
  fields.forEach(field => field.value = '');
}

addButton.addEventListener('click', displayResponse);



