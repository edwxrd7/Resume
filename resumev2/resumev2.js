/*Makes the nav work */
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
    });
});

// Color change when link is clicked
const links = document.querySelectorAll(".link");

links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
        links.forEach(function (otherLink) {
            otherLink.classList.remove("clicked"); // Remove the "clicked" class from other links
        });
        link.classList.add("clicked"); // Add the "clicked" class to the clicked link
    });
});

// Border Shadow Colors
const shadowColor = {
    '#me': 'glowing-borders',
    '#jobs': 'glowing-borders-v2',
    '#contact': 'glowing-borders-v3'
};

// JavaScript to change color on link click
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        const targetUrl = this.getAttribute('href');
        console.log(targetUrl);
        const sColor = shadowColor[targetUrl];

        if (sColor) {
            document.getElementById('glow').setAttribute('class', sColor);
        }

    });
});