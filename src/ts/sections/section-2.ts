import { buttonExitSection2, buttonSaveWord, modal, modalText, section1, section2, section3, textareaNewWord } from '../../modules/domElements'
import { changeSection } from '../../modules/navigate'
import { addWordToLocalStorage } from '../../modules/storage'
import { updateModal } from '../modal'

//SALIR DE LA SECCION DE AGREGAR NUEVA PALABRA - VOLVER AL LA SECCION 1 (INICIO)
buttonExitSection2.addEventListener('click', () => {
  changeSection(section2, section1)
})

//AGRERAR LA PALABRA A LA LISTA DE POSIBLES PALABRAS
buttonSaveWord?.addEventListener('click', () => {
  const word:string | undefined = textareaNewWord?.value

  if (word && word.length <= 8) {
    addWordToLocalStorage(word)
    changeSection(section2, section3)
  } else{
    updateModal('No hay texto para guardar o el texto supera los 8 caracteres', modal, modalText)
  }
})










