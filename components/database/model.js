import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const tableName = 'Users'
enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'bd.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        login    STRING  NOT NULL
                     UNIQUE,
        password STRING  NOT NULL
    );`;

  await db.executeSql(query);

};

export const LogIn = async (db: SQLiteDatabase, login: string, password: string) => {
  try {
    const results = await db.executeSql(`SELECT id FROM ${tableName} WHERE login = '${login}' and password = '${password}'`);
    if (results.length() > 0) {
        conso
    return results.first;
    }
  }
  catch (error) {
    console.error(error);
    throw Error('Incorrect, try again');
  }
};