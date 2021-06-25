const initialState = {
    hotelBookings: [],
}

export const ActionTypes = {
    SET_HOTELBOOKING: 'SET_HOTELBOOKING',
    DELETE_HOTELBOOKING: 'DELETE_HOTELBOOKING',
    NEW_HOTELBOOKING: 'NEW_HOTELBOOKING',
    EDIT_HOTELBOOKING: 'EDIT_HOTELBOOKING',
}

export const ActionCreators = {
    setHotelBookings: payload => ({type: ActionTypes.SET_HOTELBOOKING, payload}),
    deleteHotelBooking: payload => ({type: ActionTypes.DELETE_HOTELBOOKING, payload}),
    newHotelBooking: payload => ({type: ActionTypes.NEW_HOTELBOOKING, payload}),
    editHotelBooking: payload => ({type: ActionTypes.EDIT_HOTELBOOKING, payload}),
}

export default function HotelBookingsReducer(state = initialState, action) {
    switch(action.type)
    {
        case ActionTypes.SET_HOTELBOOKING:
            return { ...state, hotelBookings: [...action.payload] };
        case ActionTypes.DELETE_HOTELBOOKING:
            for(let i = 0; i < state.hotelBookings.length; i++)
            {
                if(state.hotelBookings[i].id === action.payload.id)
                {
                    state.hotelBookings.splice(i, 1);
                    break;
                }
            }
            return { ...state, hotelBookings: [...state.hotelBookings]}
        case ActionTypes.NEW_HOTELBOOKING:
            return { ...state, hotelBookings: [...state.hotelBookings, action.payload]}
        case ActionTypes.EDIT_HOTELBOOKING:
            for(let i = 0; i < state.hotelBookings.length; i++)
            {
                if(state.hotelBookings[i].id === action.payload.id){
                    state.hotelBookings[i].description = action.payload.description;
                    state.hotelBookings[i].address = action.payload.address;
                    state.hotelBookings[i].hotelName = action.payload.hotelName;
                    state.hotelBookings[i].clientName = action.payload.clientName;
                }
            }
            return {...state, hotelBookings:[...state.hotelBookings]}
        default:
            return state;
    }
}