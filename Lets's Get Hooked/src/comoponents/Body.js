
import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

  // Hooks
  const [ListOfResturents,setListOfResturents]=useState(resList)


    return (
      <div className="body">
        <div className="search-container">
          <input type="text" placeholder="Search Food or Restaurant" />
          <button>Search</button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filterList=ListOfResturents.filter((res)=>res.data.avgRating>4);
            // hooks updating 
            setListOfResturents(filterList)

          }}>Top Rated Resturent</button>
        </div>
        <div className="res-container">
          {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          
          <RestaurantCard resData={resList[11]} />
          <RestaurantCard resData={resList[12]} /> */}
  
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
  
          {ListOfResturents.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
  
          {/* // * or */}
  
          {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}
  
          {resList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
  
          {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
           */}
        </div>
      </div>
    );
  };
  export default Body;