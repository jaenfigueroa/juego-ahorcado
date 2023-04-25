// 1. Verificar que la función que elige una palabra aleatoria desde una lista de palabras devuelve una palabra de la lista.
// 2. Asegurarse de que la función que comprueba si una letra está en la palabra oculta devuelve verdadero si la letra está en la palabra y falso si no lo está.
// 3. Probar que la función que actualiza la palabra oculta con la letra adivinada funciona correctamente.
// 4. Comprobar que la función que maneja las vidas restantes del jugador se reduce en uno cuando se adivina una letra incorrecta.
// 5. Verificar que la función que comprueba si el jugador ha perdido devuelve verdadero cuando el número de vidas restantes es cero.
// 6. Asegurarse de que la función que comprueba si el jugador ha ganado devuelve verdadero cuando la palabra oculta se ha descubierto por completo.

describe('Section Game', () => {
  test('los numeros deben ser iguales', () => {
    expect(2).toBe(2)
    expect(4).toBe(4)
    expect(20).not.toBe(18)
  })
})





