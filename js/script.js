function change(){
    // console.log(document.getElementById("element").innerHTML);
    if(document.getElementById("element").innerHTML=='<i class="fa-solid fa-toggle-off" onclick="change()"></i>'){
        document.getElementById("element").innerHTML='<i class="fa-solid fa-toggle-on" onclick="change()"></i>'
        document.getElementById("body").style.backgroundColor="#000000";
        document.getElementById("logo_a").style.color="#F5F5F5";
        document.getElementById("element").style.color="#ffffff";
        document.getElementById("nav_ul_li_a1").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a2").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a3").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a4").style.color="#F5F5F5";
        document.getElementById("section-satauri").style.color="#F5F5F5";
    }else{
        document.getElementById("element").innerHTML='<i class="fa-solid fa-toggle-off" onclick="change()"></i>'
        document.getElementById("body").style.backgroundColor="#F5F5F5";
        document.getElementById("logo_a").style.color="#000000";
        document.getElementById("element").style.color="#000000";
        document.getElementById("nav_ul_li_a1").style.color="#000000";
        document.getElementById("nav_ul_li_a2").style.color="#000000";
        document.getElementById("nav_ul_li_a3").style.color="#000000";
        document.getElementById("nav_ul_li_a4").style.color="#000000";
        document.getElementById("section-satauri").style.color="#000000";
    }
}