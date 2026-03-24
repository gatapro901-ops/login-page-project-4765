
      // Get all input elements
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirm-password');
      const loginButton = document.getElementById('login-button');

      // Add event listener to login button
      loginButton.addEventListener('click', () => {
         // Get input values
         const email = emailInput.value.trim();
         const password = passwordInput.value.trim();
         const confirmPassword = confirmPasswordInput.value.trim();

         // Validate input values
         if (email === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields');
            return;
         }

         if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
         }

         // Login logic here
         console.log('Login successful');
      });

      // Animation on page load
      window.addEventListener('load', () => {
         // Get all elements with animation class
         const animatedElements = document.querySelectorAll('.animate');

         // Add animation to each element
         animatedElements.forEach((element) => {
            element.classList.add('animate-in');
         });
      });

      // Animation on input focus
      const inputs = document.querySelectorAll('input');

      inputs.forEach((input) => {
         input.addEventListener('focus', () => {
            input.classList.add('focus');
         });

         input.addEventListener('blur', () => {
            input.classList.remove('focus');
         });
      });
   