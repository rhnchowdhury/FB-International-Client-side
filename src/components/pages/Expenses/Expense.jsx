const Expense = () => {
  const handleExpenses = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const amount = form.amount.value;
    const select = form.select.value;
    const date = form.date.value;
    console.log(title, amount, select, date);
    const expenses = { title, amount, select, date };

    fetch("http://localhost:4000/expense", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(expenses),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <section className=" min-h-screen flex flex-col justify-center py-5 pb-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full md:w-3/5">
        <div className="w-full bg-black rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight  text-[#92E9DC] md:text-2xl">
              Add<span className="text-[#00DAC6]"> Expen</span>
              <span className="text-[#008966]">ses</span>
            </h1>
            <form onSubmit={handleExpenses} className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-[#575454] text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  minLength={3}
                  className="bg-[#3C3C3C] border border-[#3C3C3C] text-[#D8FFFB] focus:outline focus:outline-[#3C3C3C] sm:text-sm rounded-lg block w-full p-2.5"
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
                  minLength={1}
                  className="bg-[#3C3C3C] border border-[#3C3C3C] text-[#D8FFFB] focus:outline focus:outline-[#3C3C3C] sm:text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <label className="block mb-2 text-[#575454] text-sm font-medium ">
                Category
              </label>
              <select
                name="select"
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
                  className="bg-[#3C3C3C] border border-[#3C3C3C] text-[#D8FFFB] focus:outline focus:outline-[#3C3C3C] sm:text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full btn border-[#00DAC6] bg-[#00DAC6] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expense;
