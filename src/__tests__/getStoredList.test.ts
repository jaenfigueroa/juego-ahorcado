import { getStoredList } from '../ts/utils/getStoredList'

describe('getStoredList', () => {
  test('Debe devolver un array de las palabras guardadas en el juego', () => {
    expect(getStoredList()).toBeGreaterThan(0)
    expect(getStoredList()).toBeInstanceOf(Array)
    expect(getStoredList().every(word => typeof word === 'string')).toEqual(true)
  })
})





