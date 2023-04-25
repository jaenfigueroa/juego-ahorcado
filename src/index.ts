import './ts/components/modal.component.ts'
import './ts/pages/'
import { Game } from './ts/class/game.class.ts'

// recuperar la lista de palabras del local storage
const storedWordsString: string | null = localStorage.getItem('words')
const storedWordsList: string[] = JSON.parse(storedWordsString ?? '["batman"]')

//crear mi storage por primera vez
export const myGame:Game = new Game(storedWordsList)












