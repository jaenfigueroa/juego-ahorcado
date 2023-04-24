import { Storage } from './ts/modules/storage'

// recuperar la lista de palabras del local storage
const stringStorage: string | null = localStorage.getItem('words')
const storedList: string[] = JSON.parse(stringStorage ?? '["batman"]')

//crear mi Storage para guardar las palabras
export const myStorage = new Storage(storedList)

import './ts/pages/section-1' //SECCION INICIO
import './ts/pages/section-2' //SECCION AGREGAR NUEVA PALABRA
import './ts/pages/section-3' //SECCION JUEGO
import './ts/components/modal'

















