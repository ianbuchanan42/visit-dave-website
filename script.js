document.addEventListener('DOMContentLoaded', () => {
  // Set the launch date - adjust this to your actual launch date
  // Format: Year, Month (0-11), Day, Hour, Minute, Second
  const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now

  // Update countdown every second
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(
      2,
      '0'
    );
    document.getElementById('minutes').textContent = String(minutes).padStart(
      2,
      '0'
    );
    document.getElementById('seconds').textContent = String(seconds).padStart(
      2,
      '0'
    );

    // If the countdown is over
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
    }
  }, 1000);

  // Handle the notify form submission
  const form = document.getElementById('notify-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    // Here you would typically send the email to your backend
    // For now, just show a success message
    alert(`Thank you! We'll notify ${email} when we launch.`);

    // Reset the form
    form.reset();
  });
});
