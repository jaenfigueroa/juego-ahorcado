import './ts/components/modal.ts'
import './ts/pages/'
import { Storage } from './ts/modules/storage.ts'

// recuperar la lista de palabras del local storage
const stringStorage: string | null = localStorage.getItem('words')
const storedList: string[] = JSON.parse(stringStorage ?? '["batman"]')

//crear mi storage por primera vez
export const myStorage:Storage = new Storage(storedList)












