import { personSVG } from './domElements.utils';

export const changeColor = (number: number, color: string) => {
  const rect = personSVG.contentDocument?.getElementById(`piece-${number}`) as HTMLElement | null
  if (rect) {
    rect.style.fill = color
  }
}

