
const expertiseData = {
  webdev: {
    title: "Web Development",
    description: "I create modern, responsive websites using HTML, CSS, and JavaScript. My focus is on clean, accessible interfaces and efficient code practices.",
    photos: [
      "images/hoa10.png",
      "images/testing (1).png",
      "images/orm.png"
    ]
  },
  python: {
    title: "Python Programming",
    description: "I make Programming Games using Python Languages. I also know when to use OOP Design Principles and how to have a good code structure.",
    photos: [
      "images/python1.png",
      "images/python2.png"
    ]
  },
  automation: {
    title: "Automation",
    description: "I automate repetitive tasks using Python, helping to save time and reduce errors in workflows.",
    photos: [
      "images/auto.png"
    ]
  }
};

const eduData = {
  elementary: {
    title: "Elementary",
    name: "Salinas Elementary School",
    image: "images/elem.jpg",
    description: "My foundational years where I developed a love for learning and curiosity about technology."
  },
  highschool: {
    title: "High School",
    name: "City of Bacoor National High School",
    image: "images/hs.jpg",
    description: "I explored various interests, tried to joined tech clubs, and started coding during my high school years."
  },
  seniorhs: {
    title: "Senior High School",
    name: "Senior High School Dulong Bayan",
    image: "images/shs.jpg",
    description: "Focused on Gas track, deepened my knowledge in science, math, and language."
  },
  college: {
    title: "College",
    name: "Technological University of the Philippines - Cavite Campus",
    image: "images/college.jpg",
    description: "Currently pursuing my BTVTED-CP degree, collaborating on projects, and building this portfolio."
  }
};

// --- Modal Handling ---
const expertiseBtns = document.querySelectorAll('.expertise-btn');
const expertiseModal = document.getElementById('expertise-modal');
const expertiseTitle = document.getElementById('expertise-title');
const expertiseDesc = document.getElementById('expertise-description');
const expertisePhotos = document.getElementById('expertise-photos');
const closeExpertise = document.getElementById('closeExpertise');

// Zoom Modal Elements (for image zoom)
let zoomModal, zoomImg, closeZoom;

// Create zoom modal HTML on page load
function createZoomModal() {
  zoomModal = document.createElement('div');
  zoomModal.id = "zoom-modal";
  zoomModal.className = "modal hidden";
  zoomModal.innerHTML = `
    <div class="zoom-modal-content">
      <span class="close-btn" id="closeZoom">&times;</span>
      <img id="zoom-img" src="" alt="Zoomed Image" />
    </div>
  `;
  document.body.appendChild(zoomModal);
  zoomImg = document.getElementById('zoom-img');
  closeZoom = document.getElementById('closeZoom');

  // Hide modal handlers
  closeZoom.addEventListener('click', () => {
    zoomModal.classList.add('hidden');
    zoomImg.src = '';
  });
  window.addEventListener('click', (e) => {
    if (e.target === zoomModal) {
      zoomModal.classList.add('hidden');
      zoomImg.src = '';
    }
  });
}
createZoomModal();

expertiseBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const exp = btn.getAttribute('data-expertise');
    const data = expertiseData[exp];
    if (data) {
      expertiseTitle.textContent = data.title;
      expertiseDesc.textContent = data.description;
      expertisePhotos.innerHTML = '';
      data.photos.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = data.title;
        img.classList.add('zoomable-photo');
        img.style.cursor = "zoom-in";
        img.addEventListener('click', () => {
          zoomImg.src = src;
          zoomModal.classList.remove('hidden');
        });
        expertisePhotos.appendChild(img);
      });
      expertiseModal.classList.remove('hidden');
    }
  });
});

if (closeExpertise && expertiseModal) {
  closeExpertise.addEventListener('click', () => {
    expertiseModal.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === expertiseModal) expertiseModal.classList.add('hidden');
  });
}
// --- Education Modal Handling ---
const eduBtn = document.getElementById('education-btn');
const eduOptions = document.getElementById('education-options');
const eduModal = document.getElementById('education-modal');
const closeEducation = document.getElementById('closeEducation');
const eduTitle = document.getElementById('edu-title');
const eduImage = document.getElementById('edu-image');
const eduDescription = document.getElementById('edu-description');
const eduBtns = document.getElementsByClassName('edu-btn');

eduBtn.addEventListener('click', () => {
  eduOptions.classList.toggle('hidden');
});

Array.from(eduBtns).forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-edu');
    const data = eduData[key];
    if (data) {
      eduTitle.textContent = `${data.title} - ${data.name}`;
      eduImage.src = data.image;
      eduImage.alt = data.name;
      eduDescription.textContent = data.description;
      eduModal.classList.remove('hidden');
    }
  });
});

closeEducation.addEventListener('click', () => {
  eduModal.classList.add('hidden');
});
window.addEventListener('click', (e) => {
  if (e.target === eduModal) eduModal.classList.add('hidden');
});

