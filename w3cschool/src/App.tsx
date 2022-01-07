import React from "react";
import "./App.css";
import Header from "./components/Header";

const App: React.FC = (props: any) => {
  console.log('App Props', props);
  return (
    <div>
      <i>hello</i>
      <Header />
    </div>
  );
}

export default App;
