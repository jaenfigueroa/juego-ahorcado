import './ts/sections/section-1' //SECCION INICIO
import './ts/sections/section-2' //SECCION AGREGAR NUEVA PALABRA
import './ts/sections/section-3' //SECCION JUEGO
import './ts/modal'

import { Storage } from './modules/storage'

// recuperar la lista de palabras del local storage
const stringStorage: string | null = localStorage.getItem('words')
const storedList: string[] = JSON.parse(stringStorage ?? '["batman"]')

//crear mi Storage para guardar las palabras
export const myStorage = new Storage(storedList)














