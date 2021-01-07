import React from "react";

const Button = ({
  title,
  borderColor,
  backgroundColor = "#fff",
  color = "#000",
  icon,
  width = 154,
  height = 44,
  borderRadius = 97,
  margin = 2,
  padding,
  loading,
  fontAwesome,
  ...others
}) => {
  return (
    <div
      className="idea-submit-btn"
      style={{
        border: borderColor ? `1px solid ${borderColor}` : "",
        backgroundColor,
        width,
        height,
        borderRadius,
        margin,
        padding
      }}
      {...others}
    >
      {loading ? (
        <div className="loader"></div>
      ) : (
        <span style={{ color, marginLeft: icon ? 4 : 0 }}>{title}</span>
      )}
      {icon && (
        <img
          className="select-option-img"
          src={process.env.PUBLIC_URL + `img/${icon}`}
          alt="آیکن"
          width="25px"
          height="25px"
        />
      )}

      {
        fontAwesome && (
          <span   className="select-option-img"><i className={`fas  ${fontAwesome}`}></i></span>
        )
      }
    </div>
  );
};
export default Button;