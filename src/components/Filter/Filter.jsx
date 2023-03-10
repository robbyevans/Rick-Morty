import React, { useState, useEffect } from "react";
import css from "./Filter.module.scss";
import { BsFilterRight } from "react-icons/bs";
import Gender from "./Gender";
import Species from "./Species";
import Status from "./Status";

function Filter({ setGender, setSpecies, setStatus, setPageNumber }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  // clear filter section
  function clearFilter(e) {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
    e.preventDefault();
    // window.location.reload(false);
  }
  //
  return (
    <div className={css.wrapper}>
      <button onClick={handleClick}>
        <BsFilterRight className={css.icon} />
      </button>
      <div className={css.parameters}>
        {isOpen ? (
          <div className={css.options}>
            <Gender setGender={setGender} />
            <Species setSpecies={setSpecies} />
            <Status setStatus={setStatus} />
            <button className={css.clear} onClick={clearFilter}>
              Clear Filter
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Filter;
