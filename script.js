let currentPhotoIndex = 0;
        const photos = document.querySelectorAll('.photo-container img');

        function showPhoto(index) {
            photos.forEach((photo, i) => {
                photo.classList.toggle('active', i === index);
            });
        }

        function nextPhoto() {
            currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
            showPhoto(currentPhotoIndex);
        }

        function prevPhoto() {
            currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
            showPhoto(currentPhotoIndex);
        }

document.querySelectorAll('.skills-grid .skill-item img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.2)';
            img.style.transition = 'transform 0.3s';
    });
        
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});
        