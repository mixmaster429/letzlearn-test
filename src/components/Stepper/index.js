import React from "react";
import { useState, useEffect } from "react";
export default function index(props) {
  const { count, setCount } = props;
  const [numArr, setNumArr] = useState([]);

  const getNumArr = () => {
    let arr = [];
    for (var i = 1; i <= count; i++) {
      var str = i < 10 ? "0" + i : "" + i;
      arr.push(str);
    }
    setNumArr(arr);
  };

  useEffect(() => {
    getNumArr();
  }, [count]);

  return (
    <div className="flex flex-col">
      {numArr.length > 0 ? (
        numArr.map((data, index) => (
          <div key={index}>
            <span onClick={()=> setCount(index+1)} className="cursor-pointer text-white w-[30px] h-[30px] pt-[2px] bg-main rounded-full block">
              {data}
            </span>
            {count - 1 === index ? (
              <span className="w-[4px] ml-[13px] h-[80px] pt-[2px] bg-slate-300 block"></span>
            ) : (
              <span className="w-[4px] ml-[13px] h-[80px] pt-[2px] bg-main block"></span>
            )}
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
