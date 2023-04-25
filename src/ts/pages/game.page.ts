import { myGame } from '../..'
import { section1, section3, buttonExitSection3, wordText, lettersUsed, buttonNewGame } from '../utils/domElements.utils'
import { changePage } from '../utils/changePage.utils'
import { updateModal } from '../components/modal.component'

// AGREGAR UNA PIEZA DEL PERSONAJE /////////////////////////////////////
const addPieceScreen = (number: number) => {
  const piece = document.querySelector<HTMLElement>(`#pieza-${number}`)
  piece?.classList.add('pantalla__item--visible')
}

// AGREGAR LETRA A LA LISTA DE LETRAS YA TECLEADAS /////////////////////////
const addLetterScreen = (letter: string) => {
  lettersUsed.textContent += letter.toUpperCase()
}

//ACTUALIZAR LA PALABRA CIFRADA DE LA PANTALLA
const updateWordCryptScreen = (text:string) => {
  wordText.textContent = text
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//RECONOCER QUE TECLA SE SELECCIONA DURANTE EL JUEGO
export const handleKeyPress = (e:KeyboardEvent) => {
  const letter = e.key.toUpperCase()

  if (myGame.existsLetter(letter)) { //comprobar si la letra es una de ellas en la palabra

    if (!myGame.verifyLetter(letter)) { //comprobar si el usuario ya lo tecleo antes

      updateWordCryptScreen(myGame.revealLetter(letter)) //si no es asi, dejar de ocultar esa letra

      if (myGame.verifyWin()) { //comprobar que el usuario ya gano el juego
        updateModal(`Genial, adivinaste la palabra "${myGame.actual()}", ganaste!! lo cual demuestra que eres un jugador de ahorcado muy habilidoso.`, 'Genial')
        stopGame()
      }

      addLetterScreen(letter)
    }
  } else{
    let intentosFallidos:number = myGame.addFail()
    addPieceScreen(intentosFallidos) //mostrar nueva pieza

    if (intentosFallidos >= 9) { //comprobar que el usuario supero el numero de intentos
      updateModal('Perdiste el Juego.', 'Salir')
      stopGame()
    }
  }
}

//INICIAR JUEGO /////////////////////////////////////////////////////////////////////
export const startGame = () => {
  window.addEventListener('keypress', handleKeyPress)

  updateWordCryptScreen(myGame.random())
}

//LIMPIAR PANTALLA Y REINCIAR DATOS ///////////////////////////////////////////////////
export const clearGame = () => {
  //reinciiar lo visible
  updateWordCryptScreen(myGame.random())
  addLetterScreen('')
  lettersUsed.textContent = ''

  const images: HTMLImageElement[] = Array.from(document.querySelectorAll('.pieza'))

  images.map(img => {
    img.classList.remove('pantalla__item--visible')
  })

  //reiniciar la data
  myGame.random()
}

//REINICIAR EL JUEGO ////////////////////////////////////////////////////////
//REINICIAR EL JUEGO ////////////////////////////////////////////////////////
const resetGame = () => {
  clearGame()
  startGame()
}

//PARAR EL JUEGO ////////////////////////////////////////////////////////////
//PARAR EL JUEGO ////////////////////////////////////////////////////////////
const stopGame = () => {
  window.removeEventListener('keypress', handleKeyPress)
}

//SALIR DEL JUEGO//////////////////////////////////////////////////////////////
//SALIR DEL JUEGO/////////////////////////////////////////////////////////////
const exitGame = () => {
  resetGame()
  stopGame()
}

//ESCUCHAR PARA VOLVER A JUGAR
buttonNewGame.addEventListener('click', resetGame)

//SALIR DE LA SECCION DEL JUEGO - VOLVER AL LA SECCION 1 (INICIO) ////////////
buttonExitSection3?.addEventListener('click', () => {
  exitGame()
  changePage(section3, section1)
})