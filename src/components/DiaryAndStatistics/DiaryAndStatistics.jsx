import { useState } from "react";

import Icon from "../Icon/Icon";

import css from "./DiaryAndStatistics.module.css";
import CircularProgress from "../CircularProgress/CircularProgress";

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

  const tabContent = {
    diary: <div>Diary</div>,
    statistics: (
      <div className={css.statisticWrapper}>
        <div className={css.circleWrapper}>
          <CircularProgress progress={20} size={116} strokeWidth={10} />
          <span className={css.fullPercentage}>100%</span>
        </div>
        <div>stat</div>
      </div>
    ),
  };

  return (
    <div>
      <div className={css.titleBtnsWrapper}>
        <h2 className={css.title}>{currTab.title}</h2>
        <ul className={css.btnsList}>
          {tabs.map((tab) => (
            <li key={tab.value}>
              <button type="button" onClick={() => setCurrTab(tab)}>
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
      <div className={css.infoWrapper}>{tabContent[currTab.value]}</div>
    </div>
  );
};

export default DiaryAndStatistics;
