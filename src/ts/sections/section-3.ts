import { buttonExitSection3, section1, section3 } from '../../modules/domElements'
import { changeSection } from '../../modules/navigate'

//SALIR DE LA SECCION DEL JUEGO - VOLVER AL LA SECCION 1 (INICIO)
buttonExitSection3?.addEventListener('click', () => {
  changeSection(section3, section1)
  window.removeEventListener('keypress', handleKeyPress) //DEJAR DE ESCUCHAR EL TECLADO
})

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

//RECONOCER QUE TECLA SE SELECCIONA DURANTE EL JUEGO
export const handleKeyPress = (e:KeyboardEvent) => {
  const letter = e.key
  console.log(letter)
}