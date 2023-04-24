import { myStorage } from '../..'
import { section1, section2, section3, buttonExitSection2, buttonSaveWord, textareaNewWord } from '../../modules/domElements'
import { changeSection } from '../../modules/navigate'
import { updateModal } from '../modal'

//GUARDAR LA PALABRA EN LA LISTA DE POSIBLES PALABRAS - LOCALSTORAGE
buttonSaveWord?.addEventListener('click', () => {
  const word:string | undefined = textareaNewWord?.value

  if (word && word.length <= 8) {
    myStorage.addWord(word)
    changeSection(section2, section3)
  } else{
    updateModal('No hay texto para guardar o el texto supera los 8 caracteres')
  }
})

//SALIR DE LA SECCION DE AGREGAR NUEVA PALABRA - VOLVER AL LA SECCION 1 (INICIO)
buttonExitSection2.addEventListener('click', () => {
  changeSection(section2, section1)
})








