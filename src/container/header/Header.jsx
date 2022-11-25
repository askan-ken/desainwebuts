import React from "react";
import "./header.css";
import {people, lamp} from '../../assets/index.js'



const Header = () => {
  return (
    <div className="desa__header section__padding" id="home">
      <div className="desa__header-content">
        <h1 className="gradient__text">
          Pentingnya Sebuah Website Untuk Instansi Kepemerintahan
        </h1>
        <p>Penggunaan internet untuk instansi pemerintahan bisa dimanfaatkan sebagai media penyampaian informasi kepada masyarakat. Di mana, informasi tersebut nantinya dipublikasikan melalui website resmi pemerintah sehingga masyarakat pun bisa mengetahui semua info penting dari pemerintah.
        </p>
        <div className="desa__header-content__input">
          <input type="email" placeholder="Chat dengan admin" />
          <button type="button">Kirim</button>
        </div>
        <div className="desa__header-content__people">
          <img src={people} alt="people" />
          <p>1.600 orang telah mengunjungi website sejak 24 jam terakhir</p>
        </div>
      </div>
        <div className="desa__header-img">
          <img src={lamp} alt="lampung" />
        </div>
    </div>
  );
};

export default Header;
