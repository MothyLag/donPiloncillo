import PouchDB from "pouchdb";
import findPlugin from "pouchdb-find";
import { IProviders } from "./providers.types";
PouchDB.plugin(findPlugin);

export class ProviderDB {
  private db = new PouchDB<IProviders>("providers");

  public addProvider(provider: IProviders) {
    return this.db
      .post(provider)
      .then((res) => res)
      .catch((error) => error);
  }

  public getProviderByID(id: string) {
    return this.db
      .get(id)
      .then((res) => res)
      .catch((error) => error);
  }

  public getAllProviders() {
    return this.db
      .allDocs({ include_docs: true, attachments: true })
      .then((res) => res)
      .catch((error) => error);
  }

  public deleteProvider(doc: any) {
    return this.db
      .remove(doc)
      .then((res) => res)
      .catch((error) => error);
  }
}
