// Initialize storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Initialize UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in local storage
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});



function getWeather() {
weather.getWeather()
.then(results => {
  console.log(results);
})
.catch(err => console.log(err));
}
