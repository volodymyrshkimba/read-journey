import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import clsx from "clsx";

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";
import PageMainWrapper from "../../components/PageMainWrapper/PageMainWrapper";
import StartStopReadingFrom from "../../components/StartStopReadingFrom/StartStopReadingFrom";
import ReadingProgress from "../../components/ReadingProgress/ReadingProgress";

import { getBookInfo } from "../../redux/reading/operations";
import {
  selectActiveStatus,
  selectBookInfo,
} from "../../redux/reading/selectors";

import css from "./ReadingPage.module.css";

const ReadingPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const bookInfo = useSelector(selectBookInfo);

  const isActive = useSelector(selectActiveStatus);

  useEffect(() => {
    dispatch(getBookInfo(id));
  }, [dispatch, id]);

  return (
    <PageWrapper>
      <DashboardWrapper page="readingPage">
        <StartStopReadingFrom bookId={id} />
        <ReadingProgress />
      </DashboardWrapper>
      <PageMainWrapper page="readingPage" title={"My reading"}>
        <div className={css.wrapper}>
          <div className={css.thumb}>
            <img
              className={css.img}
              src={
                bookInfo?.imageUrl ||
                "https://rostislav.kiev.ua/wp-content/uploads/2014/04/kniga.jpg"
              }
              alt={bookInfo?.title}
            />
          </div>
          <h3 className={css.title}>{bookInfo?.title}</h3>
          <p className={css.author}>{bookInfo?.author}</p>
          <div className={css.record}>
            <div
              className={clsx(css.recordInner, isActive && css.active)}
            ></div>
          </div>
        </div>
      </PageMainWrapper>
    </PageWrapper>
  );
};

export default ReadingPage;
