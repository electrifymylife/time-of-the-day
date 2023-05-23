const successfulLookup = position => {
  const { latitude, longitude } = position.coords;
  const decodeGeoData = fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=ab68c551cd404a5baca8f1568342726b&pretty=1&language=en`)
    .then((response) => response.text())
    .then((results) => {

      const city = JSON.parse(results).results[0].components.city;
      const country = JSON.parse(results).results[0].components.country;
      let timezone = JSON.parse(results).results[0].annotations.timezone.name;
      const timezoneShort = JSON.parse(results).results[0].annotations.timezone.short_name;

      if (timezone.includes("/")) {
        timezone = timezone.replace("/", ` / `);
      }

      return {city: city, country: country, timezone: timezone, timezoneShort: timezoneShort};
    })
    .catch(error => {
      alert("Sorry, something went wrong :(");
      console.log(error);
    });

  const setLocation = async () => {
    const location = document.querySelector(".timer__location");
    location.textContent = "Your location is loading...";
    const geoData = await decodeGeoData;
    location.textContent = `In ${geoData.city}, ${geoData.country}`;
  };

  const setTimezone = async () => {
    const timezone = document.querySelector(".info__timezone");
    const timezoneShort = document.querySelector(".timer__timezone");
    timezone.textContent = "Your timezone is loading...";
    const geoData = await decodeGeoData;
    timezone.textContent = geoData.timezone;
    timezoneShort.textContent = geoData.timezoneShort;
  };

  setLocation();
  setTimezone();
}

const errorLookup = (error) => {
  alert("Sorry, cannot get your location :(");
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successfulLookup, errorLookup);