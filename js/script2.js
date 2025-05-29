const people = {
  hobby: "images/billiardskmw.jpg",
  ball: "images/billiardballkmw.jpg",
  color: "images/blackkmw.jpg",
  season: "images/seasonkmw.jpg",
  character: "images/characterkmw.webp",
  dessert: "images/dessertkmw.jpg",
  food: "images/adobokmw.jpg",
  place: "images/placekmw.jpg",
  timeoftheday: "images/timeoftheday.jpg"
};

document.querySelectorAll('.kmw-box').forEach(box => {
  const key = box.getAttribute('data-person');
  const displayName = box.textContent;
  box.innerHTML = `<span class="kmw-name">${displayName}</span>`;

  box.addEventListener('click', function () {
    box.classList.add('clicked');
    setTimeout(() => box.classList.remove('clicked'), 120);

    const currentContent = box.firstChild;
    if (currentContent) {
      currentContent.classList.add('kmw-fade-out');
      setTimeout(() => {
        if (!box.classList.contains('revealed') && people[key]) {
          box.classList.add('revealed');
          box.innerHTML = `<img src="${people[key]}" alt="${key}'s photo" class="kmw-photo kmw-fade-in" />`;
        } else if (box.classList.contains('revealed')) {
          box.classList.remove('revealed');
          box.innerHTML = `<span class="kmw-name kmw-fade-in">${displayName}</span>`;
        }
      }, 270); // Slightly less than animation duration for smoother transition
    }
  });
});