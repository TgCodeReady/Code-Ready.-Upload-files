const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');

// Drag and drop event listeners
dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('dragover');
});

dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dropArea.classList.remove('dragover');
  fileInput.files = event.dataTransfer.files;
  handleFileSelect();
});

// File input event listener
fileInput.addEventListener('change', handleFileSelect);

// Handle file selection and display preview
function handleFileSelect() {
  const file = fileInput.files[0];
  if (file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (event) => {
      preview.innerHTML = `<img src="${event.target.result}" alt="${file.name}">`;
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please select an image file.');
  }
}

// Trigger file input click event when drop area is clicked
dropArea.addEventListener('click', () => {
  fileInput.click();
});