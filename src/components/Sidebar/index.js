import React from "react";

export default function index(props) {
  const { count } = props;
  const numberArr = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ];
  return (
    <div className="flex flex-col gap-[59px] max-w-[180px]">
      {count > 1 ? (
        <>
          <button
            type="button"
            className=" text-gray-400 border border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Personal Details
          </button>
          {Array.from({ length: count - 1 }, (_, i) => i + 1).map(
            (data, index) => (
              <>
                {count - 2 === index ? (
                  <button
                    type="button"
                    className="text-black border-[2px] hover:text-white border border-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    key={index}
                  >
                    Course {numberArr[data-1]}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="text-gray-400 border border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    key={index}
                  >
                    Course {numberArr[data-1]}
                  </button>
                )}
              </>
            )
          )}
        </>
      ) : (
        <button
          type="button"
          className="text-black hover:text-white border border-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Personal Details
        </button>
      )}
    </div>
  );
}
