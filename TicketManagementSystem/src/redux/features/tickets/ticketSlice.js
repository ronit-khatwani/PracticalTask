import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tickets: [],
};

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTicket: (state, action) => {
      state.tickets.push({ id: uuidv4(), ...action.payload });
    },
    updateTicketPosition: (state, action) => {
      const { id, position } = action.payload;
      const ticket = state.tickets.find(ticket => ticket.id === id);
      if (ticket) {
        ticket.position = position;
      }
    },
  },
});

export const { addTicket, updateTicketPosition } = ticketSlice.actions;

export default ticketSlice.reducer;
