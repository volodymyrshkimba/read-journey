import { useState } from "react";
import { useSelector } from "react-redux";

import Icon from "../Icon/Icon";
import CircularProgress from "../CircularProgress/CircularProgress";

import {
  selectDiary,
  selectPercentageAndPagesRead,
} from "../../redux/reading/selectors";

import { usePerPage } from "../../hooks/usePerPage";

import css from "./DiaryAndStatistics.module.css";

const tabs = [
  {
    value: "diary",
    title: "Diary",
    icon: "hourglass",
  },
  {
    value: "statistics",
    title: "Statistics",
    icon: "pie-chart",
  },
];

const DiaryAndStatistics = () => {
  const [currTab, setCurrTab] = useState(tabs[0]);
  const viewportSize = usePerPage();

  const isTablet = viewportSize === 8;

  const isDesktop = viewportSize === 10;

  const { pagesRead, percentage } = useSelector(selectPercentageAndPagesRead);

  const diaryData = useSelector(selectDiary);

  const tabContent = {
    diary: <div className={css.diaryWrapper}>Diary</div>,
    statistics: (
      <div className={css.statisticWrapper}>
        <div className={css.circleWrapper}>
          <CircularProgress
            progress={percentage}
            size={isDesktop ? 168 : isTablet ? 138 : 116}
            strokeWidth={isDesktop ? 15 : isTablet ? 12 : 10}
          />
          <span className={css.fullPercentage}>100%</span>
        </div>
        <div className={css.percentageWrapper}>
          <span className={css.marker}></span>
          <div>
            <p className={css.percentage}>{percentage}%</p>
            <p className={css.pagesReaded}>{pagesRead} pages read</p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className={css.contentWrapper}>
      <div className={css.titleBtnsWrapper}>
        <h2 className={css.title}>{currTab.title}</h2>
        <ul className={css.btnsList}>
          {tabs.map((tab) => (
            <li key={tab.value}>
              <button
                className={css.tabBtn}
                type="button"
                onClick={() => setCurrTab(tab)}
              >
                <Icon
                  name={tab.icon}
                  active={tab.value === currTab.value}
                  stroke
                  w={16}
                  h={16}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
      {isDesktop && currTab.value === tabs[1].value && (
        <p className={css.desctopText}>
          Each page, each chapter is a new round of knowledge, a new step
          towards understanding. By rewriting statistics, we create our own
          reading history.
        </p>
      )}
      <div className={css.infoWrapper}>{tabContent[currTab.value]}</div>
    </div>
  );
};

export default DiaryAndStatistics;
