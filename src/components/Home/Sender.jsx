import React from "react";
import { useState } from "react";
import "./Sender.css";
import State from "./State";
import { useNavigate } from "react-router-dom";
import Receiver from "./Receiver";
import Ciity from "./Ciity";
// import country from "./country";
var data = require("./tbl_country.json");
function Sender() {

  const navigate = useNavigate();
  const gotoReceiver = ()=>{
    navigate("/Receiver");
  }
  const [value, SetValue] = useState("");
  const onChange = (event) => {
    SetValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    SetValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
  return (
    <>
      <p class=" text-[7px] md:text-[20px] font-bold mx-8 p-[24px] text-center">
        Start a Journey With US we are always happy to help you
      </p>

      <div className="Sender container mt-10 flex mx-auto items-center justify-center">
        <div className=" sm:ml-[400] md:ml-[520px]  flex flex-col bg-white p-8 rounded-xl md:w-1/4 text-lg relative my-auto">
          {/* <h1 className="font-bold  px-[50px] p-[10px] items-center text-center flex flex-row bg-black text-white my-auto">Start a Journy With US</h1> */}
          <input
            className="mx-auto text-center w-[280px] px-6 h-12 my-1 border border-1 outline-blue-600 border-gray-200 rounded-lg "
            type="text"
            placeholder="Enter The Country"
            value={value}
            onChange={onChange}
          />
          <div className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.country_name.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 7)
              .map((item) => (
                <div
                  onClick={() => onSearch(item.country_name)}
                  className="dropdown-row"
                  key={item.country_id}
                >
                  {item.country_name}
                </div>
              ))}
          </div>

          <div className="mx-auto">
            <State />
          </div>
          <div className="mx-auto"><Ciity/></div> 
          <button class="bg-black hover:bg-green-700 text-white my-2 py-3 px-3 mx-auto rounded-md font-bold w-[280px] "onClick={gotoReceiver}>
            Sent a Request
          </button>
        </div>
      </div>
      
    </>
  );
}
export default Sender;
