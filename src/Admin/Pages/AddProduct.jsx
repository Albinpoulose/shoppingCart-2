import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [productCateg, setProductCateg] = useState("BIKE");
  const [ProductName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productImg, setProductImg] = useState("");
  const [btnLoading,setBtnLoading] = useState(false);

  const handleSubmit = () => {
    setBtnLoading(true);
    // console.log(
    //   productCateg,
    //   ProductName,
    //   productPrice,
    //   productDesc,

    // );

    const formData = new FormData();
    formData.append("file", productImg);
    formData.append("upload_preset", "shoppingcart");
    axios
      .post("https://api.cloudinary.com/v1_1/albin12342/image/upload", formData)
      .then((response) => {
        // console.log(response.data.secure_url);
        const productUrl = response.data.secure_url;

        const data = {
          productCateg,
          ProductName,
          productPrice,
          productDesc,
          productUrl,
        };
        axios.post(
          "http://localhost:4000/admin/addProduct",
          data).then((response) => {
            console.log(response.data);
            setBtnLoading(false);
          })
      });
  };

  return (
    <div className="">
    <div className="h-screen w-screen overflow-auto py-10 bg-slate-200 flex flex-col justify-center items-center">
      <div className=" p-3 flex flex-col space-y-1 rounded-sm">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select Category</span>
          </label>
          <select
            value={productCateg}
            onChange={(e) => setProductCateg(e.target.value)}
            className="select select-bordered select-sm"
          >
            <option value="BIKE">BIKE</option>
            <option value="ACCESSORIES">ACCESSORIES</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs input-sm"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <input
            onChange={(e) => setProductPrice(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs input-sm"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          {/* <input
            onChange={(e) => setProductDesc(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs input-sm"
          /> */}
          <textarea 
          onChange={(e) => setProductDesc(e.target.value)}
          className="textarea textarea-bordered" placeholder="Bio"></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Upload Image</span>
          </label>
          <input
            onChange={(e) => setProductImg(e.target.files[0])}
            type="file"
            placeholder="Type here"
            className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-emerald-500
            hover:file:bg-violet-100 "
          />
        </div>
      </div>
      {productImg && (
        <div>
          <img
            className="w-64 h-fit"
            src={URL.createObjectURL(productImg)}
            alt="product view"
          />
        </div>
      )}
      <div className="mt-2">
        <button onClick={handleSubmit} className={btnLoading ? "btn btn-wide btn-sm loading":"btn btn-wide btn-sm "}>
          ADD PRODUCT
        </button>
      </div>
    </div>
    </div>
  );
};

export default AddProduct;
