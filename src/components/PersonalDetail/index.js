import React from "react";
import { useState, useEffect } from "react";
import dialData from "../../data/dial.json";
import stateData from "../../data/state.json";
import { useSelector, useDispatch } from "react-redux";
import { submitPersonalData } from "../../action/userAction";

export default function index(props) {
  const { next } = props;
  const personalData = useSelector((state) => state.userState.userData);
  const dispatch = useDispatch();
  const initialValidationData = {
    name: '',
    number: '',
    emailId: '',
    stateAddress: '',
    country: '',
  }
  const [name, setName] = useState(personalData.name);
  const [number, setNumber] = useState(personalData.number);
  const [emailId, setEmailId] = useState(personalData.emailId);
  const [country, setCountry] = useState(personalData.country);
  const [stateAddress, setStateAddress] = useState(personalData.stateAddress);
  const [validation, setValidation] = useState(initialValidationData);
  const [clickSubmit, setClickSubmit] = useState(false);

  useEffect(() => {
    if (clickSubmit === true)
      checkValidation();
  }, [name, emailId, stateAddress, country, number])
  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmailId(e.target.value);
  };

  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  const changeCountry = (e) => {
    setCountry(e.target.value);
  };

  const changeStateAddress = (e) => {
    setStateAddress(e.target.value);
  };

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(String(email).toLowerCase());
  }

  const checkValidation = () => {
    let res = true;
    let validationData = initialValidationData;
    if (name === '')
    {
      validationData.name = "Please insert name."
      res = false;
    }
    if (emailId === '')
    {
      validationData.email = "Please insert email."
      res = false;
    }
    if (!isValidEmail(emailId))
    {
      validationData.emailId = "Please insert valid email."
      res = false;
    }
    if (number === '')
    {
      validationData.number = "Please insert mobile number."
      res = false;
    }
    if (stateAddress === '')
    {
      validationData.stateAddress = "Please insert state."
      res = false
    }
    if (country === '')
    {
      validationData.country = "Please insert country."
      res = false
    }
    setValidation(validationData);
    return res;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let res = checkValidation();
    if (res === true){
      dispatch(
        submitPersonalData({ name, emailId, number, country, stateAddress })
      );
      next();
    }
    setClickSubmit(true);
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-2xl shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-3" action="#">
        <div>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Personal
          </h5>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
            Details
          </h3>
        </div>
        <div>
          <label
            htmlFor="name"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name*
          </label>
          <div className="relative">
            <input
              type="text"
              onChange={(e) => changeName(e)}
              value={name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full pr-7 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
            <div className="absolute inset-y-0 right-2 flex items-center pl-3.5 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700 dark:text-gray-400"
                viewBox="0 0 23 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                <path d="M16 5l3 3" />
              </svg>
            </div>
          </div>
          { validation.name !== '' ? <div className="text-red-600 font-bold text-left">{validation.name}</div> : <></>}
        </div>
        <div>
          <label
            htmlFor="mobile number"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mobile number*
          </label>
          <div className="relative">
            <select
              value={country}
              onChange={(e) => changeCountry(e)}
              className="absolute rounded-lg border border-gray-300 inset-y-0 left-0 pl-2 border-r-0 outline-none bg-gray-50"
            >
              {dialData.map((data, index) => (
                <option key={index} value={data.name}>
                  {data.dial_code}
                </option>
              ))}
            </select>
            <input
              type="number"
              onChange={(e) => changeNumber(e)}
              value={number}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full pr-7 pl-[80px] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <div className="absolute inset-y-0 right-2 flex items-center pl-3.5 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700 dark:text-gray-400"
                viewBox="0 0 23 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                <path d="M16 5l3 3" />
              </svg>
            </div>
          </div>
          { validation.number !== '' ? <div className="text-red-600 font-bold text-left">{validation.number}</div> : <></>}
        </div>
        <div>
          <label
            htmlFor="email id"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email Id*
          </label>
          <input
            type="email"
            value={emailId}
            onChange={(e) => changeEmail(e)}
            placeholder="John@gmail.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          { validation.emailId !== '' ? <div className="text-red-600 font-bold text-left">{validation.emailId}</div> : <></>}
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <label
              htmlFor="state"
              className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              State*
            </label>
            {country === "India" ? (
              <select
                value={stateAddress}
                onChange={(e) => changeStateAddress(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select State</option>
                {Object.values(stateData).map((data, index) => (
                  <option key={index} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                value={stateAddress}
                onChange={(e) => changeStateAddress(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            )}
          </div>
          <div>
            <label
              htmlFor="country"
              className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country*
            </label>
            <input
              type="text"
              value={country}
              onChange={(e) => changeCountry(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:outline-none block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        { validation.stateAddress !== '' ? <div className="text-red-600 font-bold text-left">{validation.stateAddress}</div> : <></>}
        { validation.country !== '' ? <div className="text-red-600 font-bold text-left">{validation.country}</div> : <></>}
        <button
          className="w-full text-white bg-main hover:bg-purple-800 focus:ring-purple-800 focus:outline-none focus:bg-main font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => handleSubmit(e)}
        >
          Save & Next Step
        </button>
      </form>
    </div>
  );
}
