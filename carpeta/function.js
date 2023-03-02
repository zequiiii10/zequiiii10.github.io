
let btn_mas_info = document.getElementById('btn_mas_info');
let span_text = document.getElementById('span_text');
let btn_menos_info = document.getElementById('btn_menos_info');

btn_mas_info.addEventListener("click",masinfo)

function masinfo(){
    span_text.classList.add("mostrar");
    btn_mas_info.classList.add("ocultar");
}

btn_menos_info.addEventListener("click", menosinfo);

function menosinfo(){
    span_text.classList.remove("mostrar");

    if(span_text.classList.contains("mostrar")){
        btn_mas_info.classList.add("mostrar");
    } else{
        btn_mas_info.classList.remove("ocultar");
    }
}



let btn_mas_info_ = document.getElementById('btn_mas_info_');
let span_text_ = document.getElementById('span_text_');
let btn_menos_info_ = document.getElementById('btn_menos_info_');

btn_mas_info_.addEventListener("click",masinfo_)

function masinfo_(){
    span_text_.classList.add("mostrar_");
    btn_mas_info_.classList.add("ocultar_");
}

btn_menos_info_.addEventListener("click", menosinfo_);

function menosinfo_(){
    span_text_.classList.remove("mostrar_");

    if(span_text_.classList.contains("mostrar_")){
        btn_mas_info_.classList.add("mostrar_");
    } else{
        btn_mas_info_.classList.remove("ocultar_");
    }
}



let btn_mas_info__ = document.getElementById('btn_mas_info__');
let span_text__ = document.getElementById('span_text__');
let btn_menos_info__ = document.getElementById('btn_menos_info__');

btn_mas_info__.addEventListener("click",masinfo__)

function masinfo__(){
    span_text__.classList.add("mostrar__");
    btn_mas_info__.classList.add("ocultar__");
}

btn_menos_info__.addEventListener("click", menosinfo__);

function menosinfo__(){
    span_text__.classList.remove("mostrar__");

    if(span_text__.classList.contains("mostrar__")){
        btn_mas_info__.classList.add("mostrar__");
    } else{
        btn_mas_info__.classList.remove("ocultar__");
    }
}