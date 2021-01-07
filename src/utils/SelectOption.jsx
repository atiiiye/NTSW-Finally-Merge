import React from "react";

const SelectOption = (props) => {
  const {
    data,
    handleMenu,
    selectRow,
    showMenu,
    showValue,
    node,
    width = 300,
  } = props;
  return (
    <div className="select-option-box" ref={node} style={{ width }}>
      <div className="select-option-head" onClick={handleMenu}>
        {showValue ? (
          <div className="select-option-value">{showValue}</div>
        ) : (
          <div className="select-option-value">انتخاب کنید</div>
        )}
        {showMenu ? (
          <img
            className="select-option-img"
            src={process.env.PUBLIC_URL + `/statics/images/arrow-up.svg`}
            alt="آیکن"
          />
        ) : (
          <img
            className="select-option-img"
            src={process.env.PUBLIC_URL + `/statics/images/arrow-down.svg`}
            alt="آیکن"
          />
        )}
      </div>
      {showMenu ? (
        <div className="select-option-menu">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="select-option-row"
                onClick={() => selectRow(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default React.memo(SelectOption);