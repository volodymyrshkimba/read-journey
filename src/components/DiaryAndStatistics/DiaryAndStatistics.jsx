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
import RisingSpeedGraph from "../RisingSpeedGraph/RisingSpeedGraph";

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

  const isPhone = viewportSize === 2;
  const isTablet = viewportSize === 8;
  const isDesktop = viewportSize === 10;

  const { pagesRead, percentage } = useSelector(selectPercentageAndPagesRead);

  const diaryData = useSelector(selectDiary);

  const tabContent = {
    diary: (
      <div className={css.diaryWrapper}>
        <ul className={css.diaryList}>
          {Object.keys(diaryData).map((date, i) => (
            <li className={css.diaryItem} key={i}>
              <div className={css.datePages}>
                <div className={css.squareDate}>
                  <div className={css.square}>
                    <span className={css.squareInner}></span>
                  </div>
                  <p className={css.date}>{date}</p>
                </div>
                <p className={css.pages}>{diaryData[date].pages} pages</p>
              </div>
              <ul>
                {diaryData[date].result.map((item) => (
                  <li className={css.percentPerHour} key={item.id}>
                    <div>
                      <p className={css.percent}>{item.percentage}%</p>
                      <p className={css.minutes}>{item.minutes} minutes</p>
                    </div>
                    <div className={css.lineBtn}>
                      <div>
                        <div className={css.line}>
                          <RisingSpeedGraph
                            speed={item.perHour}
                            width={isPhone ? 43 : 59}
                            height={isPhone ? 17 : 25}
                            isPhone={isPhone}
                          />
                        </div>
                        <p className={css.perHour}>
                          {item.perHour} pages per hour
                        </p>
                      </div>
                      <button className={css.trashBtn} type="button">
                        <Icon
                          name="trash"
                          stroke
                          w={14}
                          h={14}
                          component={"diary"}
                        />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    ),
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
