// selecting seats
function changeButtonColor(event) {
    if (event.target.tagName === 'BUTTON') {
        if (event.target.style.backgroundColor === 'green') {
            event.target.style.backgroundColor = '';
        } else {
            var selectedButtons = document.querySelectorAll('#selecting-seat button[style="background-color: green;"]');

            if (selectedButtons.length < 3) {
                event.target.style.backgroundColor = 'green';
            } else {
                alert('You can only select up to 3 Seats.');
            }
        }
        showSelectedButtons();
        calculateTotalPrice();
    }
}

document.getElementById('selecting-seat').addEventListener('click', changeButtonColor);

function showSelectedButtons() {
    var selectedButtons = document.querySelectorAll('#selecting-seat button[style="background-color: green;"]');
    var selectedText = '';
    selectedButtons.forEach(function (button) {
        selectedText += button.textContent + ' Economics' + ' 550  ';

    });

    document.getElementById('selected-buttons-text').textContent = selectedText;
}


function calculateTotalPrice() {
    var selectedButtons = document.querySelectorAll('#selecting-seat button[style="background-color: green;"]');
    var totalPrice = 0;

    selectedButtons.forEach(function (button) {

        totalPrice += 550;
    });

    document.getElementById('total-price').textContent = totalPrice;
}

document.getElementById('discount-button').addEventListener('click', applyDiscount);

function applyDiscount() {
    var totalPrice = parseFloat(document.getElementById('total-price').textContent);
    var discountCode = document.getElementById('discount-code').value.trim().toUpperCase();;
    var discountedPrice = totalPrice;

    if (discountCode === 'NEW15') {
        discountedPrice = totalPrice * 0.85; 
    }
    else if (discountCode === 'COUPLE20') {
        discountedPrice = totalPrice * 0.8; 
    } 
    else {
        alert('Invalid discount code.');
    }

    document.getElementById('discounted-price').textContent = discountedPrice.toFixed(2);
}