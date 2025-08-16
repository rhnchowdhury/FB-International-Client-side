import { useEffect, useState } from "react";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/expense")
      .then((res) => res.json())
      .then((data) => {
        setExpenses(data);
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // adding amount
  const totalExpense = expenses.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  return (
    <div>
      <div className="font-semibold text-base sm:text-2xl">Expense Summary</div>
      <div className="flex my-5 sm:my-10 gap-5 flex-wrap md:flex-nowrap">
        <div className="w-full sm:w-1/3 bg-[#1B1B1B] rounded-lg p-5 ">
          <div className="text-base lg:text-xl font-semibold">
            Monthly Income
          </div>
          <div className="text-2xl lg:text-5xl font-bold my-2">BDT</div>
        </div>
        <div className="w-full sm:w-1/3 bg-[#1B1B1B] rounded-lg p-5 ">
          <div className="text-base lg:text-xl font-semibold">
            Total Expense
          </div>
          <div className="text-2xl lg:text-5xl font-bold my-2">
            {totalExpense}
          </div>
        </div>
        <div className="w-full sm:w-1/3 bg-[#1B1B1B] rounded-lg p-5 ">
          <div className="text-base lg:text-xl font-semibold">
            Current Balance
          </div>
          <div className="text-2xl lg:text-5xl font-bold my-2">
            <p>BDT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
