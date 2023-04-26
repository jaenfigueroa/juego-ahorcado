import { personSVG } from './domElements.utils';

export const changeColor = (number: number, color: string) => {
  const myDoc= personSVG.contentDocument
  const rect = myDoc!.getElementById(`piece-${number}`);
  rect!.style.fill = color;
}