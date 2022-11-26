import React from 'react'
import './data.css'



const Data = () => {
  return (
    <div className="desa__data section__padding" id="data">
      <div className="dropdown">
        <button>
          Statistik Penduduk
          <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div className="dropdown-menu" id='content1'>
          <a href="#" className='active'>Rentang Usia</a>
          <a href="#">Pendidikan</a>
          <a href="#">Pekerjaan</a>
          <a href="#">Jenis Kelamin</a>
        </div>
      </div>
      <div className="dropdown">
        <button>
          Statistik Keluarga
          <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div className="dropdown-menu">
          <a href="#">Rentang Usia</a>
          <a href="#">Pendidikan</a>
          <a href="#">Pekerjaan</a>
          <a href="#">Jenis Kelamin</a>
        </div>
      </div>
      <div className="dropdown">
        <button>
          Statistik Bantuan
          <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div className="dropdown-menu">
          <a href="#">Rentang Usia</a>
          <a href="#">Pendidikan</a>
          <a href="#">Pekerjaan</a>
          <a href="#">Jenis Kelamin</a>
        </div>
      </div>
      <div className="dropdown">
        <button>
          Statistik lainnya
          <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div className="dropdown-menu">
          <a href="#">Rentang Usia</a>
          <a href="#">Pendidikan</a>
          <a href="#">Pekerjaan</a>
          <a href="#">Jenis Kelamin</a>
        </div>
      </div>
    </div>
  );
}

export default Data
