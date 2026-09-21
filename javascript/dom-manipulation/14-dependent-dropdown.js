// 14. Create a dependent dropdown such as Country → State → City.
const countryStateCity = {
  Nepal: {
    Kathmandu: ['Thamel', 'Lazimpat'],
    Pokhara: ['Lake Side', 'Sarangkot']
  },
  India: {
    Delhi: ['Connaught Place', 'Dwarka'],
    Mumbai: ['Andheri', 'Bandra']
  }
};

const country = document.getElementById('country');
const state = document.getElementById('state');
const city = document.getElementById('city');

Object.keys(countryStateCity).forEach((countryName) => {
  const option = document.createElement('option');
  option.value = countryName;
  option.textContent = countryName;
  country.appendChild(option);
});

country.addEventListener('change', () => {
  const selectedCountry = country.value;
  state.innerHTML = '<option value="">Select State</option>';
  city.innerHTML = '<option value="">Select City</option>';

  Object.keys(countryStateCity[selectedCountry] || {}).forEach((stateName) => {
    const option = document.createElement('option');
    option.value = stateName;
    option.textContent = stateName;
    state.appendChild(option);
  });
});

state.addEventListener('change', () => {
  const selectedCountry = country.value;
  const selectedState = state.value;
  city.innerHTML = '<option value="">Select City</option>';

  (countryStateCity[selectedCountry][selectedState] || []).forEach((cityName) => {
    const option = document.createElement('option');
    option.value = cityName;
    option.textContent = cityName;
    city.appendChild(option);
  });
});
