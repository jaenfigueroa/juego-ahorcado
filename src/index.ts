import './ts/components/modal.component.ts'
import './ts/pages/'
import { Game } from './ts/class/game.class.ts'
import { getStoredList } from './ts/utils/getStoredList.ts'

//CREAR MI STORAGE POR PRIMERA VEZ
export const myGame:Game = new Game(getStoredList())












