import { fetchPicturesData } from './storage';
import { renderPicturesList } from './images-list';
import { showDataErrorToast } from './pop-up-errors';
import './post';
import './upload-form';
import * as filters from './image-filters';

fetchPicturesData()
  .then(() => {
    filters.init();
    renderPicturesList();
  })
  .catch(() => {
    showDataErrorToast();
  });
