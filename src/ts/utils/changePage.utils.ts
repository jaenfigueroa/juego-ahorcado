//PARA CAMBIAR ENTRE LAS SECCIONES DEL JUEGO
export const changePage = (pageToExit:HTMLElement, pageToEnter: HTMLElement) => {
  pageToExit.classList.remove('section--active')
  pageToEnter.classList.add('section--active')
}


