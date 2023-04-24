import { addWordToLocalStorage } from '../modules/db'
import { updateModal } from '../modules/game'

const buttonStartGame = document.querySelector<HTMLButtonElement>('#button-start-game') as HTMLButtonElement
const buttonAddWord = document.querySelector<HTMLButtonElement>('#button-add-word') as HTMLButtonElement
const buttonSaveWord = document.querySelector<HTMLButtonElement>('#button-save-word') as HTMLButtonElement
const section1 = document.querySelector<HTMLElement>('#section-1') as HTMLElement
const section2 = document.querySelector<HTMLElement>('#section-2') as HTMLElement
const section3 = document.querySelector<HTMLElement>('#section-3') as HTMLElement
const textareaNewWord = document.querySelector<HTMLTextAreaElement>('#textarea-new-word') as HTMLTextAreaElement
const buttonExitSection2 = document.querySelector<HTMLButtonElement>('#button-exit-section-2') as HTMLButtonElement
const buttonExitSection3 = document.querySelector<HTMLButtonElement>('#button-exit-section-3') as HTMLButtonElement

const modal = document.querySelector<HTMLDialogElement>('#modal') as HTMLDialogElement
const modalText = document.querySelector<HTMLParagraphElement>('#modal-text') as HTMLParagraphElement
const buttonExitModal = document.querySelector<HTMLButtonElement>('#button-exit-modal') as HTMLButtonElement

//PARA CAMBIAR ENTRE LAS SECCIONES DEL JUEGO
const changeSection = (element1:HTMLElement, element2: HTMLElement) => {
  element1.classList.remove('section--active')
  element2.classList.add('section--active')
}

//RECONOCER QUE TECLA SE SELECCIONA DURANTE EL JUEGO
const handleKeyPress = (e:KeyboardEvent) => {
  const letter = e.key
  console.log(letter)
}

//INICIAR JUEGO
buttonStartGame.addEventListener('click', () => {
  changeSection(section1, section3)
  window.addEventListener('keypress', handleKeyPress) //EMPEZAR A ESCUCHAR EL TECLADO
})

//AGREGAR NUEVA PALABRA
buttonAddWord.addEventListener('click', () => {
  changeSection(section1, section2)
})

//AGRERAR LA PALABRA A LA LISTA DE POSIBLES PALABRAS
buttonSaveWord?.addEventListener('click', () => {
  const word:string | undefined = textareaNewWord?.value

  if (word && word.length >= 8) {
    addWordToLocalStorage(word)
    changeSection(section2, section3)
  } else{
    updateModal('No hay texto para guardar o el texto supera los 8 caracteres', modal, modalText)
  }
})

//DESISTIR - SALIR DE AGREGAR NUEVA PALABRA (SECCION 2)
buttonExitSection2.addEventListener('click', () => {
  changeSection(section2, section1)
})

//DESISTIR - SALIR DEL JUEGO (SECCION 3)
buttonExitSection3?.addEventListener('click', () => {
  changeSection(section3, section1)
  window.removeEventListener('keypress', handleKeyPress) //DEJAR DE ESCUCHAR EL TECLADO
})

//SALIR DEL MODAL
buttonExitModal?.addEventListener('click', () => {
  modal.close() //OCULTAR MODAL
})











