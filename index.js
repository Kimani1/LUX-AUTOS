// Function to fetch car data from the JSON file
async function fetchCarData() {
    try {
        const response = await fetch("http://localhost:3000/cars");
        if (!response.ok) {
            throw new Error("Unable to fetch car data.");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return {};
    }
}

// Function to display cars in the inventory section
async function displayCars() {
    const carList = document.getElementById("car-list");
    const carData = await fetchCarData();

    // 
    Object.keys(carData).forEach((carKey) => {
        const car = carData[carKey];
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");

        carCard.innerHTML = `
            <img src="images/${car.image}" alt="${car.make} ${car.model}">
            <h3>${car.make} ${car.model}</h3>
            <p>Year: ${car.year}</p>
            <p>Price: ${car.price}</p>
            <div class="specs">
                <p>${car.specs}</p>
            </div>
        `;

        carList.appendChild(carCard);
    });
}

// Call the displayCars function when the page loads
document.addEventListener("DOMContentLoaded", displayCars);
