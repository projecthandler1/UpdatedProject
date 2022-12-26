import React from "react";
import { useState } from "react";
// import image_car from "./image_car.jpg";
import "./Sender.css";

var data = require("./Cit.json");
// var data = require("./tbl_country.json");
function Ciity() {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
  return (
    <>
       <div>
       <input
            className="mx-auto text-center w-[280px] px-6 h-12 my-1 border border-1 outline-blue-600 border-gray-200 rounded-lg "
            type="text"
            placeholder="Enter The City"
            value={value}
            onChange={onChange}
          />
          <div className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.name.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 3)
              .map((item) => (
                <div
                  onClick={() => onSearch(item.name)}
                  className="dropdown-row"
                  key={item.id}
                >
                  {item.name}
                </div>
              ))}
          </div>
      </div>
    </>
  );
}
export default Ciity;
