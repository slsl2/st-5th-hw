import React from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { useSelector } from "react-redux";

// export const TextContext = createContext(null);

function App() {
  const texts = useSelector((state) => state.texts.texts);
  // const [texts, setTexts] = useState(() =>
  //   localStorage.getItem("texts")
  //     ? JSON.parse(localStorage.getItem("texts"))
  //     : []
  // );

  // useEffect(() => {
  //   localStorage.setItem("texts", JSON.stringify(texts));
  // }, [texts]);

  // const onAddText = (text) => {
  //   setTexts((prevTexts) => [...prevTexts, text]);
  // };

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput />
      <TextList />
    </div>
  );
}

export default App;
