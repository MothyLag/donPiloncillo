import React from "react";
import {
  TableWrapper,
  TableHeader,
  TableH,
  TableBody,
  TableRow,
  TableData,
} from "./customTable.style";
import { ICustomTableProps } from "./customTable.types";
export const CustomTable = (props: ICustomTableProps) => {
  const { data = [], headers = [] } = props;
  return (
    <TableWrapper>
      <TableHeader>
        {headers.map((head, index) => {
          if (head != "_id" && head != "_rev")
            return <TableH key={`th${index}`}>{head}</TableH>;
        })}
      </TableHeader>
      <TableBody>
        {data.map((body, index) => {
          delete body._id;
          delete body._rev;
          return (
            <TableRow key={`tb${index}`}>
              {Object.values(body).map((td, i) => (
                <TableData key={`td${i}`}>{td}</TableData>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </TableWrapper>
  );
};
