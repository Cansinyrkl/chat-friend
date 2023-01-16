import React from "react";
import "./Index.css";

const DeleteAlertMessage = ({ setShowPopupWindow }) => {
  return (
    <div className="popup-window">
      Delete Modal
      <button
        type="button"
        onClick={() => {
          setShowPopupWindow(false);
        }}
      >
        No
      </button>
      <button type="button">Yes</button>
    </div>
  );
};

export default DeleteAlertMessage;
