class Weather {
  constructor(city, state) {
    this.apiKey = 'YOUR-API-KEY-HERE';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }

}