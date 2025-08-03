function login() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    if(user && pass) {
        document.querySelector('.login-box').style.display = 'none';
        document.getElementById('aviator-section').style.display = 'block';
    } else {
        alert('Please enter valid login credentials.');
    }
}

let multiplier = 1.00;
let crashPoint = Math.random() * 5 + 1;
function startFlight() {
    multiplier = 1.00;
    crashPoint = Math.random() * 5 + 1;
    let display = document.getElementById('multiplier');
    const interval = setInterval(() => {
        multiplier += 0.05;
        display.textContent = multiplier.toFixed(2) + 'x';
        if(multiplier >= crashPoint) {
            clearInterval(interval);
            alert('Plane Crashed at ' + multiplier.toFixed(2) + 'x!');
        }
    }, 200);
}