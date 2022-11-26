import React from 'react'
import Iframe from "react-iframe";
import './wilayah.css'




const Wilayah = () => {
  return (
    <div className="desa__wilayah section__padding" id="wilayah">
      <div className="desa__wilayah-container">
        <h1 className="gradient__text">Wilayah Desa Sukanegeri Jaya</h1>
        <p>Adapun batas wilayah dari Desa Sukanegeri Jaya di anataranya :</p>
        <p>Letak dan Luas Wilayah</p>
        <p>
          Pekon Sukanegeri Jaya merupakan salah satu dari 20 Pekon di wilayah
          Kecamatan Talangpadang, Pekon Sukanegeri Jaya mempunyai luas wilayah
          seluas 60 Ha dengan batasnya sebagai berikut:
        </p>
        <ul>
          <li>
            Sebelah Timur berbatasan dengan Pekon Sukabumi Kec. Talangpadang{" "}
          </li>
          <li>Sebelah Barat berbatasan dengan Pekon Banjarsari Talangpadang</li>
          <li>
            Sebelah Utara berbatasan dengan Pekon Bading Agung Talangpadang
          </li>
          <li>Sebelah Selatan Berbtasan dengan Pekon Sukabumi Talangpadang</li>
        </ul>
      </div>
      <div className="desa__wilayah-maps">
        <h1 className='gradient__text'>Peta Wilayah Desa</h1>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15889.110977962475!2d104.77162464431488!3d-5.374551524512921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e473b3411a09159%3A0xdc1d0c243baed05f!2sSukanegeri%20Jaya%2C%20Kec.%20Talang%20Padang%2C%20Kabupaten%20Tanggamus%2C%20Lampung!5e0!3m2!1sid!2sid!4v1669448246408!5m2!1sid!2sid"
          width="850"
          height="500"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Wilayah