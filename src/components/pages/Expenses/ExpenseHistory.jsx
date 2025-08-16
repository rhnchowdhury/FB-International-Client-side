import { useEffect, useState } from "react";

const ExpenseHistory = () => {
  const [allExpenses, setAllExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/expense")
      .then((res) => res.json())
      .then((data) => {
        setAllExpenses(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th className="border-2 text-[#D8FFFB]">No.</th>
              <th className="border-2 text-[#D8FFFB]">Title</th>
              <th className="border-2 text-[#D8FFFB]">Amount</th>
              <th className="border-2 text-[#D8FFFB]">Category</th>
              <th className="border-2 text-[#D8FFFB]">Date</th>
              <th className="border-2 text-[#D8FFFB]">Option</th>
              <th className="border-2 text-[#D8FFFB]">Delete</th>
            </tr>
          </thead>
          {allExpenses.map((expense, i) => (
            <tbody key={expense._id}>
              <tr>
                <th className="border-2 text-[#D8FFFB]">{i + 1}</th>
                <td className="border-2 text-[#D8FFFB]">{expense.title}</td>
                <td className="border-2 text-[#D8FFFB]"> {expense.amount}</td>
                <td className="border-2 text-[#D8FFFB]">{expense.select}</td>
                <td className="border-2 text-[#D8FFFB]">{expense.date}</td>
                <td className="border-2">
                  <button className="btn btn-xs">Edit</button>
                </td>
                <td className="border-2">
                  <button className="btn text-[#00DAC6] hover:text-black btn-outline hover:bg-[#00DAC6] border-[#00DAC6]">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ExpenseHistory;
