function signIn(event) {
    event.preventDefault(); // Prevent form submission

    // Reset error message
    document.getElementById('signin-error').textContent = '';

    // Retrieve username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform basic validation (you can add more advanced validation as needed)
    if (!username || !password) {
        document.getElementById('signin-error').textContent = 'Username and password are required';
        return;
    }

    // Here, you can perform further actions such as sending a request to a server for authentication
    // For now, let's just display an alert indicating successful sign-in
    alert('Sign in successful!');
}
