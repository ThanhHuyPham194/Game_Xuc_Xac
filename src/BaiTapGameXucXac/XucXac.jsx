import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { datCuocAction } from "../Redux/actions/XucXacAction";
export default function XucXac() {
  const arrXucXac = useSelector((rootReducer) => rootReducer.XucXacReducer.mangXucXac);
  const dispatch = useDispatch()
  const renderKetQua = () => {
    let tongDiem = arrXucXac.reduce((diem, kq) => {
      return diem + kq.diem;
    }, 0);
    let ketQua = tongDiem > 11 ? "Tài" : "Xỉu";
    return (
      <p className="display-4 text-center">
        {ketQua} - {tongDiem}
      </p>
    );
  };

  return (
    <div className="row mt-3 text-center">
      <div className="col-4">
        <button className="btn btn-danger">
          <div
            className="display-4 p-5"
            onClick={() => {
              // Dùng dispatch để gửi dữ liệu lên redux
              dispatch(datCuocAction());
            }}
          >
            Tài
          </div>
        </button>
      </div>
      <div className="col-4 ">
        {arrXucXac.map((src, index) => {
          return (
            <img width={50} height={50} src={src.src} key={index} alt="..." />
          );
        })}
        <div className="mt-3">{renderKetQua()}</div>
      </div>
      <div className="col-4">
        <button className="btn btn-danger">
          <div
            className="display-4 p-5"
            onClick={() => {
              // Dùng dispatch để gửi dữ liệu lên redux
              dispatch(datCuocAction());
            }}
          >
            Xỉu
          </div>
        </button>
      </div>
    </div>
  );
}
