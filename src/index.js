import './sass/index.scss';

import { refs, createFilmModal } from './js/services/modal';

// Open FilmModal
refs.filmCardListEl.addEventListener('click', createFilmModal);
