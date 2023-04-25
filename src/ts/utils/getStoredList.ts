//RECUPERAR LA LISTA DE PALABRAS DEL LOCAL STORAGE
export const getStoredList = ():string[] => {
  const storedWordsString: string | null = localStorage.getItem('words')
  return JSON.parse(storedWordsString ?? '["batman"]')
}