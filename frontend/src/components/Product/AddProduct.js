import React from "react";

const AddProduct = () => {
  return (
    <div>
      <div>
        <h1 className="title">Product</h1>
        <h2 className="subtitle">Add New Product</h2>
        <div className="card is-shadowless">
          <div className="card-content">
            <div className="content">
              <form>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input type="text" className="input" placeholder="Name" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Price</label>
                  <div className="control">
                    <input type="text" className="input" placeholder="Price" />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-success">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
