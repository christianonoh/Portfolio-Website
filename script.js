// Form handling with notification
const form = document.getElementById('contact-form');
const toast = document.getElementById('toast');

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const formData = new FormData(form);
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      // Show toast notification
      toast.classList.add('show');
      
      // Clear only the message field
      form.elements.message.value = '';
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    alert('Sorry, there was a problem sending your message. Please try again.');
  }
});
