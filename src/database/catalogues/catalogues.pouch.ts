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
    await this.db
      .remove(docs)
      .then((res) => res)
      .catch((res) => res);
  }

  public getAllCatalogues() {
    return this.db
      .allDocs({ include_docs: true, attachments: false })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => error);
  }
}
