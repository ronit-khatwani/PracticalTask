import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TicketList from '../components/TicketList';

const Dashboard = ({ navigation }) => {
  const tickets = useSelector(state => state.tickets.tickets);

  return (
    <View style={styles.container}>
      <Button
        title="Create Ticket"
        onPress={() => navigation.navigate('TicketForm')}
      />
      <Text style={styles.heading}>Assigned</Text>
      <TicketList tickets={tickets.filter(ticket => ticket.position === 'assigned')} />

      <Text style={styles.heading}>In Process</Text>
      <TicketList tickets={tickets.filter(ticket => ticket.position === 'in process')} />

      <Text style={styles.heading}>Resolved</Text>
      <TicketList tickets={tickets.filter(ticket => ticket.position === 'resolved')} />

      <Text style={styles.heading}>Deployed</Text>
      <TicketList tickets={tickets.filter(ticket => ticket.position === 'deployed')} />

      <Text style={styles.heading}>Closed</Text>
      <TicketList tickets={tickets.filter(ticket => ticket.position === 'closed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default Dashboard;
