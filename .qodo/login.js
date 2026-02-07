// Buy@Me Login Page JS

// Example: Submit handler (prevent real submission, demo only)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // You can add AJAX call/auth logic here
      alert('This is a demo login. Connect your backend for real authentication.');
    });
  }
});