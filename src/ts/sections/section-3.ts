import { myStorage } from '../..'
import { section1, section3, buttonExitSection3, wordText, modal, lettersUsed } from '../../modules/domElements'
import { changeSection } from '../../modules/navigate'
import { updateModal } from '../modal'

// AGREGAR LETRA A LA LISTA DE LETRAS YA TECLEADAS /////////////////////////
const addLetter = (letter: string) => {
  lettersUsed.textContent += letter.toUpperCase()
}

// AGREGAR UNA PIEZA DEL PERSONAJE /////////////////////////////////////
const addPiece = (number: number) => {
  const piece = document.querySelector<HTMLElement>(`#pieza-${number}`)
  piece?.classList.add('pantalla__item--visible')
}

//ACTUALIZAR LA PALABRA
const updateWord = (text:string) => {
  wordText.textContent = text
}

//INICIAR JUEGO
const startGame = () => {
  updateWord(myStorage.random())
}

const clearGame = () => {
  updateWord(myStorage.random())
  addLetter('')
  lettersUsed.textContent = ''
  myStorage.clear()

  const images: HTMLImageElement[] = Array.from(document.querySelectorAll('.pieza'))

  images.map(img => {
    img.classList.remove('pantalla__item--visible')
  })
}

//ESCOGER UNA PALABRA AL AZAR DEL LOCAL STORAGE ////////////////////////
startGame()
let intentosFallidos = 0

//RECONOCER QUE TECLA SE SELECCIONA DURANTE EL JUEGO
export const handleKeyPress = (e:KeyboardEvent) => {
  const letter = e.key.toUpperCase()

  //comprobar si la letra es una de ellas en la palabra
  if (myStorage.existsLetter(letter)) {

    //comprobar si el usuario ya lo tecleo antes
    if (!myStorage.verifyLetter(letter)) {

      //si no es asi, dejar de ocultar esa letra
      updateWord(myStorage.revealLetter(letter))

      //comprobar que el usuario ya gano el juego
      if (myStorage.verifyWin()) {
        updateModal(`Genial, adivinaste la palabra "${myStorage.actual()}", ganaste!! lo cual demuestra que eres un jugador de ahorcado muy habilidoso.`, clearGame)
      }

      addLetter(letter)
    }
  } else{
    intentosFallidos++

    if (intentosFallidos <= 9) {
      addPiece(intentosFallidos)
    } else{
      updateModal('Perdiste el Juego.')
    }
  }
}

//SALIR DE LA SECCION DEL JUEGO - VOLVER AL LA SECCION 1 (INICIO) ////////////
buttonExitSection3?.addEventListener('click', () => {
  changeSection(section3, section1)
  window.removeEventListener('keypress', handleKeyPress) //DEJAR DE ESCUCHAR EL TECLADO
})
