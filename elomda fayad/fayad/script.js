// Switch Tab Function
function switchTab(tabId) {
    const tabs = document.querySelectorAll('.page-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    const targetTab = document.getElementById(tabId + '-page');
    if (targetTab) {
        targetTab.classList.add('active');
    }

    const activeLink = document.querySelector(`.nav-link[href="#${tabId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').replace('#', '');
            switchTab(targetId);
        });
    });
});

// Filter Trucks in Inventory
function filterTrucks(category) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const truckItems = document.querySelectorAll('.truck-item');
    truckItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Form Submission to WhatsApp
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('form-name').value;
    const phone = document.getElementById('form-phone').value;
    const truck = document.getElementById('form-truck').value;
    const msg = document.getElementById('form-msg').value;

    const whatsappMessage = `مرحباً أستاذ محمود وأستاذ علي فياض، أنا ${name} ورقمي ${phone}. أستفسر عن شاحنة (${truck}). التفاصيل: ${msg}`;
    window.open(`https://wa.me/201005243057?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
}