import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onPress }) => {
  return (
    <button type="button" onClick={onPress} className={style.loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
