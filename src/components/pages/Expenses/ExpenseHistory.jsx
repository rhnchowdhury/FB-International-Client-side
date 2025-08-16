const ExpenseHistory = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th className="border-2"></th>
              <th className="border-2">Name</th>
              <th className="border-2">Email</th>
              <th className="border-2"> Role</th>
              <th className="border-2">Make Admin</th>
              <th className="border-2">Delete</th>
            </tr>
          </thead>
          {/* {allExpenses.map((usr, i) => ( */}
          <tbody key={usr._id}>
            <tr>
              <th className="border-2">{i + 1}</th>
              <td className="border-2">{usr.name}</td>
              <td className="border-2"> {usr.email}</td>
              <td className="border-2">{usr.role}</td>
              <td className="border-2">
                <button className="btn btn-xs">Make Admin</button>
              </td>
              <td className="border-2">
                <button className="btn btn-warning  btn-outline">Delete</button>
              </td>
            </tr>
          </tbody>
          {/* ))} */}
        </table>
      </div>
    </div>
  );
};

export default ExpenseHistory;
