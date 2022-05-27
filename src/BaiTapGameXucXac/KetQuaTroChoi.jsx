import React from "react";
import { useDispatch, useSelector } from "react-redux";
// kết nối redux
import {playGameAction} from "../Redux/actions/XucXacAction";

export default function KetQuaTroChoi() {
  const {banChon, tongSoBanChoi, soBanThang} = useSelector((rootReducer)=>rootReducer.XucXacReducer);
  const dispatch = useDispatch()
  return (
    <div className="display-4 mt-5 text-center">
      <div>
        <span>
          Bạn Chọn:{" "}
          <span className="text-success">{banChon ? "Tài" : "Xỉu"}</span>
        </span>
      </div>
      <div>
        <span>
          Tổng số bàn thắng: <span className="text-danger">{soBanThang}</span>
        </span>
      </div>
      <div>
        <span>
          Tổng số bàn chơi:{" "}
          <span className="text-warning">{tongSoBanChoi}</span>
        </span>
      </div>
      <button className="btn bg-success mt-5">
        <div
          className="text-white pl-5 pr-5 pt-2 pb-2 display-4 "
          onClick={() => {
            //Gửi action lên redux
           dispatch(playGameAction());
          }}
        >
          Play Game
        </div>
      </button>
    </div>
  );
}
