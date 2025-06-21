import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="bg-body">
      <Outlet />
    </div>
  );
};

export default App;
