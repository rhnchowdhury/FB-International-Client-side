import { useState } from "react";

const Income = () => {
  const [incomeShow, setIncomeShow] = useState("");

  const handleIncome = (e) => {
    e.preventDefault();
    const form = e.target;
    const income = form.income.value;
    setIncomeShow(income);
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center py-5 pb-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full md:w-3/5">
        <div className="w-full bg-black rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0"></div>
        <h1 className="text-xl font-bold text-center leading-tight tracking-tight  text-[#92E9DC] md:text-2xl">
          Add<span className="text-[#00DAC6]"> Your</span>
          <span className="text-[#008966]"> Income</span>
        </h1>
        <form className="space-y-4 md:space-y-6 mt-5" onSubmit={handleIncome}>
          <div>
            <label className="block mb-2 text-[#575454] text-sm font-medium">
              Your Income
            </label>
            <input
              type="text"
              name="income"
              className="bg-[#3C3C3C] border border-[#3C3C3C] text-[#D8FFFB] focus:outline focus:outline-[#3C3C3C] sm:text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full btn border-[#00DAC6] bg-[#00DAC6] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Add Income
          </button>
        </form>
      </div>
    </div>
  );
};

export default Income;
