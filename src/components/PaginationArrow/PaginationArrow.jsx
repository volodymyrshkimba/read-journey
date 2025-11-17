import Icon from "../Icon/Icon.jsx";

import css from "./PaginationArrow.module.css";

const PaginationArrow = ({ direction, page, totalPages, setPage }) => {
  const isLeft = direction === "left";

  const isDisabled = !totalPages || (isLeft ? page === 1 : page === totalPages);

  const handleClick = () => {
    if (isDisabled) return;
    setPage(isLeft ? page - 1 : page + 1);
  };

  return (
    <button
      className={css.arrow}
      type="button"
      disabled={isDisabled}
      onClick={handleClick}
    >
      <Icon name={direction} w={6} h={10} stroke disabled={isDisabled} />
    </button>
  );
};

export default PaginationArrow;
