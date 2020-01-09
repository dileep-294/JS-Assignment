

const app = document.createElement('div');
app.setAttribute('id', 'root');
document.body.appendChild(app);
function Loadmore() {
    var request = new XMLHttpRequest();
    url = 'https://randomuser.me/api/?results=100';
    request.open('GET', url, true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        var data2 = data['results']
        console.log(data2)
        for (var i = 0; i < data2.length; i++) {
            const container = document.createElement('div');
            container.setAttribute('class', 'container');
            var avatar=addImage(data2[i].picture.large)
            var fullName=addName(data2[i].name.last,data2[i].name.first,data2[i].name.title)
            var email = addEmail(data2[i].email)
            container.appendChild(avatar);
            container.appendChild(fullName);
            container.appendChild(email);
            app.appendChild(container);

        }
    }
    request.send();
}

window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.onload();
    }
}
addImage=function(avatar){
    const logo = document.createElement('img');
     logo.src = avatar;
     logo.setAttribute('class','logo');
    return logo;
}
addName=function(first_name,last_name,title){
    const spanE=document.createElement('div');
    spanE.innerText=title+"."+" "+first_name+ " "+last_name;
    spanE.setAttribute('class','spanE');
    return spanE;
}
addEmail=function(email){
    const spanE1=document.createElement('div');
    spanE1.innerText=email;
    spanE1.setAttribute('class','spanE');
    return spanE1;
}

    module.exports={addImage,addName}
