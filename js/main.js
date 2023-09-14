AOS.init();

let arr=[
    {
        "nombre_proyecto": "titulo1",
        "tecnologias": [
            "python",
            "django",
            "html"
        ]
    },
    {
        "nombre_proyecto": "titulo2",
        "tecnologias": [
            "html",
            "css"
        ]
    },
    {
        "nombre_proyecto": "titulo3",
        "tecnologias": [
            "python",
            "django",
            "html",
            "css"
        ]
    },
    {
        "nombre_proyecto": "titulo4",
        "tecnologias": [
            "python"
        ]
    }
]

let div_element, div_tags, p, tags;

const elementos = document.querySelectorAll('.trabajos__img_cont');

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

elementos.forEach(elemento => elemento.addEventListener("mouseleave", () => div_element.remove()))
