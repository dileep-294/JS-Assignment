
create_UI=function(arr){
    for(var i=0;i<arr.length;i++){
        const localdata=arr[i];
        UI.addPerson(localdata);
    }

}
UI={};
UI.addPerson=function(localdata){
    const container=document.createElement('div');
    container.setAttribute('class','container');
    if(localdata.picture.large){
        const logo=document.createElement('img');
        logo.src=localdata.picture.large;
        logo.setAttribute('class','logo');
        container.appendChild(logo);
    }
    if(localdata.name.title && localdata.name.last && localdata.name.title){
        const spanE=document.createElement('div');
        spanE.innerText=localdata.name.title+"."+" "+localdata.name.first+" "+localdata.name.last;
        spanE.setAttribute('class','spanE');
        container.appendChild(spanE);
    }
    if(localdata.email && localdata.cell){
        const spane1=document.createElement('div');
        spane1.innerText=localdata.email;
        spane1.setAttribute('class','spanE1');
        const spane2=document.createElement('div');
        spane2.innerText=localdata.cell;
        spane2.setAttribute('class','spanE1')
        container.appendChild(spane1);
        container.appendChild(spane2);
    }
    if(localdata.location.city && localdata.location.state && localdata.location.country){
        const cityi=document.createElement('div');
        cityi.innerText=localdata.location.city;
        cityi.setAttribute('class','spanE1');
        const statei=document.createElement('div');
        statei.innerText=localdata.location.state;
        statei.setAttribute('class','spanE1');
        const countryi=document.createElement('div');
        countryi.innerText=localdata.location.country;
        countryi.setAttribute('class','spanE1');
        container.appendChild(cityi);
        container.appendChild(statei);
        container.appendChild(countryi);
    }
    app.appendChild(container);
}