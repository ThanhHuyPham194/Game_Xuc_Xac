import React from 'react'
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import style from "./BaiTapGameXucXac.module.css";

export default function BaiTapGameXucXac() {
  return (
      <div className={`${style["game-xuc-xac"]} `}>
        <div className="container">
          <h3 className="display-4 text-center pt-3 mb-5">Bài tập game xúc xắc</h3>
          <XucXac />
          <KetQuaTroChoi />
        </div>
      </div>
)
}
