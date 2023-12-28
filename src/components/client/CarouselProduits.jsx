import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getArticles } from '../../features/articleslice';
import CarouselProd from './CarouselProd';

const CarouselProduits = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getArticles());
    }, [dispatch]);
    return (
        <div>
            <h3>Les produits</h3>
            <CarouselProd />

        </div>
    );
};
export default CarouselProduits;