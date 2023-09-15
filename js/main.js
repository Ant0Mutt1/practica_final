AOS.init();

let arr=[
    {
        "nombre_proyecto": "CRUD App Desktop ",
        "tecnologias": [
            "Python",
            "tkinter"
        ]
    },
    {
        "nombre_proyecto": "Web App con Django",
        "tecnologias": [
            "Django",
            "HTML",
            "CSS",
            "JavaScript",
        ]
    },
    {
        "nombre_proyecto": "SynthWaveFest",
        "tecnologias": [
            "HTML",
            "CSS",
        ]
    },
    {
        "nombre_proyecto": "Web Educativa",
        "tecnologias": [
            "HTML",
            "CSS",
        ]
    }
]

let div_element, div_tags, p, tags;

const elementos = document.querySelectorAll('.trabajos__img_cont');

const esDispositivoTactil = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (esDispositivoTactil) {

    
    elementos.forEach((elemento, i )=> elemento.addEventListener("touchstart", () => {
        div_element = document.createElement('div');
        div_tags = document.createElement('div');
        p = document.createElement('p');
    
        p.textContent = arr[i]['nombre_proyecto'];
        div_element.appendChild(p);
    
        arr[i]['tecnologias'].forEach((tag, j)=>{
            span_tag = document.createElement('span');    
            span_tag.textContent = arr[i]['tecnologias'][j];  
            div_tags.appendChild(span_tag);
        })
    
        div_tags.classList.add('trabajos_tag')
        div_element.appendChild(div_tags)
        div_element.classList.add('trabajos_info');
        elemento.appendChild(div_element);
    }
    ));
    elementos.forEach(elemento => elemento.addEventListener("touchend", () => div_element.remove()))
}
else {
    elementos.forEach((elemento, i )=> elemento.addEventListener("mouseenter", () => {
        div_element = document.createElement('div');
        div_tags = document.createElement('div');
        p = document.createElement('p');
    
        p.textContent = arr[i]['nombre_proyecto'];
        div_element.appendChild(p);
    
        arr[i]['tecnologias'].forEach((tag, j)=>{
            span_tag = document.createElement('span');    
            span_tag.textContent = arr[i]['tecnologias'][j];  
            div_tags.appendChild(span_tag);
        })
    
        div_tags.classList.add('trabajos_tag')
        div_element.appendChild(div_tags)
        div_element.classList.add('trabajos_info');
        elemento.appendChild(div_element);
    }
    ));
    
    elementos.forEach(elemento => elemento.addEventListener("mouseleave", () => div_element.remove()));
}


const items = document.querySelectorAll('.nav__item');
let menu = document.getElementById('menu');
items.forEach(item => item.addEventListener("click", ()=> {menu.checked = false}) );