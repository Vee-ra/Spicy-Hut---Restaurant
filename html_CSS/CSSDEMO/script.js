// Function to handle registration
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pwd').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    // Check if all fields are filled
    if (!name || !email || !password || !gender) {
        showModal('Please fill in all the fields.');
        return;
    }

    // Save to localStorage
    localStorage.setItem('username', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Show popup message
    showModal('Registration successful!');

    // Clear the input fields
    clearFields();
});

// Function to handle login
document.getElementById('loginBtn').addEventListener('click', function() {
    // Get saved values from localStorage
    const storedName = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Get input values for login
    const inputName = document.getElementById('name').value.trim();
    const inputEmail = document.getElementById('email').value.trim();
    const inputPassword = document.getElementById('pwd').value.trim();

    // Check if all fields are filled
    if (!inputName || !inputEmail || !inputPassword) {
        showModal('Please fill in all the fields.');
        return;
    }

    // Validate login
    if (inputName === storedName && inputEmail === storedEmail && inputPassword === storedPassword) {
        showModal('Login successful!');
    } else {
        showModal('Login failed. Please check your credentials.');
    }

    // Clear the input fields
    clearFields();
});

// Function to clear the input fields
function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pwd').value = '';
    document.getElementsByName('gender').forEach((radio) => {
        radio.checked = false;
    });
}

// Function to show modal
function showModal(message) {
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modalMessage");
    modalMessage.textContent = message;
    modal.style.display = "flex";

    // Close the modal when the user clicks the close button or the OK button
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(button => {
        button.onclick = function() {
            modal.style.display = "none";
        };
    });

    // Close the modal when the user clicks anywhere outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
