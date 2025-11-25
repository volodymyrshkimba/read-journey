import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";

import { closeModal } from "../../redux/modal/slice";
import { selectModalData } from "../../redux/modal/selectors";

import ModalAddAndStartReadingBook from "./ModalAddAndStartReadingBook/ModalAddAndStartReadingBook";
import ModalAddedAndReadedBook from "./ModalAddedAndReadedBook/ModalAddedAndReadedBook";

import Icon from "../Icon/Icon";

import css from "./Modal.module.css";

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, modalType, modalProps } = useSelector(selectModalData);

  if (!isOpen) return null;

  const modalMap = {
    addRecommendedBook: (
      <ModalAddAndStartReadingBook
        {...modalProps}
        onClose={() => dispatch(closeModal())}
      />
    ),
    startReadingBook: (
      <ModalAddAndStartReadingBook
        {...modalProps}
        onClose={() => dispatch(closeModal())}
        isStartReadingBook={modalType === "startReadingBook"}
      />
    ),
    bookAdded: (
      <ModalAddedAndReadedBook onClose={() => dispatch(closeModal())} />
    ),
  };

  return (
    <div className={css.overlay} onClick={() => dispatch(closeModal())}>
      <div
        className={clsx(css.modal, css[modalType])}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={clsx(css.closeBtn, css[modalType])}
          onClick={() => dispatch(closeModal())}
        >
          <Icon name={"x"} w={22} h={22} stroke />
        </button>
        {modalMap[modalType] || null}
      </div>
    </div>
  );
};

export default Modal;
