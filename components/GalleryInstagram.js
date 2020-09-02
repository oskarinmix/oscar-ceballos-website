import React, { Fragment, useState, useEffect } from "react";
// import "./galleryinstagram.css";
const GalleryInstagram = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    const obtenerData = async () => {
      try {
        const respuesta = await fetch(
          "https://v1.nocodeapi.com/oskarinmix/instagram/RxqwzXwFlBIEYhxo",
          {
            method: "get",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const json = await respuesta.json();
        setData(json);
        localStorage.setItem("data-instagram", JSON.stringify(json));
      } catch (error) {
        console.log("error", error);
      }
    };
    const local = localStorage.getItem("data-instagram");
    if (local) {
      setData(JSON.parse(local));
    } else {
      obtenerData();
    }
  }, []);

  return (
    <React.Fragment>
      <div
        className="d-flex instagallery"
        style={{
          height: "100px",
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      >
        {data
          ? data.data.map((item, index) =>
              item.media_type === "IMAGE" ? (
                <div key={index}>
                  <img src={item.media_url} style={{ height: "100px" }} />
                </div>
              ) : null
            )
          : null}
      </div>
    </React.Fragment>
  );
};
export default GalleryInstagram;
