import React from "react";
import '../products.css';

export function Profile(){
    const handleLogout = () => {
        window.location.href = "http://localhost:3000/auth/logout";
    };
    return (
        <div className="products">
            <span className="message">Hexagonal by express</span>
                <div className="container">
                    <div className="admin-product-form-container">
                        <form id="myForm" action="/home" method="POST" encType="multipart/form-data">
                            <h3>add a new Product</h3>
                            <input type="text" placeholder="Enter the product name" name="name" className="box" />
                            <input type="text" placeholder="Enter the brand of the product" name="brand" className="box" />
                            <input type="text" placeholder="Enter the product description" name="description" className="box" />
                            <input type="file" accept="image/png, image/jpeg, image/jpg" name="product_image" className="box" />
                            <input type="submit" className="btn" name="add" value="add" />
                        </form>
                    </div>
                    <div className="product-display">
                        <table className="product-display-table">
                            <thead>
                                <tr>
                                    <td>Product name</td>
                                    <td>Product brand</td>
                                    <td>Product description</td>
                                    <td>Accion</td>
                                </tr>
                            </thead>
                            <tbody id="myTbody">
                                <tr>
                                    <td><img src="//" height="100" alt="" /></td>
                                    <td contentEditable></td>
                                    <td></td>
                                    <td>
                                        <a href="#" className="btn"> edit </a>
                                        <a href="#" className="btn"> delete </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}