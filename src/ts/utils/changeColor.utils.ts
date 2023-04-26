import { personSVG } from './domElements.utils';

export const changeColor = (number: number, color: string) => {
  const { contentDocument } = personSVG;
  if (contentDocument !== null) {
    const rect = contentDocument.getElementById(`piece-${number}`);
    if (rect !== null) {
      rect.style.fill = color;
    }
  }
};
