import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import DashboardWrapper from "../components/DashboardWrapper/DashboardWrapper";
import PageMainWrapper from "../components/PageMainWrapper/PageMainWrapper";
import StartStopReadingFrom from "../components/StartStopReadingFrom/StartStopReadingFrom";
import ReadingProgress from "../components/ReadingProgress/ReadingProgress";

import { getBookInfo } from "../redux/reading/operations";
import { selectBookInfo } from "../redux/reading/selectors";

const ReadingPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const bookInfo = useSelector(selectBookInfo);

  console.log(bookInfo);

  useEffect(() => {
    dispatch(getBookInfo(id));
  }, [dispatch, id]);

  return (
    <PageWrapper>
      <DashboardWrapper page="readingPage">
        <StartStopReadingFrom />
        <ReadingProgress />
      </DashboardWrapper>
      <PageMainWrapper title={"My reading"}>My reading</PageMainWrapper>
    </PageWrapper>
  );
};

export default ReadingPage;
