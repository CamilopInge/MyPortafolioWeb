document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    };

    const goTopButton = document.getElementById("goTopButton");
    if (goTopButton) {
        goTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const textElement = document.getElementById('typed-text');
        const text1 = "Hi! I'm ";
        const text2 = "Camilo.";
        let index = 0;
    
        function type() {
            if (index < text1.length) {
                textElement.innerHTML += '<span style="color: #ffffff;">' + text1.charAt(index) + '</span>';
            } else if (index < text1.length + text2.length) {
                textElement.innerHTML += '<span style="color: #9340ff;">' + text2.charAt(index - text1.length) + '</span>';
            }
            index++;
            if (index < text1.length + text2.length) {
                setTimeout(type, 80); 
            }
        }
    
        type();
    });

    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typed-text');
    const text1 = "Hi! I'm ";
    const text2 = "Camilo.";
    let index = 0;

    function type() {
        if (index < text1.length) {
            textElement.innerHTML += '<span style="color: #ffffff;">' + text1.charAt(index) + '</span>';
        } else if (index < text1.length + text2.length) {
            textElement.innerHTML += '<span style="color: #9340ff;">' + text2.charAt(index - text1.length) + '</span>';
        }
        index++;
        if (index < text1.length + text2.length) {
            setTimeout(type, 80); 
        }
    }

    type();
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        const button = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');
        const icon = dropdown.querySelector('.icon');

        button.addEventListener('click', function () {
            dropdowns.forEach(function (otherDropdown) {
                if (otherDropdown !== dropdown && otherDropdown.classList.contains('open')) {
                    otherDropdown.classList.remove('open');
                    otherDropdown.querySelector('.icon').innerHTML = '+';
                }
            });
            dropdown.classList.toggle('open');
            icon.innerHTML = dropdown.classList.contains('open') ? '-' : '+';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-filter");

            projects.forEach(project => {
                const projectCategory = project.getAttribute("data-category");
                if (category === "all" || category === projectCategory) {
                    project.removeAttribute('hidden');
                } else {
                    project.setAttribute('hidden', true);
                }
            });
        });
    });
});

function copyToClipboard(elementId) {
    var text = document.getElementById(elementId).innerText;
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([4.635139308111235, -74.19632999960747], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors'
    }).addTo(map);
    var marker = L.marker([4.635139308111235, -74.19632999960747]).addTo(map)
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        let messageBody = "";
        formData.forEach(function (value, key) {
            messageBody += key.charAt(0).toUpperCase() + key.slice(1) + ": " + value + "\n";
        });
        window.location.href = "mailto:Brayan93j.k@gmail.com?subject=" + encodeURIComponent(formData.get("subject")) + "&body=" + encodeURIComponent(messageBody);
    });
});







