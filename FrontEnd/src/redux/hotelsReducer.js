const initialState = {
    hotels: [],
}

export const ActionTypes = {
    SET_HOTELS: 'SET_HOTELS',
    EDIT_HOTEL: 'EDIT_HOTEL',
}

export const ActionCreators = {
    setHotels: payload => ({type: ActionTypes.SET_HOTELS, payload}),
    editHotel: payload => ({type: ActionTypes.EDIT_HOTEL, payload}),
}

export default function HotelsReducer(state = initialState, action) {
    switch(action.type)
    {
        case ActionTypes.SET_HOTELS:
            return { ...state, hotels: [...action.payload] };
        case ActionTypes.EDIT_HOTEL:
            for(let i = 0; i < state.hotels.length; i++)
            {
                if(state.hotels[i].id === action.payload.id){
                    state.hotels[i].name = action.payload.name;
                    state.hotels[i].address = action.payload.address;
                }
            }
            return {...state, hotels:[...state.hotels]}
        default:
            return state;
    }
}