// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducers";
import DynamicForm from "./pages/DynamicForm";
import FormList from "./pages/FormList";
import './App.css'

const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<DynamicForm />} />
          <Route path="/list" element={<FormList />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
