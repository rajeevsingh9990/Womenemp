function showSection(sectionId) {
    let sections = document.querySelectorAll('.topic-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
}
