let indicatorsContainer = document.querySelector(".indicators-container");
let prices = document.querySelectorAll(".prices");

window.onload = function() {
    console.log(prices);
    // Initially hide all prices that have the 'd-none' class
    prices.forEach(row => {
        if (!row.classList.contains('d-none')) {
            row.classList.add('d-none');
        }
    });

    for (let i = 0; i < prices.length; i++) {
        const div = document.createElement('div');
        div.classList.add("indicator");
        div.classList.add(`indicator-${i}`);
        div.addEventListener('click', function() {
            // Remove the 'active' class from all indicators
            document.querySelectorAll('.indicator').forEach(ind => ind.classList.remove('active'));
            // Add the 'active' class to the clicked indicator
            div.classList.add('active');
            
            // Hide all prices
            prices.forEach(row => row.classList.add('d-none'));
            // Show the designRow with the same index as the clicked indicator
            prices[i].classList.remove('d-none');
        });
        indicatorsContainer.appendChild(div);
    }
    // Initially set the first indicator and corresponding designRow to active and visible
    indicatorsContainer.firstElementChild.classList.add("active");
    prices[0].classList.remove('d-none');
    console.log(indicatorsContainer);
};