const successfulLookup=t=>{const{latitude:o,longitude:e}=t.coords,n=fetch(`https://api.opencagedata.com/geocode/v1/json?q=${o}+${e}&key=ab68c551cd404a5baca8f1568342726b&pretty=1&language=en`).then((t=>t.text())).then((t=>({city:JSON.parse(t).results[0].components.city,country:JSON.parse(t).results[0].components.country,timezone:JSON.parse(t).results[0].annotations.timezone.name,timezoneShort:JSON.parse(t).results[0].annotations.timezone.short_name}))).catch((t=>{alert("Sorry, something went wrong :("),console.log(t)}));(async()=>{const t=document.querySelector(".timer__location");t.textContent="Your location is loading...";const o=await n;t.textContent=`In ${o.city}, ${o.country}`})(),(async()=>{const t=document.querySelector(".info__timezone"),o=document.querySelector(".timer__timezone");t.textContent="Your timezone is loading...";const e=await n;t.textContent=e.timezone,o.textContent=e.timezoneShort})()},errorLookup=t=>{alert("Sorry, cannot get your location :("),console.log(t)};navigator.geolocation.getCurrentPosition(successfulLookup,errorLookup);