import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ExpenseHistory = () => {
  const [allExpenses, setAllExpenses] = useState([]);
  const [deleteUser, setDelete] = useState(allExpenses);

  useEffect(() => {
    fetch("http://localhost:4000/expense")
      .then((res) => res.json())
      .then((data) => {
        setAllExpenses(data);
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // expense delete
  const handleDelete = (_id) => {
    console.log(_id);

    fetch(`http://localhost:4000/expense/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = deleteUser.filter((dlt) => dlt._id !== _id);
          setDelete(remaining);
        }
      });
  };

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
                  <Link to={`/dashboard/expenses/${expense._id}`}>
                    <button className="btn btn-xs">Edit</button>
                  </Link>
                </td>

                <td className="border-2">
                  <button
                    onClick={() => handleDelete(expense._id)}
                    className="btn text-[#00DAC6] hover:text-black btn-outline hover:bg-[#00DAC6] border-[#00DAC6]">
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
