import PouchDB from "pouchdb";
import findPlugin from "pouchdb-find";
import { IUsers } from "./users.types";
PouchDB.plugin(findPlugin);

export class UserDB {
  private db = new PouchDB<IUsers>("users");

  public addUser(user: IUsers) {
    return this.db
      .post(user)
      .then((res) => res)
      .catch((error) => error);
  }

  public getUserByID(id: string) {
    return this.db
      .get(id)
      .then((res) => res)
      .catch((error) => error);
  }

  public async logIn(user: IUsers) {
    await this.db.createIndex({
      index: { fields: ["username", "password"] },
    });
    return await this.db.find({
      selector: {
        username: user.username,
        password: user.password,
      },
    });
  }
  public getAllUsers() {
    return this.db
      .allDocs({ include_docs: true, attachments: true })
      .then((res) => res)
      .catch((error) => error);
  }
}
