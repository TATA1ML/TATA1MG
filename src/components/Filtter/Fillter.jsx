import "./filter.css"
import Fillterbox from "./Fillterbox"
import Sort from "./Sort"
import { useState, useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
// import {ProductFormAction,UsesAction} from "../../redux/action/productAction"
import {BrandAction} from "../../redux/action/brandAction"
export default function Fillter() {

  const dispatch = useDispatch();

  const brandsReducer = useSelector(state=>state.brandsReducer)
  console.log(brandsReducer)
  const {brands} = brandsReducer
  console.log("brands aara h bhut ",brands)
  useEffect(()=>{
    dispatch(BrandAction())
  },[dispatch])
  return (
    <>
    <Sort />
    <div className="filter-page">
      <div className="filter-title">
          <h4 className="filter-Name">FILTERS</h4>
      </div>
      <Fillterbox API={brands} title="BRANDS"/>
      <Fillterbox API={brands} title="DISCOUNT"/>
      <Fillterbox  API={brands} title="PRODUCT FORM"/>
      <Fillterbox API={brands}title="USES"/>
    </div>
    </>
  )
}
