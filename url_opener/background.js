document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openUrlsButton').addEventListener('click', function() {
      const fileInput = document.getElementById('fileInput');
      const file = fileInput.files[0];
      if (!file) {
        alert('Please select a file.');
        return;
      }
  
      const reader = new FileReader();
      reader.onload = function(event) {
        const urls = event.target.result.split('\n');
        urls.forEach(url => {
          chrome.tabs.create({ url: url.trim() });
        });
      };
      reader.readAsText(file);
    });
  });
  