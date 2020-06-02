import React, { useEffect, useState } from "react";
import { CatalogueDB } from "../../database/catalogues/catalogues.pouch";
import { useSelector } from "react-redux";
import { IAppState } from "../../utils/state.type";
import { ICatalogue } from "../../database/catalogues/catalogues.types";

export const RequisicionDocument = () => {
  const data = useSelector<IAppState, string>((state) => state.data.data);
  const [table, setTable] = useState<ICatalogue[]>([]);
  const db = new CatalogueDB();
  useEffect(() => {
    db.getAllCatalogues("Molino").then((res: any) => {
      let catalogs = res.docs.map((catalog: ICatalogue) => {
        return catalog;
      });
      setTable(catalogs);
    });
  }, []);
  if (table.length <= 0)
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#EFEFEF",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>No hay nada que imprimir</h1>
      </div>
    );
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#EFEFEF",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <table>
        <thead>
          {Object.keys(table[0]).map((header: any, index: number) => {
            if (header != "_rev" && header != "_id")
              return (
                <>
                  <th key={`header${index}`}>{header}</th>
                </>
              );
          })}
        </thead>
        <tbody>
          {table.map((catalog, index: number) => {
            delete catalog._rev;
            delete catalog._id;
            return (
              <tr key={`row${index}`}>
                {Object.values(catalog).map((data, i) => (
                  <td key={`data${i}`}>{data}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
