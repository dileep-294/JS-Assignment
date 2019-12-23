
addPerson = function (fname,lname,img,ntitle) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    if (img) {
        const logo = document.createElement('img');
        logo.src = img;
        logo.setAttribute('class', 'logo');
        container.appendChild(logo);
    }
    if (fname && lname && ntitle) {
        const spanE = document.createElement('div');
        spanE.innerText = ntitle+ "." + " " + fname + " " + lname;
        spanE.setAttribute('class', 'spanE');
        container.appendChild(spanE);
    }
    
        app.appendChild(container);
    }
