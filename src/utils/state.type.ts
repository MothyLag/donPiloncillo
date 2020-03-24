export interface IAppState {
  session: ISessionState;
}

export interface IAppActions {
  session: ISessionActions;
}

export interface ISessionState {
  logged: boolean;
}

export interface ISessionActions {
  type: string;
}
