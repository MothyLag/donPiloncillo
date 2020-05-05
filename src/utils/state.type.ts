export interface IAppState {
  session: ISessionState;
  modal: IModalState;
  data: IDataState;
}

export interface IAppActions {
  session: ISessionActions;
  data: IDataActions;
}

export interface IDataState {
  data: string;
}

export interface IDataActions {
  type: string;
  payload: object;
}

export interface ISessionState {
  logged: boolean;
}

export interface IModalState {
  open: boolean;
}

export interface IModalActions {
  type: string;
}

export interface ISessionActions {
  type: string;
}
