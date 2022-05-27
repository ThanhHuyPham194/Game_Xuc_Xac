import { combineReducers, createStore} from 'redux';
import { XucXacReducer } from './reducers/XucXacReducer.jsx';
const rootReducer = combineReducers({
    // Các state của ứng dụng đặt tại đây
    XucXacReducer
});


export const store = createStore(rootReducer);