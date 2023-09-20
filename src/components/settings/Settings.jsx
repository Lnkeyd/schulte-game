import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleDotInTheMiddle,
  toggleShuffleOnClick,
  toggleClickOnCeils,
  setTableMode,
  setTableStyle,
  updateTableDimension,
  updateLocalStorageSettings,
  initLocalStorageSettings,
} from "../../store/settingsSlice";
import styles from "./Settings.module.scss";

const Settings = () => {
  useEffect(() => {
    dispatch(initLocalStorageSettings());

    // eslint-disable-next-line
  }, []);
  
  const settings = useSelector((store) => store.settings);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateLocalStorageSettings());
  };


  console.log(settings);

  return (
    <form className={styles.form}>
      <h2>Settings</h2>
      <div className={styles.option}>
        <label>Table dimension:</label>
        <ul className={styles.dimension}>
          {settings.tableDimension?.map((item, index) => (
            <li key={index}>
              <label>{item.name}</label>
              <input
                onChange={(e) => dispatch(updateTableDimension(item.name))}
                type="radio"
                name="table-dimension"
                checked={item.active}
                value={item.name}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.option}>
        <label>Click on ceils:</label>
        <input
          type="checkbox"
          checked={settings?.clickOnCeils}
          onChange={(e) => dispatch(toggleClickOnCeils())}
        />
      </div>
      <div className={styles.option}>
        <label>Shuffle on click:</label>
        <input
          type="checkbox"
          checked={settings?.shuffleOnClick}
          onChange={(e) => dispatch(toggleShuffleOnClick())}
        />
      </div>
      <div className={styles.option}>
        <label>Dot in the middle:</label>
        <input
          type="checkbox"
          checked={settings?.dotInTheMiddle}
          onChange={(e) => dispatch(toggleDotInTheMiddle())}
        />
      </div>
      <div className={styles.flexWrapper}>
        <div className={styles.option}>
          <label>Table style:</label>
          <ul>
            {settings.tableStyle.map((item, index) => (
              <li key={index}>
                <label>{item.name}</label>
                <input
                  onChange={(e) => dispatch(setTableStyle(e.target.value))}
                  type="radio"
                  name="table-style"
                  checked={item.active}
                  value={item.name}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.option}>
          <label>Table mode:</label>
          <ul>
            {settings.tableMode.map((item, index) => (
              <li key={index}>
                <label>{item.name}</label>
                <input
                  onChange={(e) => dispatch(setTableMode(e.target.value))}
                  type="radio"
                  name="table-mode"
                  checked={item.active}
                  value={item.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className={styles.button} onClick={(e) => handleSubmit(e)}>
        Save settings
      </button>
    </form>
  );
};

export default Settings;
