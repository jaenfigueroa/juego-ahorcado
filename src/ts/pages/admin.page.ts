import { myGame } from '../..'
import { section1, section2, buttonExitSection2, buttonSaveWord, textareaNewWord } from '../utils/domElements.utils'
import { changePage } from '../utils/changePage.utils'
import { updateModal } from '../components/modal.component'

//GUARDAR LA PALABRA EN LA LISTA DE POSIBLES PALABRAS - LOCALSTORAGE
buttonSaveWord?.addEventListener('click', () => {
  const word:string | undefined = textareaNewWord?.value

  if (word && word.length <= 8) {
    myGame.addWord(word)
    // changeSection(section2, section3)
    updateModal(`Perfecto, haz agregado "${word.toUpperCase()}" a la lista de posibles palabras.`, 'Genial')
  } else{
    updateModal('No hay texto para guardar o el texto supera los 8 caracteres.', 'Volver a intentarlo')
  }
})

//SALIR DE LA SECCION DE AGREGAR NUEVA PALABRA - VOLVER AL LA SECCION 1 (INICIO)
buttonExitSection2.addEventListener('click', () => {
  changePage(section2, section1)
})








