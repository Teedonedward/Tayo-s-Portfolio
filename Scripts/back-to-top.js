var btt = document.getElementById("back-to-top"),
    body = document.body,
    docElem =document.documentElement,
    offset = 100,
    scrollPos, docHeight,
    isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

    docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
    if ( docHeight != 'undefined') {
        offset = docHeight / 4;
    }

    window.addEventListener('scroll', function(event) {
        scrollPos = body.scrollTop || docElem.scrollTop;

        btt.className = (scrollTop > offset) ? "visible" : "";
    });

    btt.addEventListener('click', function(event) {
        event.preventDefault();
    
        if (isFirefox) {
            docElem.scrollTop = 0;
        } else {
            body.scrollTop = 0;
        }
    })