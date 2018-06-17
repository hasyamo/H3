import moment from 'moment';
import _ from 'lodash';

var ja = require('moment/locale/ja'); 
moment.updateLocale('ja', ja);
  

const initialState = {
    message: 'HELLO',
    games: [],
    game: {
        title: 'テスト',
        point: 50,
    }
};

export const gameActions = {
    updateMessage: (msg) => ({ type: 'UPDATE_MESSAGE', data: msg }),
    newGame: () => ({type: 'NEW_GAME' }),
    changeGameData: (key, value) => ({
        type: 'CHANGE_DATA',
        key: key,
        value: value
    }),
    selectWinner: (winner) => ({type: 'SELECT_WINNER', data: winner}),
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_MESSAGE':
            return Object.assign({}, state, {
                message: action.data
            });
        case 'NEW_GAME':
            var date = moment().format("YYYYMMDDHHmmss")
            var newState = _.cloneDeep(state);
            newState.game.date = date
            return newState;
            /*
            return Object.assign({}, state, {
                game: {
                    date: date
                }
            });
            */
        case 'CHANGE_DATA':
            var newState = _.cloneDeep(state);
            newState[action.key] = action.value;
            return newState;
            /*
            return Object.assign({}, state, {
                game: {
                    winner: action.data
                }
            });
            */
        case 'SELECT_WINNER':
            return Object.assign({}, state, {
                game: {
                    winner: action.data
                }
            });
        default:
            return state;
    }
}

