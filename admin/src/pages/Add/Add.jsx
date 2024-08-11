import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify';


//adicionar

const Add = ({ url }) => {


    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Saladas"
    })
    //onChangeHandler com alvo *target de nome e valor
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }
    //onsubmitHandler vai pegar os dados inseridos nos campos 
    //e levar ao servidor 
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Saladas"
            })
            setImage(false)
            toast.success(response.data.message)

        }
        else {
            toast.error(response.data.message)
        }
    }
    ///funcionalidade de onSubmitHandler está 
    //sendo repassada dentro da div <form> para ser levada no servidor
    //
    return (
        <div className="add">
            <form className="flex-col" onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload de imagens</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Nome do produto</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Escreva aqui" />
                </div>
                <div className="add-product-description flex-col">
                    <p>Descrição do produto</p>
                    <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder="Escreva aqui"></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p> Categoria</p>
                        <select onChange={onChangeHandler} name="category">
                            <option value="Saladas">Saladas</option>
                            <option value="Enrolados">Enrolados</option>
                            <option value="Sorvetes">Sorvetes</option>
                            <option value="Sanduiches">Sanduiches</option>
                            <option value="Bolos">Bolos</option>
                            <option value="Veganos">Veganos</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Macarrão">Macarrão</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Preço de produto</p>

                        <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="$20" />
                    </div>
                </div>
                <button type="submit" className="add-btn">dicionar</button>
            </form>
        </div>
    )//submit enviará o formulário
}

export default Add
