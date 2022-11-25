import React from "react";
import "./footer.css";
import { tanggamus, facebook, wa } from "../../assets/index.js";

const Footer = () => {
  return (
    <div className="desa__footer">
      <div className="desa__footer-content">
        <div className="desa__footer-img">
          <img src={tanggamus} alt="" />
        </div>
        <div className="desa__footer-alamat">
          <h1 className="gradient__text">Pekon Sukanegeri Jaya</h1>
          <p>Jl. M. Kholil No.17</p>
          <p>Kecamatan Talang Padang Kabupaten Tanggamus Provinsi Lampung</p>
          <p>Kode Pos 35377</p>
          <div className="alamat-kontak">
            <p>
              <span class="material-symbols-outlined">call</span>082282441319
            </p>
            <div />
            <p>
              <span class="material-symbols-outlined">mail</span>
              pekonsukanegerijaya@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="desa__footer-social">
        <button className="wa">
          <img src={wa} alt="Whatsapp" />
          Whatsapp
        </button>
        <button className="fb">
          <img src={facebook} alt="Facebook" />
          Facebook
        </button>
      </div>
      <div className="desa__footer-copyright">
        <p>
          <span class="material-symbols-outlined">copyright</span>Kelompok 8 Desain Web
        </p>
      </div>
    </div>
  );
};

export default Footer;
