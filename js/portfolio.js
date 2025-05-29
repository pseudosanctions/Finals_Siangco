document.addEventListener('DOMContentLoaded', function() {
  const activities = {
    online: [
      { title: "PT Dare Event", img: "images/ptgad.jpg" },
      { title: "PT BOTBAND Event", img: "images/ptbob.jpg" },
      { title: "Student Profile", img: "images/studentprofile.jpg" },
      { title: "COR", img: "images/cor.jpg" },
      { title: "CU3 Reporting Rating", img: "images/cu3reporting.jpg" },
      { title: "Preliminary HoA#3", img: "images/prelimhoa3.jpg" },
      { title: "CU4 Reporting Rating", img: "images/cu4rep.jpg" },
      { title: "Preliminary HoA#4", img: "images/prelimhoa4.jpg" },
      { title: "Preliminary HoA#5", img: "images/prelimhoa5.jpg" },
      { title: "CU6 Reporting Rating", img: "images/cu6rep.jpg" },
      { title: "Preliminary HoA#6", img: "images/prelimhoa6.jpg" },
      { title: "CU7 Pre-Test", img: "images/cu7pr.jpg" },
      { title: "CU7 Post-Test", img: "images/cu7pos.jpg" },
      { title: "CU7 Reporting Rating", img: "images/cu7rep.jpg" },
      { title: "PT GAD Event", img: "images/ptgad.jpg" },
      { title: "CU8 Reporting Rating", img: "images/cu8rep.jpg" },
      { title: "CU9 Reporting Rating", img: "images/cu9rep.jpg" },
      { title: "100 QA Midterms Reviewer P1", img: "images/midtermreview.jpg" },
      { title: "100 QA Midterms Reviewer P2", img: "images/midtermsreviewp2.jpg" },
      { title: "CU 10 Reporting Rating", img: "images/cu10rep.jpg" },
      { title: "CU 11 Reporting Rating", img: "images/cu11rep.jpg" },
      { title: "CU 12 Reporting Rating", img: "images/cu12rep.jpg" },
      { title: "CU 13 Reporting Rating", img: "images/cu13rep.jpg" },
      { title: "Progress Report", img: "images/progrep.jpg" }
    ],
    onsite: [
      { title: "CU4 Pre-Test", img: "images/cu4pr.jpg" },
      { title: "CU4 Post-Test", img: "images/cu4post.jpg" },
      { title: "CU5 Pre-Test 1", img: "images/cu5pre1.jpg" },
      { title: "CU5 Post-Test 1", img: "images/cu5pos1.jpg" },
      { title: "CU5 Pre-Test 2", img: "images/cu5pre2.jpg" },
      { title: "CU5 Post-Test 2", img: "images/cu5pos2.jpg" },
      { title: "PT 2", img: "images/pt2.jpg" },
      { title: "PT 4", img: "images/pt4.jpg" },
      { title: "W5-D1-PT", img: "images/w5d1pt.jpg" },
      { title: "W5-D2", img: "images/w5d2.jpg" },
      { title: "CU6 Pre-Test & Post-Test", img: "images/cu6prenpost.jpg" },
      { title: "W7-D1-PT1", img: "images/w7d1pt1.jpg" },
      { title: "W8-D2-PR", img: "images/w8d2pr.jpg" },
      { title: "W8-D2-PO", img: "images/w8d2po.jpg" },
      { title: "CU8 Pre-Test", img: "images/cu8pr.jpg" },
      { title: "CU8 Post-Test", img: "images/cu8pos.jpg" },
      { title: "CU9 Pre-Test2", img: "images/cu9pr.jpg" },
      { title: "CU9 Post-Test 1", img: "images/cu9pos.jpg" },
      { title: "CU9 Post-Test 2", img: "images/cu9pos2.jpg" },
      { title: "W9-PR", img: "images/w9pr.jpg" },
      { title: "W9-PO", img: "images/w9pos.jpg" },
      { title: "CU10 Pre-Test", img: "images/cu10pr.jpg" },
      { title: "CU10 Post-Test", img: "images/cu10pos.jpg" },
      { title: "CU12 Pre-Test", img: "images/cu12pr.jpg" },
      { title: "CU12 Post-Test", img: "images/cu12pos.jpg" },
      { title: "CU13 Pre-Test & Post-Test", img: "images/cu13prnpos.jpg" },
      { title: "W17-PT", img: "images/w17pt.jpg" },
      { title: "WireFraming 1 (Home) Box, Semi-Detailed, Detailed", img: "images/wireframing2.jpg" },
      { title: "WireFraming 2 (About) Box", img: "images/wireframing5.jpg" },
      { title: "Wireframing 3 (About) Semi-Detailed, Detailed", img: "images/wireframing4.jpg" },
      { title: "Wireframing 4 (Portfolio) Semi-Detailed, Box", img: "images/wireframing3.jpg" },
      { title: "Wireframing 5 (ORM Table and KnowMeWell) Box, Detailed", img: "images/wireframing1.jpg" },
      { title: "Wireframing 6 (ORM Table and KnowMeWell) Semi-Detailed", img: "images/wireframing6.jpg" },
      { title: "Preliminary HoA#3 Written", img: "images/hoa3written.jpg" },
      { title: "Preliminary HoA#6 Printed", img: "images/prelim hoa6.jpg" }
    ],
    unitoutput: [
      { title: "Unit Output 1", img: "images/uo1.jpg" },
      { title: "Unit Output 2", img: "images/uo2.jpg" },
      { title: "Unit Output 3", img: "images/uo3.jpg" },
      { title: "Unit Output 4", img: "images/uo4.jpg" },
      { title: "Unit Output 5", img: "images/uo5.jpg" },
      { title: "Unit Output 6", img: "images/uo6.jpg" },
      { title: "Unit Output 7", img: "images/uo7.jpg" },
      { title: "Unit Output 8", img: "images/uo8.jpg" },
      { title: "Unit Output 9", img: "images/uo9.jpg" },
      { title: "Unit Output 10", img: "images/uo10.jpg" }
    ],
    examinations: [
      { title: "Prelims", img: "images/prelimsexams.jpg" },
      { title: "Midterms", img: "images/midtermsexams.jpg" },
      { title: "Midterms/20 Items", img: "images/20items.jpg" }
    ],
    hoa: [
      { title: "Hands On Activity #1", img: "images/hoa1.jpg" },
      { title: "Hands On Activity #2", img: "images/hoa2.jpg" },
      { title: "Hands On Activity #3", img: "images/hoa3.jpg" },
      { title: "Hands On Activity #4", img: "images/hoa4.jpg" },
      { title: "Hands On Activity #5", img: "images/hoa5.jpg" },
      { title: "Hands On Activity #6", img: "images/hoa6.jpg" },
      { title: "Hands On Activity #7", img: "images/hoa7.jpg" },
      { title: "Hands On Activity #8", img: "images/hoa8.jpg" },
      { title: "Hands On Activity #9", img: "images/hoa9.jpg" },
      { title: "Hand On Activity #10", img: "images/hoa10.jpg" }
    ]
  };

  // Modal DOM
  const modal = document.getElementById('activity-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalActivities = document.getElementById('modal-activities');

  // Prevent modal closing on content click
  document.querySelector('.activity-modal-content').addEventListener('click', function(e) {
    e.stopPropagation();
  });

  // Open modal on category click
  document.querySelectorAll('.portfolio-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      showModal(cat);
    });
  });

  function showModal(category) {
    const titles = {
      online: "Participation Online",
      onsite: "Participation Onsite",
      unitoutput: "Unit Output",
      examinations: "Examinations",
      hoa: "Hands-on Activities (HoA)"
    };
    modalTitle.textContent = titles[category] || "";
    modalActivities.innerHTML = activities[category].map((a, i) => `
      <div class="activity-card" tabindex="0">
        <img src="${a.img}" alt="${a.title}">
        <span>${a.title}</span>
      </div>
    `).join('');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
});