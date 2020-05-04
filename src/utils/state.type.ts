export interface IAppState {
  session: ISessionState;
  modal: IModalState;
}

export interface IAppActions {
  session: ISessionActions;
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
