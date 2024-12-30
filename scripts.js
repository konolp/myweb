document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const images = gallery.getElementsByTagName('img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zIndex = '1000';

            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            modalImg.style.borderRadius = '8px';

            modal.appendChild(modalImg);
            document.body.appendChild(modal);

            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
    });
});