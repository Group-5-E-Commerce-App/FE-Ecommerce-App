import React from "react";
import barang from "../assets/barang.png";

const DetailProduk = () => {
  return (
    <div className="w-auto p-20 m-20 shadow-lg bg-white rounded-xl">
      <div className="flex flex-row justify-between">
        <div className="flex justify-center basis-1/3 rounded-lg">
          <img width="300px" src={barang} alt="" />
        </div>
        <div className="basis-1/2">
          <h1 className="text-bold">Nama Produk</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl elit, lacinia eu porta non, dictum ut nisl.</p>
          <h1 className="text-bold mt-3">Rp. 25.000.</h1>
          <div className="flex mt-16 gap-5">
            <label htmlFor="">Qyt</label>
            <input className="bg-gray-100 outline-none" type="number" />
          </div>
          <div className="flex justify-end gap-5 mt-10">
            <button type="submit" className="border-2 border-[#38E54D] bg-[#38E54D] text-white px-2 py-2 w-44 rounded-md hover:bg-transparent hover:text-[#38E54D] font-semibold">
              <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Beli Sekarang
            </button>
            <button type="submit" className="border-2 border-white bg-white text-[#38E54D] px-2 py-2 w-44 rounded-md hover:bg-[#38E54D] hover:text-white font-semibold">
              <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Add To Chart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-bold">Detail Produk</h2>
        <div className="px-10 py-5">
          <ul>
            <li>Kondisi: Baru</li>
            <li>Berat Satuan: 300gr</li>
            <li>Variasi Warna: Merah, Hitam, Abu-abu</li>
          </ul>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos ipsam labore adipisci, explicabo voluptates est necessitatibus itaque temporibus aperiam ab delectus nihil praesentium dolores at qui veritatis ad harum soluta
            eaque illo dignissimos laudantium! Animi saepe illo ipsam est optio odit quo placeat? Dolor blanditiis eaque quam maxime earum.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-bold">Informasi Penting</h2>
        <div className="px-10 py-5">
          <p>GARANSI UANG KEMBALI 100% apabila barang yang kami kirim berbeda dengan barang yang anda pesan atau berbeda dengan foto produk</p>
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;