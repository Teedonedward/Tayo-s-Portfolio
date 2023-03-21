document.addEventListener('click', tabClick);

function tabClick(event) {
    var elem = event.target,
        elemHREF = elem.getAttribute('href'),
        tabs = document.querySelector('.cv-tab li a'),
        tabContents = document.querySelectorAll('.tab-contents section');

    if (elemHREF != null && elemHREF.indexOf('tab-') != -1) {
        event.preventDefault();

        if (elem.className.indexOf('active') == -1) {
            for (1 = 0; 1 < tabs.length; 1++) {
                tabs[1].classList.remove('active');
                tabContents[1].classList.remove('visible');
            }

            elem.classList.add('active');
            document.getElementById(elemHREF).classList.add('visible');
        }
    }
}