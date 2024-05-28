import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { useDispatch } from 'react-redux';
import { updateTicketPosition } from '../features/tickets/ticketSlice';

const TicketList = ({ tickets }) => {
  const dispatch = useDispatch();

  const handleDragEnd = ({ data }) => {
    data.forEach(ticket => {
      dispatch(updateTicketPosition({ id: ticket.id, position: ticket.position }));
    });
  };

  const renderItem = ({ item, drag }) => (
    <View style={styles.ticket} onLongPress={drag}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.customerName}</Text>
    </View>
  );

  return (
    <DraggableFlatList
      data={tickets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onDragEnd={handleDragEnd}
    />
  );
};

const styles = StyleSheet.create({
  ticket: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TicketList;
