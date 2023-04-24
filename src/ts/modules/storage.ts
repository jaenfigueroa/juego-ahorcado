export class Storage {
  listWords: string[]
  actualWord: string[]
  actualWordCrypt: string[]
  usedLetters: string[]
  intentosFallidos: number

  constructor(arraySaved:string[]){
    this.listWords = arraySaved
    this.actualWord = []
    this.actualWordCrypt = []
    this.usedLetters = []
    this.intentosFallidos = 0
  }

  //ESCOGER UNA PALABRA AL AZAR
  random = ():string => {
    const max:number = this.listWords.length - 1
    const randomNum:number = Math.floor(Math.random() * (max + 1))

    this.actualWord = this.listWords[randomNum].toUpperCase().split('')
    this.actualWordCrypt = new Array(this.actualWord.length).fill('_')

    /* otros */
    this.usedLetters = []
    this.intentosFallidos = 0

    return this.actualWordCrypt.join('')
  }

  //DEVOLVER LA PALABRA ACTUAL
  actual = () => {
    return this.actualWord.join('')
  }

  //GUARDAR UNA NUEVA PALABRA
  addWord = (word:string) => {
    //agregar al palabra
    this.listWords.push(word)

    //actualizar el valor
    this.update()
  }

  //ACTUALIZAR LA LISTA DEL LOCAL STORAGE
  update = () => {
    localStorage.setItem('words', JSON.stringify(this.listWords))
  }

  // AGREGAR NUEVA LETRA AL ARRAY DE LETRAS USADAS
  addLetter = (letter:string) => {
    this.usedLetters.push(letter)
  }

  //VERIFICAR SI LA LETRA SELECCIONADA ESTA EN LA PALABRA
  existsLetter = (letter:string) => {
    return this.actualWord.includes(letter)
  }

  //VERIFICAR SI EL USUARIO YA USO ESTA TECLA
  verifyLetter = (letter:string) => {
    return this.usedLetters.includes(letter)
  }

  //REEMPLAZAR LAS LETRAS X POR LA LETRA TECLEADA
  revealLetter = (letter:string) => {

    if(this.usedLetters.includes(letter)){
      return this.actualWordCrypt.join('')
    }

    let originalList:string[] = this.actualWord
    let cryptList:string[] = this.actualWordCrypt

    // si la letra conicide tecleada con alguna letra de la palabra escondida,
    // lo reemplaza por esa letra
    for (const id in originalList) {
      if (originalList[id] === letter) {
        cryptList[id] = letter
      }
    }

    // actualiza el array de actualWordHashed
    this.actualWordCrypt = cryptList

    this.addLetter(letter)

    return this.actualWordCrypt.join('')
  }

  //VERIFICAR SI EL USUARIO YA GANO EL JUEGO
  verifyWin = () => {
    return !this.actualWordCrypt.includes('_')
  }

  //AGREGAR UN INTENTO FALLIDO
  addFail = () => {
    this.intentosFallidos ++
    return this.intentosFallidos
  }
}





