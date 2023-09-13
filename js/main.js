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
            "python",
            "django",
            "html"
        ]
    },
    {
        "nombre_proyecto": "titulo3",
        "tecnologias": [
            "python",
            "django",
            "html"
        ]
    },
    {
        "nombre_proyecto": "titulo4",
        "tecnologias": [
            "python",
            "django",
            "html"
        ]
    }
]


// let div_element;
// let p;
// let tags;
// const elementos = document.querySelectorAll('.trabajos__img_cont');
// elementos.forEach(elemento => elemento.addEventListener("mouseenter", () => {
//     div_element = document.createElement('div');
//     p = document.createElement('p');
//     tags = document.createElement('span');
//     tags.textContent = 'python';
//     p.textContent = 'trabajo django';
//     div_element.appendChild(p);
//     div_element.appendChild(tags);
//     div_element.classList.add('trabajos_info');
//     elemento.appendChild(div_element)
// }
// ));


// elementos.forEach(elemento => elemento.addEventListener("mouseleave", () => div_element.remove()))


let div_element, p ,tags, contador=0;

const elementos = document.querySelectorAll('.trabajos__img_cont');

// .forEach(elemento => elemento.addEventListener("mouseenter", () => {
//     div_element = document.createElement('div');
//     p = document.createElement('p');
//     tags = document.createElement('span');
//     tags.textContent = 'python';
//     p.textContent = arr[contador]['nombre_proyecto'];
//     div_element.appendChild(p);
//     div_element.appendChild(tags);
//     div_element.classList.add('trabajos_info');
//     elemento.appendChild(div_element);
//     contador++;
//     if(contador==4){contador=0}
// }
// ));

for(var i = 0; i < arr.length; i++){
    elementos[i].addEventListener("mouseenter", () => {
            div_element = document.createElement('div');
            p = document.createElement('p');
            tags = document.createElement('span');
            tags.textContent = 'python';
            p.textContent = arr[i]['nombre_proyecto'];
            div_element.appendChild(p);
            div_element.appendChild(tags);
            div_element.classList.add('trabajos_info');
            elemento.appendChild(div_element);

        }
    )        
}


elementos.forEach(elemento => elemento.addEventListener("mouseleave", () => div_element.remove()))

console.log(elementos);