function calculateBill() {
    const consumption = parseFloat(document.getElementById('consumption').value);
    const location = document.getElementById('location').value;
    let consumptionCost = 0;
    
    if (isNaN(consumption) || consumption <= 0) {
        alert('Please enter a valid consumption value.');
        return;
    }

    if (consumption <= 50) {
        consumptionCost = consumption * 0.58;
    } else if (consumption <= 100) {
        consumptionCost = (50 * 0.58) + ((consumption - 50) * 0.68);
    } else if (consumption <= 200) {
        consumptionCost = (50 * 0.58) + (50 * 0.68) + ((consumption - 100) * 0.83);
    } else if (consumption <= 350) {
        consumptionCost = (50 * 0.58) + (50 * 0.68) + (100 * 0.83) + ((consumption - 200) * 1.25);
    } else if (consumption <= 650) {
        consumptionCost = (50 * 0.58) + (50 * 0.68) + (100 * 0.83) + (150 * 1.25) + ((consumption - 350) * 1.40);
    } else {
        consumptionCost = (50 * 0.58) + (50 * 0.68) + (100 * 0.83) + (150 * 1.25) + (300 * 1.40) + ((consumption - 650) * 1.45);
    }

    const clientServiceFee = 0;
    const cleaningFee = 0;

    const totalCost = consumptionCost + clientServiceFee + cleaningFee;

    document.getElementById('consumption-cost').innerText = consumptionCost.toFixed(2);
    document.getElementById('total-cost').innerText = totalCost.toFixed(2);
}
