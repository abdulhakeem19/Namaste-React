import { IMG_CDN_URL } from "../constant";
const RestaurentCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {

    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="food_img" />
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating}</h4>
        </div>
    )
}

export default RestaurentCard;