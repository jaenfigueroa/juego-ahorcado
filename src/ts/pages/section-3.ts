import { myStorage } from '../..'
import { section1, section3, buttonExitSection3, wordText, lettersUsed, buttonNewGame } from '../modules/domElements'
import { changeSection } from '../helpers/navigate'
import { updateModal } from '../components/modal'

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

  if (myStorage.existsLetter(letter)) { //comprobar si la letra es una de ellas en la palabra

    if (!myStorage.verifyLetter(letter)) { //comprobar si el usuario ya lo tecleo antes

      updateWordCryptScreen(myStorage.revealLetter(letter)) //si no es asi, dejar de ocultar esa letra

      if (myStorage.verifyWin()) { //comprobar que el usuario ya gano el juego
        updateModal(`Genial, adivinaste la palabra "${myStorage.actual()}", ganaste!! lo cual demuestra que eres un jugador de ahorcado muy habilidoso.`, 'Genial')
        stopGame()
      }

      addLetterScreen(letter)
    }
  } else{
    let intentosFallidos:number = myStorage.addFail()
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

  updateWordCryptScreen(myStorage.random())
}

//LIMPIAR PANTALLA Y REINCIAR DATOS ///////////////////////////////////////////////////
export const clearGame = () => {
  //reinciiar lo visible
  updateWordCryptScreen(myStorage.random())
  addLetterScreen('')
  lettersUsed.textContent = ''

  const images: HTMLImageElement[] = Array.from(document.querySelectorAll('.pieza'))

  images.map(img => {
    img.classList.remove('pantalla__item--visible')
  })

  //reiniciar la data
  myStorage.random()
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
  changeSection(section3, section1)
})