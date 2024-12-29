// import {} from './bonusCode.js'
import { showNotification, showMenuNotification, hideSlidoutMenu } from  './notification.js'

//FUNTION TO FEATCH USER'S DETAILS {NAME}
// 'use strict';

// // Initialize the app and fetch user data
// document.addEventListener('DOMContentLoaded', () => {
//   const WebApp = window.Telegram.WebApp;
  
//   // Retrieve user data from the WebApp SDK
//   if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
//     const userData = WebApp.initDataUnsafe.user;
//     displayUserData(userData);
//   } else {
//     // console.error('User data is not available in WebApp.initDataUnsafe.');
//     document.getElementById('user-name').textContent = 'User 0';
//   }
// });

// // Function to display user data
// function displayUserData(userData) {
//   const userName = document.getElementById('user-name');
//   const userProfilePicture = document.getElementById('user-profile-picture');
  
//   if (userData) {
//     userName.textContent = userData.first_name + userData.last_name;
//   } else {
//     userName.textContent = 'Defult';
//   }
// }




'use strict';

// Initialize the app and fetch user data
document.addEventListener('DOMContentLoaded', () => {
  const WebApp = window.Telegram.WebApp;
  
  // Retrieve user data from the WebApp SDK
  if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
    const userData = WebApp.initDataUnsafe.user;
    displayUserData(userData);
  } else {
    // console.error('User data is not available in WebApp.initDataUnsafe.');
    document.getElementById('user-name').textContent = 'User 0';
  }
});

// Function to display user data
function displayUserData(userData) {
  const userName = document.getElementById('user-name');
  const userProfilePicture = document.getElementById('user-profile-picture'); // The image element for the profile picture
  
  if (userData) {
    // Display the user's full name
    userName.textContent = userData.first_name + ' ' + userData.last_name;
    
    // Display the user's profile picture
    if (userData.photo_url) {
      userProfilePicture.src = userData.photo_url;
      userProfilePicture.alt = 'User Profile Picture';
    } else {
      // If no photo_url exists, use a default image or hide the profile picture element
      userProfilePicture.src = 'path/to/default-image.jpg'; // Replace with your default image path
      userProfilePicture.alt = 'Default User Image';
    }
  } else {
    userName.textContent = 'Default User';
    userProfilePicture.src = 'path/to/default-image.jpg'; // Replace with your default image path
    userProfilePicture.alt = 'Default User Image';
  }
}
















//BONUS CODE SECTION
const inputs = document.querySelectorAll('.digit-input');
const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', submitDigits)

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
        }
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        inputs[index - 1].focus();
      }
    });

    input.addEventListener('paste', (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, 5);
    pasteData.split('').forEach((char, i) => {
        if (inputs[index + i]) {
        inputs[index + i].value = char;
        }
    });
    inputs[Math.min(index + pasteData.length, inputs.length - 1)].focus();
    });
});

export function submitDigits() {
    const bonusCode = '33333';
    const bonusPrice = '1,000'
    const digits = Array.from(inputs).map(input => input.value).join('').toString();
    submitButton.textContent = 'Checking...';
    setTimeout(() => {
    if ( digits !== bonusCode || digits.length < 5 ) {
      showNotification('Invalid code')
      submitButton.textContent = 'Check';
      // alert(digits)
      return
    } if (digits === bonusCode){
      showNotification(`Congrats! You've won ${bonusPrice} ERR`)
    } 
    submitButton.textContent = 'Check';
  }, 1000);
}




// FUNCTIONS FOR BONUS CODE slidup message ---
const closeBonusCodeDetails = document.getElementById('close-slidup-icon');
closeBonusCodeDetails.addEventListener('click', hideSlidoutMenu);

const bonusCodeDetails = document.getElementById('bonus-details-menu');
bonusCodeDetails.addEventListener('click', () => {
  const notificationMessage = `<div class="bonus-code-details">
    <h1>To get the bonus code, follow these steps:</h1><br>
    <p>Watch our latest YouTube video in the <br><span><a href="./earn.html">Task</a></span> section for the secret code.</p><br>
    <p>Input the code in the required field below</p><br>
    <p>Be one of the 15 lucky winners to recive 10,000ERR</p>
    <br>
    <p><span>NOTE:</span> The first 15 users to input the correct code will win 10,000ERR. Only one code entry per user </p>
  </div>
  `;
  showMenuNotification(notificationMessage)
});


// AIRDROP slidup message --
const airdropInfo = document.getElementById('airdrop-info');
airdropInfo.addEventListener('click', () => {
  const airdropMessage = `
  <div class="airdrop-milestones-text">
                    <h1> The Wait is Almost Over <br> <span>Errorr</span> airdrop is coming</h1>
                    <div class="title"></br>
                        Before we kick off the Airdrop, we’re working on a few important things. Here’s what we need to accomplish first:
                    </div> <br>
                    <div class="milestones">
                        <div class="first">
                            <input type="checkbox" id="task1" onClick="this.checked=true" checked>
                            <label for="task1">Launch of the platform</label>
                        </div> 
                        <div class="second">
                            <input type="checkbox" id="task1" onClick="this.checked=false">
                            <label for="task1">Partnerships with Key Sponsors</label>
                        </div> 
                        <div class="third">
                            <input type="checkbox" id="task2" onClick="this.checked=false">
                            <label for="task2">Reaching Our User Goal</label>
                        </div>
                        <div class="fourth">
                            <input type="checkbox" id="task3" onClick="this.checked=false">
                            <label for="task3">Achieving Revenue Milestones </label>
                        </div> </br>
                    </div>
                    <div class="footer">
                        <p>Once these tasks are completed, the airdrop will officially begin, and you’ll be notified! Keep earning!</p>
                    </div>
                </div>
  `
  showMenuNotification(airdropMessage);
})