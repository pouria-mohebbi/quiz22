
fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then(response => response.json())
    .then(planets => {
       
        let index = 0;
        const destinationElement = document.getElementById("destination");

        const displayPlanetInfo = (index) => {
            const planet = planets[index];
            destinationElement.innerHTML = `Planet: ${planet.name}, Distance: ${planet.distance}`;
        };

        
        displayPlanetInfo(index);

        
        destinationElement.addEventListener("click", () => {
            index = (index + 1) % planets.length; 
            displayPlanetInfo(index);
        });
    })
    .catch(error => console.error('Error fetching the planet data:', error));

