const app=document.getElementById("root");

function Loadmore(){
var request=new XMLHttpRequest();
url = 'https://randomuser.me/api/?results=100';
request.open('GET',url,true);
request.onload=function(){
    var data=JSON.parse(this.response);
    var data2=data['results']
    create_UI(data2);
} 
request.send();  
}
window.onscroll=function(){
    if((window.innerHeight+window.scrollY)>=document.body.offsetHeight){
        this.onload();
    }
}