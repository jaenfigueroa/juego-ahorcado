import './ts/components/modal.component.ts'
import './ts/pages/'
import { Game } from './ts/class/game.class.ts'

// recuperar la lista de palabras del local storage
const stringStorage: string | null = localStorage.getItem('words')
const storedList: string[] = JSON.parse(stringStorage ?? '["batman"]')

//crear mi storage por primera vez
export const myGame:Game = new Game(storedList)












