import React, { useState } from "react";
import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from "./styles";
import ReactStars from "react-rating-stars-component";
import Skeleton from "../Skeleton";

import restaurante from '../../assets/restaurante-fake.png';

const RestauranteCard = ({restaurant, onClick}) => {
    const [imageLoad, setImageLoaded] = useState(false);

    return(
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor='#e7711c' />
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto 
                setImageLoaded={setImageLoaded}
                src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                onLoad={() => setImageLoaded(true)}
                alt="Foto do restaurante" 
            />        
            {!imageLoad && <Skeleton width="100px" height="100px" />}
        </Restaurant>
    );
};
export default RestauranteCard;