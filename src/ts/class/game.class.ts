export class Game {
  private listWords: string[]
  private actualWord: string[] = []
  private actualWordCrypt: string[] = []
  private usedLetters: string[] = []
  private intentosFallidos: number = 0

  constructor(arraySaved:string[]){
    this.listWords = arraySaved
  }

  //GUARDAR UNA NUEVA PALABRA PAR EL JUEGO
  addWord = (word:string) => {
    //agregar al palabra
    this.listWords.push(word)

    //actualizar el valor
    localStorage.setItem('words', JSON.stringify(this.listWords))
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

  //REEMPLAZAR LAS LETRAS X POR LA LETRA TECLEADA
  revealLetter = (letter:string):string => {

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

  //DEVOLVER LA PALABRA ACTUAL - JUEGO
  actual = ():string => {
    return this.actualWord.join('')
  }

  //VERIFICAR SI EL USUARIO YA USO ESTA TECLA - JUEGO
  verifyLetter = (letter:string):boolean => {
    return this.usedLetters.includes(letter)
  }

  //VERIFICAR SI LA LETRA SELECCIONADA ESTA EN LA PALABRA - JUEGO
  existsLetter = (letter:string):boolean => {
    return this.actualWord.includes(letter)
  }

  // AGREGAR NUEVA LETRA AL ARRAY DE LETRAS USADAS - JUEGO
  addLetter = (letter:string) => {
    this.usedLetters.push(letter)
  }

  //AGREGAR UN INTENTO FALLIDO - JUEGO
  addFail = ():number => {
    this.intentosFallidos ++
    return this.intentosFallidos
  }

  //VERIFICAR SI EL USUARIO YA GANO EL JUEGO - JUEGO
  verifyWin = ():boolean => {
    return !this.actualWordCrypt.includes('_')
  }
}





