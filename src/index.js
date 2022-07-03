import React from "react";
import ReactDom from "react-dom";
import { useEffect, useState } from "react";
// components
import { Navigation } from "./navigation.js";
import { Loading } from "./loading.js";

// css
import "./index.css";

function App() {
  const [userData, setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const url = "https://course-api.com/react-tabs-project";
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="main-container">
      <h1 className="main-heading">Experience</h1>
      <Navigation data={userData} />
      <button className="more-info-btn">more info</button>
    </div>
  );
}

ReactDom.render(<App />, document.querySelector("#root"));
