//FLOAT/MINIMAL NOTIFICATION 
const notificationBar = document.getElementById('notification-bar');
const notificationMessage = document.getElementById('notification-message');
const notificationClose = document.getElementById('notification-close');
notificationClose.addEventListener('click', hideNotification);

export function showNotification(message, duration = 3000,) {
    notificationMessage.textContent = message;
    notificationBar.classList.add('visible');
    console.log('clicked')

    setTimeout(() => {
        hideNotification();
    }, duration);
}

function hideNotification() {
    notificationBar.classList.remove('visible');
}

//For testing purpose only-----
// showNotification('This is a custom notification!', 5000); 







// SLIDE-UP MENU NOTIFICATION



export function showMenuNotification(message) {
    const slidupMenu = document.getElementById('slidup-menu');
    const notificationMenuMessage = document.getElementById('slidUp-message');
    notificationMenuMessage.innerHTML = message;
    slidupMenu.classList.remove('close');
    slidupMenu.classList.add('reveal');
}

export function hideSlidoutMenu() {
    const slidupMenu = document.getElementById('slidup-menu');
    slidupMenu.classList.remove('reveal');
    slidupMenu.classList.add('close');
}

