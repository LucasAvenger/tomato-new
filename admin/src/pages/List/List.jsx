import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import { toast } from "react-toastify"


const List = ({ url }) => {


    const [list, setList] = useState([]);
    //vai dar get nos itens /api/food/list
    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        if (response.data.success) {
            setList(response.data.data)
        }
        else {
            toast.error("Error")
        }
    }
    //vai buscar o id  foodId e remover
    const removeFood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
        await fetchList();
        if (response.data.sucess) {
            toast.success(response.data.message)
        }
        else {
            toast.error("Erro");
        }
    }
    useEffect(() => {
        fetchList();
    }, [])

    return (
        <div className='list add flex-col'>
            <p>lista de todas as comidas</p>

            <div className='list-table'>
                <div className="list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>

                {list.map((item, index) => {
                    return (
                        //repassando as propriedades dentro dos paragrafos
                        //nome categoria preço e ação remover
                        <div key={index} className='list-table-format'>
                            <img src={`${url}/images/` + item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p onClick={() => removeFood(item._id)} className='cursor'>x</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List
