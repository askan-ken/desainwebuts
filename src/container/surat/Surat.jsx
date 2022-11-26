import React, { useState } from "react";
import "./surat.css";

const Surat = () => {
  const filter1 = { "exaltG.Ju": { $eq: true } };
  const [filter, setFilter] = useState(JSON.stringify(filter1));

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Terima Kasih");
    window.open(`/getfilteredrecords/${filter}`);
  };
  return (
    <div className="desa__surat" id="surat">
      <form onSubmit={handleSubmit}>
        <div className="desa__surat-form">
          <div className="desa__surat-form-input">
            <label htmlFor="name">
              <p>Nama Lengkap</p>
            </label>
            <input type="nama" placeholder="Nama sesuai KTP" />
          </div>
          <div className="desa__surat-form-input">
            <label htmlFor="email">
              <p>Alamat Email</p>
            </label>
            <input type="email" placeholder="contoh@contoh.com" />
          </div>
          <div className="desa__surat-form-input">
            <label htmlFor="nomor">
              <p>Nomor Handphone</p>
            </label>
            <input
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="+628123456789"
            />
          </div>
        </div>
        <div className="desa__surat-form-alamat">
          <label htmlFor="alamat"></label>
          <p>Alamat</p>
          <input name="alamat" placeholder="Alamat" type="text" />
          <div />
          <input name="nomorrumah" placeholder="Nomor Rumah" type="text" />
          <div />
          <input name="kota" placeholder="Kota" type="text" />
          <div />
          <input name="kode" placeholder="Kode Pos" type="text" />
        </div>
        <div className="desa__surat-form-keluhan">
          <label htmlFor="keluhan">
            <p>Keluhan dan Saran</p>
          </label>
          <input
            type="textarea"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            rows={150}
            cols={50}
            placeholder="Keluhan dan Saran Anda"
          />
        </div>
        <div className="desa__surat-form-btn">
          <input type="submit" value="Kirim" />
        </div>
      </form>
    </div>
  );
};

export default Surat;
