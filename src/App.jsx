import React from "react";
import { useState } from 'react';
import TODO from "./TODO";
import ShowTODO from "./ShowTODO";

const App = () => {
    const [data, setData] = useState([]);
    return(
        <div>
            <TODO data={data} setData={setData}/>
            <ShowTODO data={data} setData={setData}/>
        </div>
    );
};

export default App;