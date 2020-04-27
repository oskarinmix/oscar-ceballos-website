import React, { Fragment, useState, useEffect } from "react";
const GalleryInstagram = props => {
  const [data, setData] = useState();

  const obtenerData = async () => {
    try {
      // SI sale bien
      const respuesta = await fetch(
        "https://v1.nocodeapi.com/oskarinmix/instagram/RxqwzXwFlBIEYhxo",
        {
          method: "get",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const json = await respuesta.json();
      console.log(json);
      setData(json);
    } catch (error) {
      // error
      console.log("error", error);
    }
  };
  useEffect(() => {
    // OBtener la data desde la API
    obtenerData();
  }, []);

  return (
    <React.Fragment>
      <div className="d-flex" style={{ height: "100px", width: "100%" }}>
        {data
          ? data.data.map((item, index) => ( item.media_type === 'IMAGE' ? (<div >
               
                <img
                  src={item.media_url}
                  key={index}
                  style={{ height: "100px" }}
                />
              </div>) : null
              
            ))
          : null}
      </div>
    </React.Fragment>
  );
};
export default GalleryInstagram;
