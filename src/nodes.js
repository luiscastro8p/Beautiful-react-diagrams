import * as React from "react";

const Ok = () => <div>&#10004;</div>;
const Error = () => <div>&#10005;</div>;

export const Circle = ({ id, data }) => {
  const clickHandler = () => {
    data.clickHandler(data);
  };

  return (
    <>
      <div onClick={() => clickHandler()}>
        <p style={{ margin: "0px", textAlign: "center" }}>{data.name}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={data.img}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "3px solid grey",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              position: "relative",
              backgroundColor: "white",
            }}
          />
          <div
            style={{ fontSize: "30px", marginLeft: "20px" }}
            onClick={() => console.log("evento para ver opciones")}
          >
            l
          </div>
        </div>
        <p style={{ margin: "0px" }}> {data.percent} %</p>
        <p style={{ margin: "0px" }}> {data.amount}</p>
      </div>
    </>
  );
};
