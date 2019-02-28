// Initialize weather object
const weather = new Weather('Boston', 'MA');

// Initialize UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation('Miami', 'FL');

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
