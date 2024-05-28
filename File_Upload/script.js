const dropZone = document.querySelector('.drop-zone');
const fileInput = document.querySelector('.file-input');
const previewContainer = document.querySelector('.preview-container');
const noFiles = document.querySelector('.no-files');
dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropZone.style.borderColor = '#4caf50';
});
dropZone.addEventListener('dragleave', () => {
    dropZone.style.borderColor = '#ccc';
});
dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropZone.style.borderColor = '#ccc';
    fileInput.files = event.dataTransfer.files;
    displayPreview();
});
dropZone.addEventListener('click', () => {
    fileInput.click();
});
fileInput.addEventListener('change', () => {
    displayPreview();
});
function displayPreview() {
    previewContainer.innerHTML = '';
    noFiles.style.display = 'none';

    if (fileInput.files.length > 0) {
        Array.from(fileInput.files).forEach((file) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                const img = document.createElement('img');
                img.src = event.target.result;
                img.classList.add('preview-img');
                previewContainer.appendChild(img);
            };
            if (file.type.startsWith('image/')) {
                reader.readAsDataURL(file);
            }
        });
    } else {
        noFiles.style.display = 'block';
    }
}