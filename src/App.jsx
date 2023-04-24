import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";


const App = () => (
    <>
        <h1 className='heading'> List of Top Webseries on Netflix </h1>
        {Sdata.map((val, index) => {
            return (
                <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                />
            );
        })}
    </>
);
export default App;