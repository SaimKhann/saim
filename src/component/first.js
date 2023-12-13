import React, { useEffect, useState } from "react";
import { AiFillFileAdd } from "react-icons/fa";
import Img from "./download.png";
import MyModal from "./component/modalshoe";
document.getElementById("root").style.height = "100vh";

const getLocalItem = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getLocalItem());
  const [toggle, setToggle] = useState(true);
  const [edit, setEdit] = useState(null);
  const [shoeModal, setShowModal] = useState(false);
  const Closemodal = () => setShowModal(false);
  const Removeall = () => {
    setItems([]);
    setShowModal(false);
  };
  const Add = () => {
    if (!input) {
      alert("add item");
    } else if (input && !toggle) {
      setItems(
        items.map((e) => {
          if (e.id == edit) {
            return { ...items, name: input };
          }
          return e;
        })
      );
      setInput("");
      setToggle(true);
    } else {
      setEdit(null);
      const all = { id: new Date().getTime().toString(), name: input };
      setItems([...items, all]);
      setInput("");
    }
  };

  const Delete = (id) => {
    const updeteddata = items.filter((e) => {
      return e.id !== id;
    });
    setItems(updeteddata);
  };

  const Edit = (id) => {
    const edit = items.find((e) => {
      return e.id == id;
    });
    setInput(edit.name);
    setToggle(false);
    setEdit(id);
  };

  const Remove = () => {
    if (items == "") {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="container-fluid m-0 p-0 bg-secondary">
        <div className="row header m-0 p-0 bg-light">
          <div className="col-lg-4 m-0 p-0  logo">
            <img src={Img} alt="img" className="img" />
          </div>
          <div className="col-lg-6 col-10 m-0 p-0 search d-flex align-items-center justify-content-center">
            <div className="input m-0 p-0">
            <input  value={input || ""}
              onChange={(e) => {
                setInput(e.target.value);
              }} type="text" className="form-control m-0 p-1" />
            </div>
          </div>
          <div className="col-2 m-0 p-0 d-flex align-items-center justify-content-start">
            <button className="btn btn-outline-success p-0 m-0"onClick={Add}>
              {toggle ? 'add' : "edit"}</button>
          </div>
        </div>
        <div className="row m-0 p-0 mid d-flex align-items-center justify-content-center">
          <div className="col-11 m-o p-0">
          {items.map((e) => {
              return (
                <div key={e.id} className="row d-flex item m-1">
                  <h5 className="col-8 itval text-start p-1 ">{e.name}</h5>
                <div
                      className="btn btn-danger col-2"
                      onClick={() => Delete(e.id)}
                    >
                      ➖
                    </div>
                    <div className="btn btn-primary col-2" onClick={() => Edit(e.id)}>
                      ✏️
                    </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center m-0 p-0 ">
        <button className="btn btn-outline-danger col-8" onClick={Remove}>
              Remove All
            </button>
        </div>
        <div className="row d-flex align-items-center justify-content-center m-0 p-0 0footer">
            copyright
        </div>

      </div>
      {shoeModal && <MyModal closemodal={Closemodal} remove={Removeall} />}
    </>
  );
};

export default App;
