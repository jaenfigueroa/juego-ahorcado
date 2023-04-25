import { changePage } from '../utils/changePage.utils'
import { buttonAddWord, buttonStartGame, pageHome, pageAdmin, pageGame } from '../utils/domElements.utils'
import { startGame } from './game.page'

//MOVERME A LA SECCIONDE INICIAR JUEGO
buttonStartGame.addEventListener('click', () => {
  changePage(pageHome, pageGame)
  startGame()
})

//MOVERME A LA SECCION DE AGREGAR NUEVA PALABRA
buttonAddWord.addEventListener('click', () => {
  changePage(pageHome, pageAdmin)
})