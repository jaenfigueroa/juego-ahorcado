import { changePage } from '../utils/changePage.utils'
import { buttonAddWord, buttonStartGame, section1, section2, section3 } from '../utils/domElements.utils'
import { startGame } from './game.page'

//MOVERME A LA SECCIONDE INICIAR JUEGO
buttonStartGame.addEventListener('click', () => {
  changePage(section1, section3)
  startGame()
})

//MOVERME A LA SECCION DE AGREGAR NUEVA PALABRA
buttonAddWord.addEventListener('click', () => {
  changePage(section1, section2)
})