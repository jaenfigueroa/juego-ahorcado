import { buttonExitPageGame, wordText, lettersUsed, buttonNewGame } from '../utils/domElements.utils'
import { changePage } from '../utils/changePage.utils'
import { updateModal } from '../components/modal.component'
import { PAGES } from '../constants/pages.constants'
import { myGame } from '../..'
import { changeColor } from '../utils/changeColor.utils'

// AGREGAR UNA PIEZA AL PERSONAJE
const addPieceScreen = (number: number) => {
  changeColor(number, '#0A3871')
}

//QUITARLE TODAS LAS PIEZAS AL PERSONAJE
const quitPiecesScreen = () => {
  for (let i = 1; i < 10; i++) {
    changeColor(i, '#ffffff00')
  }
}

//ACTUALIZAR LA PALABRA CIFRADA DE LA PANTALLA
const updateWordCryptScreen = (text:string) => {
  wordText.textContent = text
}

// AGREGAR LETRA USADA A LA PANTALLA
const addLetterScreen = (letter: string) => {
  lettersUsed.textContent += letter.toUpperCase()
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
    const intentosFallidos:number = myGame.addFail()
    addPieceScreen(intentosFallidos) //mostrar nueva pieza

    if (intentosFallidos >= 9) { //comprobar que el usuario supero el numero de intentos
      updateModal('Lamentablemente has perdido, no has conseguido resolver el acertijo. ¡Mejor suerte la próxima vez!', 'Salir')
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
  //reiniciar lo visible
  updateWordCryptScreen(myGame.random())
  addLetterScreen('')
  lettersUsed.textContent = ''
  quitPiecesScreen()

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
buttonExitPageGame?.addEventListener('click', () => {
  exitGame()
  changePage(PAGES.GAME, PAGES.HOME)
})

