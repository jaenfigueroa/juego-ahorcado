import { words } from '../services/words'

// AGREGAR UNA PALABRA AL LOCAL STORAGE/////////////////////////////////////
export const addWordToLocalStorage = (word: string) => {
  //traer la lista de local storage
  const storedList: string | null = localStorage.getItem('words')
  //traer la lista guardada
  let list: string[] = storedList ? JSON.parse(storedList) : words
  //agregar al palabra
  list.push(word)
  //actualizar el valor
  localStorage.setItem('words', JSON.stringify(list))
}









