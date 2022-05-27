import {DAT_CUOC, PLAY_GAME} from '../types/xucXacType'

export const datCuocTaiAction = (banChon) => {
    return{
        type: DAT_CUOC,
        banChon: true,
    }
};
export const datCuocXiuAction = (banChon) => {
    return{
        type: DAT_CUOC,
        banChon: false,
    }
};

export const playGameAction = () => {
    return{
        type: PLAY_GAME,
    }
};