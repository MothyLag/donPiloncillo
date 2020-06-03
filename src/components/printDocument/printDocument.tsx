import React, { useEffect, useState } from "react";
import { CatalogueDB } from "../../database/catalogues/catalogues.pouch";

import { ICatalogue } from "../../database/catalogues/catalogues.types";

export const RequisicionDocument = (props: any) => {
  const [table, setTable] = useState<ICatalogue[]>([]);
  const db = new CatalogueDB();
  const { catalog } = props;
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  const currentDate = dd + "/" + mm + "/" + yyyy;
  useEffect(() => {
    db.getAllCatalogues(catalog).then((res: any) => {
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
        width: "210mm",
        minHeight: "297mm",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#EFEFEF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <h1>Orden de requisición del día {currentDate}</h1>
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
      <h3 style={{ borderTop: "1px solid", padding: "20px" }}>
        Firma de aprobación
      </h3>
    </div>
  );
};
