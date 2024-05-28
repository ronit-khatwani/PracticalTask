const initialState = {
    tickets: [],
  };
  
  const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TICKET':
        return { ...state, tickets: [...state.tickets, action.payload] };
      case 'UPDATE_TICKET':
        return {
          ...state,
          tickets: state.tickets.map(ticket =>
            ticket.id === action.payload.id ? action.payload : ticket
          ),
        };
      default:
        return state;
    }
  };
  
  export default ticketReducer;
  