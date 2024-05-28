import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTicket } from '../features/tickets/ticketSlice';

const TicketForm = ({ navigation }) => {
  const [customerName, setCustomerName] = useState('');
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState('assigned');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newTicket = { customerName, title, position };
    dispatch(addTicket(newTicket));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Customer Name:</Text>
      <TextInput
        style={styles.input}
        value={customerName}
        onChangeText={setCustomerName}
      />
      <Text>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <Text>Position:</Text>
      <Picker
        selectedValue={position}
        onValueChange={(itemValue) => setPosition(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Assigned" value="assigned" />
        <Picker.Item label="In Process" value="in process" />
        <Picker.Item label="Resolved" value="resolved" />
        <Picker.Item label="Deployed" value="deployed" />
        <Picker.Item label="Closed" value="closed" />
      </Picker>
      <Button title="Create Ticket" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default TicketForm;
