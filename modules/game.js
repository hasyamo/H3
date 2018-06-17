const initialState = {
    message: 'HELLO',
    games: []
};

export const gameActions = {
    updateMessage: (msg) => ({ type: 'UPDATE_MESSAGE', data: msg }),
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_MESSAGE':
            console.info('UpdateMessage');
            return Object.assign({}, state, {
                message: action.data
            });
        case 'Add':
            var games = state.games;
            var name = 'game' + (games.length + 1);
            games.push({name:name});
            return Object.assign({}, state, {
                games: games
            });
        default:
            return state;
    }
}

