import PouchDB from "pouchdb";
import findPlugin from "pouchdb-find";
import { ICatalogue } from "./catalogues.types";

PouchDB.plugin(findPlugin);

export class CatalogueDB {
  private db = new PouchDB<ICatalogue>("catalogs");

  public addCatalogue(user: ICatalogue) {
    return this.db
      .post(user)
      .then((res) => res)
      .catch((error) => error);
  }

  public getCatalogueByID(id: string) {
    return this.db
      .get(id)
      .then((res) => res)
      .catch((error) => error);
  }

  public async deleteCatalogue(docs: any) {
    console.log(docs);
    await this.db
      .remove(docs)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => console.log(error));
  }

  public async getAllCatalogues(catalog: string) {
    await this.db.createIndex({
      index: { fields: ["catalogo"] },
    });
    return await this.db.find({
      selector: {
        catalogue: catalog,
      },
    });
  }
}
