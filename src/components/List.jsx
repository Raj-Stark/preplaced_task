import React, { useEffect, useState } from "react";

const getArray = () => {
  const resp = JSON.parse(localStorage.getItem("raj"));
  return resp ? resp : [];
};

const storeArray = (array) => {
  const strigify = JSON.stringify(array);

  localStorage.setItem("raj", strigify);
};

const List = ({ array }) => {
  const [list, setList] = useState(getArray());

  useEffect(() => {
      if(!array) return;
    setList(array);
  }, [array]);

  useEffect(() => {
    
    storeArray(list);
  }, [list]);

  const handleClick = (e) => {
    const newArray = [...list];
    const num = Number(e.target.textContent);

    if (isNaN(num)) {
      return;
    }

    if (num % 3 === 0) {
      newArray[num - 1] = "Divisible by 3";
    } else if (num % 5 === 0) {
      newArray[num - 1] = "Divisible by 5";
    } else {
      newArray[num - 1] = "Just a number";
    }

    setList(newArray); // Update the list state
  };


  return (
    <div className="list">
      {list.map((item , i) => {
        return (
          <p
            data-id={item}
            key={i}
            className="list-item"
            onClick={handleClick}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default List;
