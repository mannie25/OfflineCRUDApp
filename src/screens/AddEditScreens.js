import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/itemsSlice';
import { insertItem } from '../database/db';

export default function AddEditScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (!name || !description) return;
    
    insertItem(name, description, id => {
      dispatch(addItem({ id, name, description }));
      navigation.goBack();
    });
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
