import React, { useState } from "react";
import requests from "../utils/request";

export default function Home() {
  const [countryList, setCountryList] = useState([]);
  countryList.length === 0 &&
    requests.getData().then((obj) => setCountryList(obj.data));

  return <div>test</div>;
}
