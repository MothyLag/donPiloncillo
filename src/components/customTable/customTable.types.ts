interface IRowsTable extends Object {
  _id: string;
  _rev: string;
  acciones?: any;
}

export interface ICustomTableProps {
  headers: string[];
  data: IRowsTable[];
}
