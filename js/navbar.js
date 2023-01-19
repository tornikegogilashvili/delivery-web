let navtext = ["Home", "About Us", "Services", "Contact Us"];
let navlinks = ["index.html", "aboutus.html", "services.html", "contactus.html"];
let ul = "<ul>";
for(let i=0; i<navtext.length;i++){
    ul+="<li><a href="+navlinks[i]+">"+navtext[i]+"</a></li>";
}
ul+="</ul>";

document.getElementById("nav").innerHTML=ul;
