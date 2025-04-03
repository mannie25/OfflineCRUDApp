import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setItems, removeItem } from '../redux/itemsSlice';
import { fetchItems, deleteItem } from '../database/db';

export default function ListScreen({ navigation }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  useEffect(() => {
    fetchItems(data => dispatch(setItems(data)));
  }, []);

  const handleDelete = id => {
    deleteItem(id, () => dispatch(removeItem(id)));
  };

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('AddEdit')}>
        <Text>Add New Item</Text>
      </TouchableOpacity>
    </View>
  );
}
