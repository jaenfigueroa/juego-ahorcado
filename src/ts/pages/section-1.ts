import { changeSection } from '../helpers/navigate'
import { buttonAddWord, buttonStartGame, section1, section2, section3 } from '../modules/domElements'
import { startGame } from './section-3'

//MOVERME A LA SECCIONDE INICIAR JUEGO
buttonStartGame.addEventListener('click', () => {
  changeSection(section1, section3)
  startGame()
})

//MOVERME A LA SECCION DE AGREGAR NUEVA PALABRA
buttonAddWord.addEventListener('click', () => {
  changeSection(section1, section2)
})