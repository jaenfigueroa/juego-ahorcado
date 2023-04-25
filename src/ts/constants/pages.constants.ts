import { pageAdmin, pageGame, pageHome } from '../utils/domElements.utils';
import { Pages } from '../models/pages.model';

export const PAGES:Pages = {
  HOME: pageHome,
  ADMIN: pageAdmin,
  GAME: pageGame
}