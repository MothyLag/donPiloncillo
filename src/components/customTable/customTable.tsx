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
        {headers.map((head) => (
          <TableH>head</TableH>
        ))}
      </TableHeader>
      <TableBody>
        {data.map((body) => (
          <TableRow>
            {Object.values(body).map((td) => (
              <TableData>{td}</TableData>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};
