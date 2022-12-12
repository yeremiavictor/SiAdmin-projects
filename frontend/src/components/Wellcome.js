import React from "react";
import { useSelector } from "react-redux";

const Wellcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">Wellcome back ... {user && user.name}</h2>
    </div>
  );
};

export default Wellcome;
