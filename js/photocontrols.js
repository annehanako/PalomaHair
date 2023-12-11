  let currentPhoto = 1;
        const totalPhotos = 4;

        function showPhoto(photoNumber) {
            document.getElementById('images').style.transform = `translateX(${-100 * (photoNumber - 1)}%)`;
        }

        function nextPhoto() {
            currentPhoto = (currentPhoto % totalPhotos) + 1;
            showPhoto(currentPhoto);
        }

        function prevPhoto() {
            currentPhoto = (currentPhoto - 2 + totalPhotos) % totalPhotos + 1;
            showPhoto(currentPhoto);
        }