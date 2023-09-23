import React from "react";
import styles from "./Table.module.scss";
import { useSelector } from "react-redux";
import cn from "classnames"

const Table = () => {
  const {
    tableDimension,
    clickOnCeils,
    shuffleOnClick,
    dotInTheMiddle,
    tableStyle,
    tableMode,
  } = useSelector((state) => state.settings);

  const activeDimension = tableDimension.find(item => item.active === true)
  console.log(styles)

  // const init = {
  // tableDimension: [
  //   { name: "3 x 3", active: false, value: 3 },
  //   { name: "4 x 4", active: false, value: 4 },
  //   { name: "5 x 5", active: true, value: 5 },
  //   { name: "6 x 6", active: false, value: 6 },
  //   { name: "7 x 7", active: false, value: 7 },
  //   { name: "8 x 8", active: false, value: 8 },
  //   { name: "9 x 9", active: false, value: 9 },
  //   { name: "10 x 10", active: false, value: 10 },
  // ],
  //   clickOnCeils: false,
  //   shuffleOnClick: true,
  //   dotInTheMiddle: false,
  //   tableStyle: [
  //     { name: "Classic", active: true },
  //     { name: "Modern", active: false },
  //     { name: "Elegance", active: false },
  //   ],
  //   tableMode: [
  //     { name: "Digits", active: true },
  //     { name: "Letters", active: false },
  //     { name: "Gorbov-Schulte", active: false },
  //   ],
  // };

  const shuffleNumbers = () => {
    const arr = [];
    for (let i = 0; i < activeDimension.value ** 2; i++) {
      arr.push(i + 1);
    }
    return arr.sort(() => Math.random() - 0.5);
  };

  const handleCellClick = (e) => {};

  const shuffled = shuffleNumbers();

  return (
    <div className={`${styles.table} ${dotInTheMiddle && styles.dot}`}>
      {shuffled.map((item, index) => (
        <div className={`${styles.cell}`} key={index} draggable={false}>{item}</div>
      ))}
    </div>
  );
};

export default Table;
