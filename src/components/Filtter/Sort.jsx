import React from 'react'
import "./filter.css"
export default function Sort() {
    return(
        <>
    <span className='sortBy'>Sort by</span>
    <select className="form-select" aria-label="Default select example">
    <option selected>Relavence</option>
    <option value="rating">Average Customer Rating</option>
    <option value="lowtohigh">Price : Low to High</option>
    <option value="hightolow">Price : High to Low</option>
    <option value="discount">Discount</option>
    </select>
    </>
    )

}








