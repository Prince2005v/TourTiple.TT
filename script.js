// script.js

// Placeholder for potential interactive features
console.log("TripNEST JavaScript is running!");

// You can add interactive features here like search filtering, API calls for booking, etc.
function showMountainDetails(mountainName) {
    // Hide the mountain selection
    document.querySelector('.mountain-selection').style.display = 'none';

    // Show the mountain details
    document.getElementById('mountain-details').style.display = 'block';

    // Set the name of the mountain
    document.getElementById('mountain-name').textContent = mountainName;
    document.getElementById('mountain-name-travel').textContent = mountainName;
    document.getElementById('mountain-name-stay').textContent = mountainName;
}
document.querySelector('.search-bar').addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        alert(`Searching for: ${this.value}`);
    }
});
