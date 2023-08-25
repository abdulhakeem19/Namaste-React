import { useState, useEffect } from 'react';
import { restaurantsList } from '../constant';
import RestaurentCard from './RestaurentCard';
import Skimmer from './Skimmer';

const filter = (searchInput, restaurents) => {
  return restaurents.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
};

const BodyComponent = () => {
  const [allRestaurents, setAllRestaurents] = useState('');
  const [FilteredRestaurents, setFilteredRestaurents] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  //   not render component (Early Return)
  if (!allRestaurents) return null;

  if (FilteredRestaurents?.length === 0) return <h1>No result found!</h1>;

  return allRestaurents?.length === 0 ? (
    <Skimmer />
  ) : (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            const data = filter(searchInput, allRestaurents);
            setFilteredRestaurents(data);
          }}
        >
          Submit
        </button>
      </div>
      <div className="restaurentList">
        {FilteredRestaurents.map((restaurant) => {
          return (
            <RestaurentCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
