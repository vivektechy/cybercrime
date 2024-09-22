document.addEventListener("DOMContentLoaded", function() {
    // Handle call-to-action button click
    const ctaBtn = document.getElementById('cta-btn');
    ctaBtn.addEventListener('click', () => {
      window.scrollTo({
        top: document.getElementById('features').offsetTop,
        behavior: 'smooth'
      });
    });
  
    // File upload interaction
    const fileUpload = document.getElementById('file-upload');
    const fileNameDisplay = document.getElementById('file-name');
    const processBtn = document.getElementById('process-btn');
  
    fileUpload.addEventListener('change', (event) => {
      const fileName = event.target.files[0].name;
      fileNameDisplay.textContent = `Selected file: ${fileName}`;
      processBtn.disabled = false;
    });
  
    // Process button interaction
    processBtn.addEventListener('click', () => {
      addToLog('File processed successfully');
      document.getElementById('download-btn').disabled = false;
    });
  
    // Activity log
    function addToLog(message) {
      const logList = document.getElementById('log-list');
      const logEntry = document.createElement('li');
      logEntry.textContent = message;
      logList.appendChild(logEntry);
    }
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  