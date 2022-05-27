import { DAT_CUOC, PLAY_GAME } from "../types/xucXacType";

const stateDefault = {
    banChon:false, // true : tài | false: xỉu
    soBanThang:0,
    tongSoBanChoi :0,
    mangXucXac :[
        {diem:1, src : './img/1.png'},
        {diem:2, src : './img/2.png'},
        {diem:3, src : './img/3.png'},
    ]
}

export const XucXacReducer = (state = stateDefault,action) => {
    switch (action.type){
        case DAT_CUOC : {
            state.banChon =  action.banChon;
            return {...state};
        }
        case PLAY_GAME: {
            console.log(123)
            // Bước 1: Xử lý tạo mảng xúc xắc random
            let mangXXNN = [];
            for (let i = 1; i <= 3 ; i++){
                // Mỗi lần chạy mình sẽ tạo ra 1 con số ngẫu nhiên 
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                // Từ số ngẫu nhiên tạo ra object xúc xắc
                let xxnn = {diem: soNgauNhien,src:`./img/${soNgauNhien}.png`};
                // Thêm object ngẫu nhiên vào mảng ngẫu nhiên
                mangXXNN.push(xxnn);
            }
            // Cập nhật lại state (setState)
            state.mangXucXac = mangXXNN;
            // Bước 2: Tính điểm thắng thua
            let tongDiem = mangXXNN.reduce((diem, xucXac)=>{
                return diem + xucXac.diem;
            },0)
            // Bước 3: Tăng bàn chơi lên 1
            if ((state.banChon && tongDiem > 11) || (!state.banChon && tongDiem <= 11)){
                state.soBanThang += 1;
            }
            state.tongSoBanChoi += 1;
            return {...state};
        }
        default: return state;// default là trường hợp chưa gọi gì đến hàm reducer này
    }
}

