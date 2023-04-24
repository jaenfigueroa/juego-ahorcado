import { myStorage } from '../..'
import { section1, section3, buttonExitSection3, wordText, lettersUsed, buttonNewGame } from '../modules/domElements'
import { changeSection } from '../modules/navigate'
import { updateModal } from '../components/modal'

// AGREGAR UNA PIEZA DEL PERSONAJE /////////////////////////////////////
const addPiece = (number: number) => {
  const piece = document.querySelector<HTMLElement>(`#pieza-${number}`)
  piece?.classList.add('pantalla__item--visible')
}

// AGREGAR LETRA A LA LISTA DE LETRAS YA TECLEADAS /////////////////////////
const addLetter = (letter: string) => {
  lettersUsed.textContent += letter.toUpperCase()
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//ACTUALIZAR LA PALABRA
const updateWord = (text:string) => {
  wordText.textContent = text
}

//RECONOCER QUE TECLA SE SELECCIONA DURANTE EL JUEGO
export const handleKeyPress = (e:KeyboardEvent) => {
  const letter = e.key.toUpperCase()

  // console.log(letter)
  // console.log(myStorage.actual())

  //comprobar si la letra es una de ellas en la palabra
  if (myStorage.existsLetter(letter)) {

    //comprobar si el usuario ya lo tecleo antes
    if (!myStorage.verifyLetter(letter)) {

      //si no es asi, dejar de ocultar esa letra
      updateWord(myStorage.revealLetter(letter))

      //comprobar que el usuario ya gano el juego
      if (myStorage.verifyWin()) {
        // updateModal(`Genial, adivinaste la palabra "${myStorage.actual()}", ganaste!! lo cual demuestra que eres un jugador de ahorcado muy habilidoso.`, clearGame)
        updateModal(`Genial, adivinaste la palabra "${myStorage.actual()}", ganaste!! lo cual demuestra que eres un jugador de ahorcado muy habilidoso.`)
        finishGame()
      }

      addLetter(letter)
    }
  } else{
    let intentosFallidos:number = myStorage.addFail()

    if (intentosFallidos <= 9) {
      addPiece(intentosFallidos)
    } else{
      updateModal('Perdiste el Juego.')
      finishGame()
    }
  }
}

//INICIAR JUEGO
export const startGame = () => {
  window.addEventListener('keypress', handleKeyPress) //EMPEZAR A ESCUCHAR EL TECLADO

  updateWord(myStorage.random())
}

//FINALIZAR JUEGO - DEJAR DE ESCUCHAR EL TECLADO
const finishGame = () => {
  window.removeEventListener('keypress', handleKeyPress)
}

//LIMPIAR PANTALLA Y REINCIAR DATOS
export const clearGame = () => {
  //reinciiar lo visible
  updateWord(myStorage.random())
  addLetter('')
  lettersUsed.textContent = ''

  const images: HTMLImageElement[] = Array.from(document.querySelectorAll('.pieza'))

  images.map(img => {
    img.classList.remove('pantalla__item--visible')
  })

  //reiniciar la data
  myStorage.random()
}

//REINICIAR EL JUEGO
const resetGame = () => {
  clearGame()
  startGame()
}

//ESCUCHAR PARA VOLVER A JUGAR
buttonNewGame.addEventListener('click', resetGame)

//SALIR DE LA SECCION DEL JUEGO - VOLVER AL LA SECCION 1 (INICIO) ////////////
buttonExitSection3?.addEventListener('click', () => {
  resetGame()
  changeSection(section3, section1)
  finishGame()
})