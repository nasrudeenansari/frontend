import React, { useEffect, useState } from "react";
import FadeFlip from "react-reveal";
import MinusGray from "../../assets/images/minus_gray.svg";
import MinusActive from "../../assets/images/minus.svg";
import Timer from "../../assets/images/timer.svg";
import Database from "../../assets/images/database.svg";
import { fetchData } from "../../apis";

const Layer = () => {
  const [toggleList, settoggleList] = useState(false);
  const [toggleDBList, settoggleDBList] = useState(false);
  const [list, setlist] = useState([]);
  const [selectAll, setselectAll] = useState(false);

  //fetch api
  const getData = async () => {
    try {
      let response = await fetchData();
      setlist(response);
    } catch (error) {
      console.error(error);
    }
  };
  const handleCheckBoxChange = (itemid) => {
    setlist((prev) =>
      prev.map((db) => ({
        ...db,
        data: db.data.map((item) =>
          item._id === itemid ? { ...item, checked: !item.checked } : item
        ),
      }))
    );
  };
  const handleSelectAll = () => {
    const updatedData = list.map((db) => ({
      ...db,
      data: db.data.map((item) => ({
        ...item,
        checked: !selectAll,
      })),
    }));
    setlist(updatedData);
    setselectAll(!selectAll);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="layer_container">
      <div className="accordian_title">
        <h5>SPACE DATA</h5>
        <img src={MinusGray} />
      </div>
      <div
        className="timer_container"
        onClick={() => {
          settoggleList(!toggleList);
          settoggleDBList(false);
        }}
      >
        <div className="left_timer">
          <img src={Timer} />
          <p>Time</p>
        </div>
        <div className="right_timer">
          <img src={MinusActive} />
        </div>
      </div>
      <div className={`timer_list ${toggleList ? "active" : "inactive"}`}>
        {list?.map((dky, idx) => (
          <>
            <FadeFlip>
              <div
                className={"database_option"}
                onClick={() => settoggleDBList(!toggleDBList)}
              >
                <div className="database_left">
                  <img src={Database} />
                  <span className="database_name">{dky.dbName}</span>
                </div>
                <img src={MinusGray} className="database_right_img" />
              </div>
            </FadeFlip>
            <FadeFlip when={toggleDBList}>
              <ul
                className={`database_list ${
                  toggleDBList ? "active" : "inactive"
                }`}
              >
                <li>
                  <div className="checkbox_wrapper">
                    <input
                      type={"checkbox"}
                      id="ids"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                    <label></label>
                  </div>
                  <label className="optionsName" htmlFor="ids">
                    <u>Select all</u>
                  </label>
                </li>
                {dky?.data?.map((dataKey, idx) => (
                  <li>
                    <div className="checkbox_wrapper">
                      <input
                        type={"checkbox"}
                        id={idx}
                        checked={dataKey.checked || false}
                        onChange={() => handleCheckBoxChange(dataKey._id)}
                      />
                      <label></label>
                    </div>
                    <label className="optionsName" htmlFor={idx}>
                      {dataKey.path} ({dataKey.size} )
                    </label>
                  </li>
                ))}
              </ul>
            </FadeFlip>
          </>
        ))}
      </div>
    </div>
  );
};

export default Layer;
