import { personSVG } from './domElements.utils'

//CAMBIAR DE COLOR A UNA DE LAS PIEZAS
export const changeColor = (number: number, color: string) => {
  const rect = personSVG.contentDocument?.getElementById(`piece-${number}`) as HTMLElement
  rect.style.fill = color
}

