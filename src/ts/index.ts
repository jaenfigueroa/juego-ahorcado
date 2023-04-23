import { addWordToLocalStorage } from '../modules/db'

const buttonStartGame = document.querySelector<HTMLButtonElement>('#button-start-game') as HTMLButtonElement
const buttonAddWord = document.querySelector<HTMLButtonElement>('#button-add-word') as HTMLButtonElement
const buttonSaveWord = document.querySelector<HTMLButtonElement>('#button-save-word') as HTMLButtonElement
const buttonExitSection2 = document.querySelector<HTMLButtonElement>('#button-exit-section-2') as HTMLButtonElement
const buttonExitSection3 = document.querySelector<HTMLButtonElement>('#button-exit-section-3') as HTMLButtonElement
const section1 = document.querySelector<HTMLElement>('#section-1') as HTMLElement
const section2 = document.querySelector<HTMLElement>('#section-2') as HTMLElement
const section3 = document.querySelector<HTMLElement>('#section-3') as HTMLElement
const textareaNewWord = document.querySelector<HTMLTextAreaElement>('#textarea-new-word') as HTMLTextAreaElement

const changeSection = (element1:HTMLElement, element2: HTMLElement) => {
  element1.classList.remove('section--active')
  element2.classList.add('section--active')
}

//INICIAR JUEGO
buttonStartGame.addEventListener('click', () => {
  changeSection(section1, section3)
})

//AGREGAR NUEVA PALABRA
buttonAddWord.addEventListener('click', () => {
  changeSection(section1, section2)
})

//AGRERAR LA PALABRA A LA LISTA DE POSIBLES PALABRAS
buttonSaveWord.addEventListener('click', () => {
  const word:string | undefined = textareaNewWord?.value
  word && addWordToLocalStorage(word)

  changeSection(section2, section3)
})

//DESISTIR DE LA SECCION 2 (AGREGAR NUEVA PALABRA)
buttonExitSection2.addEventListener('click', () => {
  changeSection(section2, section1)
})

buttonExitSection3.addEventListener('click', () => {
  changeSection(section3, section1)
})












