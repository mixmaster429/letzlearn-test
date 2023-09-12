import React from "react";
import { useSelector } from "react-redux";
export default function index(props) {
  const { courseNo } = props;
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
  const stepData = useSelector((state) => state.courseState.stepData);
  const level = stepData[courseNo - 1].level;
  const name = stepData[courseNo - 1].name;
  const skill = stepData[courseNo - 1].skill;
  const language = stepData[courseNo - 1].language;
  const reason = stepData[courseNo - 1].reason;

  return (
    <div className="w-full max-w-md min-w-md p-4 bg-white border border-gray-200 rounded-2xl shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Course
        </h5>
        <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
          {numberArr[courseNo - 1]}
        </h3>
      </div>
      <table className="mt-5 w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Level
            </th>
            <td className="px-6 py-4">{level}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Name
            </th>
            <td className="px-6 py-4">{name}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Skill
            </th>
            <td className="px-6 py-4">{skill}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Language
            </th>
            <td className="px-6 py-4">{language}</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Reason
            </th>
            <td className="px-6 py-4 max-w-[270px] break-words">{reason}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
