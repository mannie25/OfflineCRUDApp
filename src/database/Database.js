import SQLite from 'react-native-sqlite-storage';

const database = SQLite.openDatabase(
  { name: 'items.db', location: 'default' },
  () => console.log('Database connected'),
  error => console.log('Database error', error)
);

export const createTable = () => {
  database.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT);`,
      [],
      () => console.log('Table created successfully'),
      error => console.log('Error creating table', error)
    );
  });
};

export const insertItem = (name, description, callback) => {
  database.transaction(tx => {
    tx.executeSql(
      'INSERT INTO items (name, description) VALUES (?, ?);',
      [name, description],
      (_, result) => callback(result.insertId),
      error => console.log('Error inserting item', error)
    );
  });
};

export const fetchItems = callback => {
  database.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM items;',
      [],
      (_, { rows }) => callback(rows.raw()),
      error => console.log('Error fetching items', error)
    );
  });
};

export const deleteItem = (id, callback) => {
  database.transaction(tx => {
    tx.executeSql(
      'DELETE FROM items WHERE id = ?;',
      [id],
      () => callback(),
      error => console.log('Error deleting item', error)
    );
  });
};
