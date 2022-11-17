//-----------index.html
function change(){
    console.log(document.getElementById("element").innerHTML); 
    if(document.getElementById("element").innerHTML=='<i class="fa-solid fa-toggle-off" onclick="change()"></i>'){
        document.getElementById("element").innerHTML='<i class="fa-solid fa-toggle-on" onclick="change()"></i>';
        document.getElementById("body").style.backgroundColor="#000000";
        document.getElementById("logo_a").style.color="#F5F5F5";
        document.getElementById("element").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a1").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a2").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a3").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a4").style.color="#F5F5F5";
        document.getElementById("section_satauri").style.color="#F5F5F5";
    }else{
        document.getElementById("element").innerHTML='<i class="fa-solid fa-toggle-off" onclick="change()"></i>'
        document.getElementById("body").style.backgroundColor="#F5F5F5";
        document.getElementById("logo_a").style.color="#000000";
        document.getElementById("element").style.color="#000000";
        document.getElementById("nav_ul_li_a1").style.color="#000000";
        document.getElementById("nav_ul_li_a2").style.color="#000000";
        document.getElementById("nav_ul_li_a3").style.color="#000000";
        document.getElementById("nav_ul_li_a4").style.color="#000000";
        document.getElementById("section_satauri").style.color="#000000";
    }
}

//-----------------aboutus.html
function change1(){
    console.log(document.getElementById("element1").innerHTML);
    if(document.getElementById("element1").innerHTML=='<i class="fa-solid fa-toggle-off" onclick="change1()"></i>'){
        document.getElementById("element1").innerHTML='<i class="fa-solid fa-toggle-on" onclick="change1()"></i>';
        document.getElementById("body1").style.backgroundColor="#000000";
        document.getElementById("logo_a1").style.color="#F5F5F5";
        document.getElementById("element1").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a1_1").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a2_2").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a3_3").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a4_4").style.color="#F5F5F5";
        document.getElementById("section_satauri_1").style.color="#F5F5F5";
        document.getElementById("section_satauri_2").style.color="#F5F5F5";
    }else{
        document.getElementById("element1").innerHTML='<i class="fa-solid fa-toggle-off" onclick="change1()"></i>';
        document.getElementById("body1").style.backgroundColor="#F5F5F5";
        document.getElementById("logo_a1").style.color="#000000";
        document.getElementById("element1").style.color="#000000";
        document.getElementById("nav_ul_li_a1_1").style.color="#000000";
        document.getElementById("nav_ul_li_a2_2").style.color="#000000";
        document.getElementById("nav_ul_li_a3_3").style.color="#000000";
        document.getElementById("nav_ul_li_a4_4").style.color="#000000";
        document.getElementById("section_satauri_1").style.color="#000000";
        document.getElementById("section_satauri_2").style.color="#000000";
    }

}
//----------services.html
function change2(){
    console.log(document.getElementById("element2").innerHTML);
    if(document.getElementById("element2").innerHTML=='<i class="fa-solid fa-toggle-off" onclick="change2()"></i>'){
        document.getElementById("element2").innerHTML='<i class="fa-solid fa-toggle-on" onclick="change2()"></i>';
        document.getElementById("body2").style.backgroundColor="#F5F5F5";
        document.getElementById("logo_a2").style.color="#000000";
        document.getElementById("nav_ul_li_a1_11").style.color="#000000";
        document.getElementById("nav_ul_li_a2_22").style.color="#000000";
        document.getElementById("nav_ul_li_a3_33").style.color="#000000";
        document.getElementById("nav_ul_li_a4_44").style.color="#000000";
        document.getElementById("section_satauri11").style.color="#000000";
        document.getElementById("element2").style.color="#000000";
    }else{
        document.getElementById("element2").innerHTML='<i class="fa-solid fa-toggle-off" onclick="change2()"></i>';
        document.getElementById("body2").style.backgroundColor="#000000";
        document.getElementById("logo_a2").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a1_11").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a2_22").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a3_33").style.color="#F5F5F5";
        document.getElementById("nav_ul_li_a4_44").style.color="#F5F5F5";
        document.getElementById("section_satauri11").style.color="#F5F5F5";
        document.getElementById("element2").style.color="#F5F5F5";
    }
}
