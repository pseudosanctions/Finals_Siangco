document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('activity-modal');
  const modalActivities = document.getElementById('modal-activities');
  let zoomedImg = null;
  let originalParent = null;
  let originalNext = null;
  let overlay = null;

  modalActivities.addEventListener('click', function (e) {
    const img = e.target.closest('.activity-card img');
    if (!img) return;

    // If already zoomed, unzoom
    if (img.classList.contains('zoomed-img')) {
      unzoomImage();
      return;
    }
    // Zoom in
    zoomImage(img);
  });

  // ESC to unzoom
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && zoomedImg) unzoomImage();
  });

  // Helper: Zoom in
  function zoomImage(img) {
    zoomedImg = img;
    img.classList.add('zoomed-img');
    // Save where to restore the image
    originalParent = img.parentNode;
    originalNext = img.nextSibling;

    // Overlay
    overlay = document.createElement('div');
    overlay.className = 'zoom-overlay';
    overlay.style.position = 'fixed';
    overlay.style.left = '0';
    overlay.style.top = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(20,20,30,0.96)';
    overlay.style.zIndex = '3000';
    overlay.style.cursor = 'zoom-out';
    overlay.style.transition = 'opacity 0.2s';
    overlay.id = 'zoom-overlay';

    overlay.addEventListener('click', unzoomImage);

    // Move image to modal root so it can be absolutely positioned
    modal.appendChild(overlay);
    modal.appendChild(img);

    // Style the image fullscreen
    Object.assign(img.style, {
      position: 'fixed',
      left: '0',
      top: '0',
      width: '100vw',
      height: '100vh',
      objectFit: 'contain',
      zIndex: '3001',
      background: '#181818',
      borderRadius: '0',
      boxShadow: '0 0 40px #000a',
      transition: 'all 0.32s cubic-bezier(.22,1,.36,1.02)',
      cursor: 'zoom-out'
    });
  }

  // Helper: Unzoom
  function unzoomImage() {
    if (!zoomedImg) return;
    zoomedImg.classList.remove('zoomed-img');
    // Remove overlay
    if (overlay) {
      overlay.remove();
      overlay = null;
    }
    // Restore image to original place and style
    if (originalNext && originalNext.parentNode === originalParent) {
      originalParent.insertBefore(zoomedImg, originalNext);
    } else {
      originalParent.appendChild(zoomedImg);
    }
    zoomedImg.removeAttribute('style');
    zoomedImg.style.cursor = '';
    zoomedImg = null;
  }
});