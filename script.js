// JavaScript to toggle the visibility of payment instructions
document.querySelectorAll('.pay-btn').forEach(button => {
  button.addEventListener('click', function () {
    const parentDiv = this.parentElement;
    // Toggle active class
    parentDiv.classList.toggle('active');
  });
});
// Get modal element and other components
const modal = document.getElementById('subscriptionModal');
const closeBtn = document.querySelector('.close');
const subscribeBtns = document.querySelectorAll('.subscribe-btn');
const planNameSpan = document.getElementById('plan-name');
const totalPriceSpan = document.getElementById('total-price');

// Show Modal on Subscribe Button Click
subscribeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const plan = this.getAttribute('data-plan');
        const price = this.getAttribute('data-price');
        
        // Set plan name and price
        planNameSpan.innerText = plan;
        totalPriceSpan.innerText = price;
        
        modal.style.display = 'flex';
    });
});

// Close Modal when the X is clicked
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close Modal if clicked outside modal content
window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
