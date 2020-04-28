import React, { useEffect } from "react";
import { AdminWrapper } from "./adminDashboard.styles";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../utils/state.type";
import { LOG_OUT } from "../../utils/state.actions";
import { useHistory } from "react-router";

export const AdminDashboard = () => {
  const logged = useSelector<IAppState>((state) => state.session.logged);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!logged) {
      history.replace("/");
    }
  }, [logged, history]);

  return (
    <AdminWrapper>
      {logged ? "entra" : "no entra"}
      <button onClick={() => dispatch({ type: LOG_OUT })}>Salir</button>
    </AdminWrapper>
  );
};
