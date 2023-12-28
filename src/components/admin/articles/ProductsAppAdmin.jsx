import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getArticles} from "../../../features/articleslice";
import AfficheArticleTable from './AfficheArticleTable';
import Insertarticle from './Insertarticle';

const ProductsAppAdmin = () => {
const dispatch = useDispatch();
useEffect(() => {
dispatch(getArticles());
},[])

return (
<div>
<Insertarticle/>
<AfficheArticleTable/>
</div>
)
}
export default ProductsAppAdmin