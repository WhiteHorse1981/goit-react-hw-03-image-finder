// import propTypes from 'prop-types';
import css from './Modal.module.css';
// import * as basicLightbox from 'basiclightbox';

export const Modal = () => (
  <div className={css.Overlay}>
    <div className={css.Modal}>
      <img src="" alt="" />
      <p>
        Your first lightbox with just a few lines of code. Yes, it's really that
        simple.
      </p>
    </div>
  </div>
);

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();
