import { personSVG } from './domElements.utils';

export const changeColor = (number:number, color:string) => {
  const svgDoc = personSVG.contentDocument;
  const rect = svgDoc!.getElementById(`piece-${number}`);
  rect!.style.fill = color;
}