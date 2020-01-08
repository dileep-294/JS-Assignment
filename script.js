

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
            var x=addImage(data2[i].picture.large)
            var y=addName(data2[i].name.last,data2[i].name.first,data2[i].name.title)
            container.appendChild(x);
            container.appendChild(y);
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
addImage=function(img_data){
    const logo = document.createElement('img');
     logo.src = img_data;
     logo.setAttribute('class','logo');
    return logo;
}
addName=function(f,l,t){
    const spanE=document.createElement('div');
    spanE.innerText=t+"."+" "+f+ " "+l;
    spanE.setAttribute('class','spanE');
    return spanE;
}

    module.exports={addImage,addName}
