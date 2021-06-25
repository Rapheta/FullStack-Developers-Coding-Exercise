const initialState = {
    clients: [],
}

export const ActionTypes = {
    SET_CLIENTS: 'SET_CLIENTS',
    EDIT_CLIENT: 'EDIT_CLIENT',
}

export const ActionCreators = {
    setClients: payload => ({type: ActionTypes.SET_CLIENTS, payload}),
    editClient: payload => ({type: ActionTypes.EDIT_CLIENT, payload}),
}

export default function ClientsReducer(state = initialState, action) {
    switch(action.type)
    {
        case ActionTypes.SET_CLIENTS:
            return { ...state, clients: [...action.payload] };
        case ActionTypes.EDIT_CLIENT:
            for(let i = 0; i < state.clients.length; i++)
            {
                if(state.clients[i].id === action.payload.id){
                    state.clients[i].name = action.payload.name;
                    state.clients[i].address = action.payload.address;
                    state.clients[i].phone = action.payload.phone;
                }
            }
            return {...state, clients:[...state.clients]}
        default:
            return state;
    }
}