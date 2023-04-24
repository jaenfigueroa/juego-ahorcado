import { changeSection } from '../modules/navigate'
import { buttonAddWord, buttonStartGame, section1, section2, section3 } from '../modules/domElements'
import { handleKeyPress } from './section-3'

//MOVERME A LA SECCIONDE INICIAR JUEGO
buttonStartGame.addEventListener('click', () => {
  changeSection(section1, section3)
  window.addEventListener('keypress', handleKeyPress) //EMPEZAR A ESCUCHAR EL TECLADO
})

//MOVERME A LA SECCION DE AGREGAR NUEVA PALABRA
buttonAddWord.addEventListener('click', () => {
  changeSection(section1, section2)
})