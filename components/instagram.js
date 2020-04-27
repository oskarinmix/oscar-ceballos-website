import React, { Fragment, useEffect, useState } from "react";
const InstaFeed = props => {
  const [state, setState] = useState();

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  async function fetchMyAPI() {
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/oskarinmix/instagram/RxqwzXwFlBIEYhxo",
        {
          method: "get",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const json = await response.json();
      json.data = shuffle(json.data);
      setState(json);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <React.Fragment>
      <div style={{ display: "flex", "flex-shrink": "1" }}>
        {state
          ? state.data.map((item, index) =>
              item.media_type != "VIDEO" ? (
                <div key={index}>
                  {" "}
                  <img src={item.media_url} style={{ height: "100px" }} />
                </div>
              ) : null
            )
          : null}
      </div>
    </React.Fragment>
  );
};
export default InstaFeed;
