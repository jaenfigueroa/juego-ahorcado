const words: string[] = ['conejo', 'perro', 'cemento', 'laptop']


// AGREGAR UNA PIEZA VISIBLE
const addPiece = (number: number) => {
  const piece = document.getElementById(`pieza-${number}`) as HTMLElement
  piece.classList.add('pantalla__item--visible')
}

// AGREGAR LETRA USADA A LA LISTA
const addWork = (letter: string) => {
  const list = document.getElementById('letras-usadas') as HTMLElement
}



