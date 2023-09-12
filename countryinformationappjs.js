// Function to fetch country data from the API
const fetchCountryData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Get data for a specific country (e.g., the first country in the list)
      const countryData = data[3];
  
      // Extract relevant country information
      const countryName = countryData.name.common;
      const capital = countryData.capital[0];
      const population = countryData.population;
      const region = countryData.region;
  
      // Update the HTML with the country information
      const countryInfoElement = document.querySelector('.country-info');
      countryInfoElement.innerHTML = `
        <h2>${countryName}</h2>
        <p>Capital: ${capital}</p>
        <p>Population: ${population.toLocaleString()}</p>
        <p>Region: ${region}</p>
      `;
    } catch (error) {
      console.error('Error fetching country data:', error);
      const countryInfoElement = document.querySelector('.country-info');
      countryInfoElement.innerHTML = '<p>Failed to fetch country data. Please try again later.</p>';
    }
  };
  
  // Call the fetchCountryData function when the page loads
  window.addEventListener('load', fetchCountryData);
  