//PARA CAMBIAR ENTRE LAS SECCIONES DEL JUEGO
export const changeSection = (element1:HTMLElement, element2: HTMLElement) => {
  element1.classList.remove('section--active')
  element2.classList.add('section--active')
}


