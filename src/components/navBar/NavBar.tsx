import React from "react";
import "./NavBar.sass";
import { useSelector } from "react-redux";
import { IAppState, ISessionState } from "../../utils/state.type";

export default () => {
  const session = useSelector<IAppState, ISessionState>(state => state.session);

  return (
    <div className={session.logged ? "" : "navBar--unlogued"}>
      <div className="brand">
        <img src="imgs/donpiloncillo.png" height="100%" alt="donPiloncillo" />
      </div>
    </div>
  );
};
