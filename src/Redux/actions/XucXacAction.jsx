import {DAT_CUOC, PLAY_GAME} from '../types/xucXacType'

export const datCuocAction = () => {
    return{
        type: DAT_CUOC,
        banChon: true,
    }
};
export const playGameAction = () => {
    return{
        type: PLAY_GAME,
    }
};