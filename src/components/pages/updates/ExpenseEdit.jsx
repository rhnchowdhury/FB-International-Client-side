import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ExpenseEdit = () => {
  const expense = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const amount = form.amount.value;
    const select = form.select.value;
    const date = form.date.value;
    // console.log(title, amount, mode, date);
    const updateExpenses = { title, amount, mode, date };

    fetch(`http://localhost:4000/expense/${expense._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateExpenses),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Updated");
        }
        form.reset();
      });
  };

  return (
    <section className=" min-h-screen flex flex-col justify-center py-5 pb-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full md:w-3/5">
        <div className="w-full bg-black rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight  text-[#92E9DC] md:text-2xl">
              Edit<span className="text-[#00DAC6]"> Your</span>
              <span className="text-[#008966]"> Expenses</span>
            </h1>
            <form onClick={handleUpdate} className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-[#575454] text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="bg-[#3C3C3C] border border-[#3C3C3C] text-[#D8FFFB] focus:outline focus:outline-[#3C3C3C] sm:text-sm rounded-lg block w-full p-2.5"
                  defaultValue={expense?.title}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-[#575454] text-sm font-medium ">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  defaultValue={expense?.amount}
                  className="bg-[#3C3C3C] border border-[#3C3C3C] text-[#D8FFFB] focus:outline focus:outline-[#3C3C3C] sm:text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <label className="block mb-2 text-[#575454] text-sm font-medium ">
                Category
              </label>
              <select
                name="select"
                defaultValue={expense?.select}
                className="bg-[#3C3C3C] border border-[#3C3C3C] text-[#D8FFFB] focus:outline focus:outline-[#3C3C3C] sm:text-sm rounded-lg block w-full p-2.5">
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="shopping">Shopping</option>
                <option value="medical">Medical</option>
              </select>
              <div>
                <label className="block mb-2 text-[#575454] text-sm font-medium ">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  defaultValue={expense?.date}
                  className="bg-[#3C3C3C] border border-[#3C3C3C] text-[#D8FFFB] focus:outline focus:outline-[#3C3C3C] sm:text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full btn border-[#00DAC6] bg-[#00DAC6] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpenseEdit;
