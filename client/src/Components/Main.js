import Header from "./Header";

const Main = () => {
  return (
    <div>
        {/* Header */}
      <Header />
      {/* Tabs */}
      <div>
          <div className="flex items-start  justify-evenly  mt-8 w-1/5">
              <button className="bg-main py-3 px-6 text-white rounded text-xl text-center hover:bg-mainHover">Orders</button>
              <button className="bg-main py-3 px-6 text-white rounded text-xl text-center hover:bg-mainHover">Users</button>
          </div>
      </div>
    </div>
  );
};

export default Main;
