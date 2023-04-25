//PARA CAMBIAR ENTRE LAS SECCIONES DEL JUEGO
export const changePage = (pageToExit:HTMLElement, pageToEnter: HTMLElement) => {
  pageToExit.classList.remove('page--active')
  pageToEnter.classList.add('page--active')
}


