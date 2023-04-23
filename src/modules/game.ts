// AGREGAR UNA PIEZA DEL PERSONAJE /////////////////////////////////////
export const addPiece = (number: number) => {
  const piece = document.querySelector<HTMLElement>(`.pieza-${number}`)

  if (!piece) {
    throw new Error(`El elemento "pieza-${number}"`)
  }

  piece.classList.add('pantalla__item--visible')
}

// AGREGAR LETRA A LA LISTA DE LETRAS YA TECLEADAS /////////////////////////
export const addLetter = (letter: string) => {
  const element = document.querySelector<HTMLParagraphElement>('#letras-usadas')

  if(!element){
    throw new Error('El elemento "letras-usadas" no esta definido')
  }

  element.textContent += letter.toUpperCase()
}












