import React from "react";

function Input(props) {
  const {
    title,
    click,
    required = false,
    hint,
    error,
    input = false,
    textarea = false,
    node = null,
    maxLength,
    ...other
  } = props;

  return (
    <div className="input-box">
      <div className="input-body" onClick={click}>
        <div className="input-title">
          {title}
          {required ? <span className="input-required-sign">*</span> : ""}
        </div>
        {input && (
          <input
            className={`input-field ${error ? "border-error" : ""}`}
            ref={node}
            maxLength={maxLength}
            {...other}
            
          />
        )}
        {textarea && (
          <textarea
            className={`input-textarea-field ${error ? "border-error" : ""}`}
            ref={node}
            maxLength={maxLength}
            {...other}
          />
        )}
        {error ? (
          <span className="input-error-text">{error}</span>
        ) : (
          <span className="input-hint-text">{hint}</span>
        )}
      </div>
    </div>
  );
}
export default Input;