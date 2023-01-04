import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';
export const Loader = () => (
  <div className={css.Loader}>
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color="#3F51B5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </div>
);
