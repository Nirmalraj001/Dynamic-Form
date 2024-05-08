import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducers";
import FormComponent from "./pages/FormComponent";
import ListComponent from "./pages/ListComponent";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/form" element={<FormComponent />} />
          <Route path="/list" element={<ListComponent />} />
          <Route path="/" element={<FormComponent />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
