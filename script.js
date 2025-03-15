let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function highlightActiveLink() {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({behavior: 'smooth'});

        // updates the active class when scrolled through each sections
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// add click event listener for the home link to scroll to the top
document.querySelector('header nav a[href*="home"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onscroll = highlightActiveLink;
