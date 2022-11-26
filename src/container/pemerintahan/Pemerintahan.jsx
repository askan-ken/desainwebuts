import React, { useState } from "react";
import "./pemerintahan.css";

const Pemerintahan = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="desa__pem section__padding" id="pemerintahan">
      <div className="desa__pem-feature">
        <h1 className="gradient__text">Pemerintahan Desa</h1>
        <p>
          Pemerintahan Desa adalah penyelenggaraan urusan pemerintahan dan
          kepentingan masyarakat setempat dalam sistem pemerintahan Negara
          Kesatuan Republik Indonesia.
        </p>
      </div>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Visi dan Misi
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Pemerintah Desa
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Badan Permusyawarahan
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h1 className="gradient__text">Visi & Misi</h1>
            <hr />
            <p>
              <h4 className="gradient__text">Visi</h4>
              <p>
                Terwujudnya masyarakat yang mandiri, demokratis dan handal dalam
                SDM serta menjadi pusat keunggulan disegala bidang untuk
                meningkatkan ekonomi masyarakat dalam pembangunan di era
                pemerintahan Global.
              </p>
              <h4 className="gradient__text">Misi</h4>
              <ul>
                <li>Meningkatkan pendapatan dan kesejahteraan masyarakat melalui peningkatan produksi pertanian.</li>
                <li>Eberdayakan Home Industri</li>
                <li>Meningkatkan Sumberdaya Manusia, di Bidang Ilmu Pengetahuan dan Teknologi (IPTEK) yang berbasis pada bidang keagamaan.</li>
                <li>Meningkatkan Etos Kerja.</li>
                <li>Mendorong kemandirian.</li>
                <li>Meningkatkan kondisi kamtibmas.</li>
                <li>Pembangunan sector pertanian.</li>
                <li>Peningkatan ekonomi masyarakat.</li>
              </ul>
            </p>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h1 className="gradient__text">
              Susunan Organisasi dan Tata Kerja Pemerintahan Desa
            </h1>
            <hr />
            <p>
              <h4 className="gradient__text">
                Kepala Desa bertugas menyelenggarakan Pemerintahan Desa,
                melaksanakan pembangunan, pembinaan kemasyarakatan, dan
                pemberdayaan masyarakat. Untuk melaksanakan tugas Kepala Desa
                memiliki fungsi-fungsi sebagai berikut:
              </h4>
              <ul>
                <li>
                  Melaksanakan urusan ketatausahaan seperti tata naskah,
                  administrasi surat menyurat, arsip, dan ekspedisi.
                </li>
                <li>
                  Melaksanakan urusan umum seperti penataan administrasi
                  perangkat desa, penyediaan prasarana perangkat desa dan
                  kantor, penyiapan rapat, pengadministrasian aset,
                  inventarisasi, perjalanan dinas, dan pelayanan umum.
                </li>
                <li>
                  Melaksanakan urusan keuangan seperti pengurusan administrasi
                  keuangan, administrasi sumber-sumber pendapatan dan
                  pengeluaran, verifikasi administrasi keuangan, dan admnistrasi
                  penghasilan Kepala Desa, Perangkat Desa, BPD, dan lembaga
                  pemerintahan desa lainnya.
                </li>
                <li>
                  Melaksanakan urusan perencanaan seperti menyusun rencana
                  anggaran pendapatan dan belanja desa, menginventarisir
                  data-data dalam rangka pembangunan, melakukan monitoring dan
                  evaluasi program, serta penyusunan laporan.
                </li>
              </ul>
              <h4 className="gradient__text">
                Kepala urusan berkedudukan sebagai unsur staf sekretariat.
                Kepala urusan bertugas membantu Sekretaris Desa dalam urusan
                pelayanan administrasi pendukung pelaksanaan tugas-tugas
                pemerintahan. Untuk melaksanakan tugas kepala urusan mempunyai
                fungsi:
              </h4>
              <ul>
                <li>
                  Kepala urusan tata usaha dan umum memiliki fungsi seperti
                  melaksanakan urusan ketatausahaan seperti tata naskah,
                  administrasi surat menyurat, arsip, dan ekspedisi, dan
                  penataan administrasi perangkat desa, penyediaan prasarana
                  perangkat desa dan kantor, penyiapan rapat, pengadministrasian
                  aset, inventarisasi, perjalanan dinas, dan pelayanan umum.
                </li>
                <li>
                  Kepala urusan keuangan memiliki fungsi seperti melaksanakan
                  urusan keuangan seperti pengurusan administrasi keuangan,
                  administrasi sumber-sumber pendapatan dan pengeluaran,
                  verifikasi administrasi keuangan, dan admnistrasi penghasilan
                  Kepala Desa, Perangkat Desa, BPD, dan lembaga pemerintahan
                  desa lainnya.
                </li>
                <li>
                  Kepala urusan perencanaan memiliki fungsi mengoordinasikan
                  urusan perencanaan seperti menyusun rencana anggaran
                  pendapatan dan belanja desa, menginventarisir data-data dalam
                  rangka pembangunan, melakukan monitoring dan evaluasi program,
                  serta penyusunan laporan.
                </li>
              </ul>
              <h4 className="gradient__text">
                Kepala Kewilayahan atau sebutan lainnya berkedudukan sebagai
                unsur satuan tugas kewilayahan yang bertugas membantu Kepala
                Desa dalam pelaksanaan tugasnya di wilayahnya. Untuk
                melaksanakan tugas Kepala Kewilayahan/Kepala Dusun memiliki
                fungsi:
              </h4>
              <ul>
                <li>
                  Pembinaan ketentraman dan ketertiban, pelaksanaan upaya
                  perlindungan masyarakat, mobilitas kependudukan, dan penataan
                  dan pengelolaan wilayah.
                </li>
                <li>Mengawasi pelaksanaan pembangunan di wilayahnya.</li>
                <li>
                  Melaksanakan pembinaan kemasyarakatan dalam meningkatkan
                  kemampuan dan kesadaran masyarakat dalam menjaga
                  lingkungannya.
                </li>
                <li>
                  Melakukan upaya-upaya pemberdayaan masyarakat dalam menunjang
                  kelancaran penyelenggaraan pemerintahan dan pembangunan.
                </li>
              </ul>
              <h4 className="gradient__text">
                Kepala seksi berkedudukan sebagai unsur pelaksana teknis. Kepala
                seksi bertugas membantu Kepala Desa sebagai pelaksana tugas
                operasional. Untuk melaksanakan tugas Kepala Seksi mempunyai
                fungsi:
              </h4>
              <ul>
                <li>
                  Kepala seksi pemerintahan mempunyai fungsi melaksanakan
                  manajemen tata praja Pemerintahan, menyusun rancangan regulasi
                  desa, pembinaan masalah pertanahan, pembinaan ketentraman dan
                  ketertiban, pelaksanaan upaya perlindungan masyarakat,
                  kependudukan, penataan dan pengelolaan wilayah, serta
                  pendataan dan pengelolaan Profil Desa.
                </li>
                <li>
                  Kepala seksi kesejahteraan mempunyai fungsi melaksanakan
                  pembangunan sarana prasarana perdesaan, pembangunan bidang
                  pendidikan, kesehatan, dan tugas sosialisasi serta motivasi
                  masyarakat di bidang budaya, ekonomi, politik, lingkungan
                  hidup, pemberdayaan keluarga, pemuda, olahraga, dan karang
                  taruna.
                </li>
                <li>
                  Kepala seksi pelayanan memiliki fungsi melaksanakan penyuluhan
                  dan motivasi terhadap pelaksanaan hak dan kewajiban
                  masyarakat, meningkatkan upaya partisipasi masyarakat,
                  pelestarian nilai sosial budaya masyarakat, keagamaan, dan
                  ketenagakerjaan.
                </li>
              </ul>
            </p>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2 className="gradient__text">Datanya Belom ada huhuhuhuh</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              aliquid laboriosam omnis praesentium dolores inventore officia
              accusantium molestiae doloribus repudiandae illo, quis
              perspiciatis accusamus aliquam facere aspernatur vitae quas odio?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pemerintahan;
