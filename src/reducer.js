export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    token: 'BQBwC1WG4ZSqETFa7THoWjVBTPzIK5FD8Xqa0N2rSEcOm_YXrR…WF50vpFRXOmb-R8_clnU_6iRgdGpmENUGU6sBG6ivEp5BQe4O',
  }

const reducer = (state, action) => {
    console.log(action)

    // Action -> type, [payLoad]

    switch (action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
            
        default:
            return state;
    }
}

export default reducer;