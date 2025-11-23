import { useState } from "react";
import clsx from "clsx";

import Icon from "../Icon/Icon";

import css from "./MyLibrarySelect.module.css";

const options = [
  {
    name: "Unread",
    value: "unread",
  },
  {
    name: "In progress",
    value: "in-progress",
  },
  {
    name: "Done",
    value: "done",
  },
  {
    name: "All books",
    value: "",
  },
];

const MyLibrarySelect = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);

  const currStatus = options.find((option) => option.value === value);

  return (
    <div className={css.wrapper}>
      <div className={css.select} onClick={() => setOpen(!open)}>
        <p className={css.currStatus}>{currStatus.name}</p>
        <Icon name={"down"} stroke w={10} h={8} />
      </div>
      {open && (
        <ul className={css.optionsList}>
          {options.map((option) => {
            return (
              <li
                className={clsx(
                  css.option,
                  option.value === value && css.active
                )}
                key={option.value}
                onClick={() => setValue(option.value)}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MyLibrarySelect;
