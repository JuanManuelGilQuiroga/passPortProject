import {React, useEffect, useState }  from "react";
import { useLoaderData, Form } from "react-router-dom";
import axios from 'axios';
import '../products.css';

export const productsLoader = async () => {
    let res = await fetch(`http://localhost:3000/products`);
    let data = await res.json();
    console.log(data);
    return data
}

export const productsAction = async ({request}) => {
    let data = Object.fromEntries(await request.formData())
    let res = await fetch(`http://localhost:3000/product`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: data.name,
            brand: data.brand,
            description: data.description,
        })
    })
    console.log(JSON.stringify(data))
    let product = await res.json()
    window.location.reload();
    return product
}

export function Profile(){
    const data = useLoaderData()
    /*const [products, setProducts] = useState(data.data.length);*/

    console.log(data)
    const handleLogout = () => {
        window.location.href = "http://localhost:3000/auth/logout";
    };

    /*useEffect(async () => {
        const response = await axios.get('/api/products');
        setProducts(response.data);
    }, [products]);*/

    /*const handleSubmit = () => {
        window.location.href = "http://localhost:5173/profile";
    };*/
    return (
        <div className="products">
            <span className="message">Hexagonal by express</span>
                <div className="container">
                    <div className="admin-product-form-container">
                        <Form id="myForm" action="/profile" method="POST" encType="multipart/form-data">
                            <h3>add a new Product</h3>
                            <input type="text" placeholder="Enter the product name" name="name" className="box" />
                            <input type="text" placeholder="Enter the brand of the product" name="brand" className="box" />
                            <input type="text" placeholder="Enter the product description" name="description" className="box" />
                            <input type="file" accept="image/png, image/jpeg, image/jpg" name="product_image" className="box" />
                            <input type="submit" className="btn" name="add" value="add"  />
                        </Form>
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
                            
                            {data.status == 400 ? "" : data.data.map(producto => {
                                return (
                                    <tbody id="myTbody">
                                        <tr>
                                            <td>{producto.name}</td>
                                            <td>{producto.brand}</td>
                                            <td>{producto.description}</td>
                                            <td>
                                                <a href="#" className="btn"> edit </a>
                                                <a href="#" className="btn"> delete </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    </div>
                </div>
        </div>
    )
}