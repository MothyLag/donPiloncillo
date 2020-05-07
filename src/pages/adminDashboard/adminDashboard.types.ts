interface IRowsTable extends Object {
  _id: string;
  _rev: string;
}
export interface IDataTableState {
  rows: IRowsTable[];
  headers: string[];
}
