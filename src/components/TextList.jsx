import React from "react";
import { useSelector } from "react-redux";

function TextList() {
  const texts = useSelector((state) => state.text.texts);

  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}

export default TextList;
