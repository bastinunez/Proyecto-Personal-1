import React,{useContext} from "react";
import HomeList from "../components/home/index.js";
import AutenticarContext from "../context/AutenticarContext.js";

const Home = () => {
  return (
    <div className="container-fluid" style={{backgroundColor: "gray",padding:"0",margin:"0"}}>
      <div
        className="container-fluid"
        style={{
          padding:"0",
          margin:"0",
          height: "90vh",
          width: "auto",
          color: "black",
        }}
      >
        <HomeList/>
      </div>
    </div>
  );
};

export default Home;