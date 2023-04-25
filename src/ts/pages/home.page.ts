import { PAGES } from '../constants/pages.constants'
import { changePage } from '../utils/changePage.utils'
import { buttonAddWord, buttonStartGame } from '../utils/domElements.utils'
import { startGame } from './game.page'

//MOVERME A LA SECCIONDE INICIAR JUEGO
buttonStartGame.addEventListener('click', () => {
  changePage(PAGES.HOME, PAGES.GAME)
  startGame()
})

//MOVERME A LA SECCION DE AGREGAR NUEVA PALABRA
buttonAddWord.addEventListener('click', () => {
  changePage(PAGES.HOME, PAGES.ADMIN)
})