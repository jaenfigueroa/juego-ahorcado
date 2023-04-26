import { personSVG } from './domElements.utils';

export const changeColor = (number:number, color:string) => {
  const svgDoc = personSVG.contentDocument;
  const rect = svgDoc!.getElementById(`piece-${number}`);
  // rect!.setAttribute("fill", color);
  rect!.style.fill = color;
}