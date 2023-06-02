"use client";
import styles from "./page.module.css";
import { data } from "./db";
import React, { useState } from "react";

export default function Home() {
  const [sort, setsort] = React.useState(data);
  const [map, setmap] = useState({});

  function sorting(sortingtype) {
    let sorted = [];
    if (sortingtype === "asc") {
      sorted = [...sort].sort((a, b) => {
        return a["price"] - b["price"];
      });
    } else if (sortingtype === "dsc") {
      sorted = [...sort].sort((a, b) => {
        return b["price"] - a["price"];
      });
    } else if (sortingtype === "date") {
      sorted = [...sort].sort((a, b) => {
        return b["date"] - a["date"];
      });
    } else {
      sorted = [...sort].sort((a, b) => {
        return b["rate"] - a["rate"];
      });
    }

    setsort(sorted);
  }

  function filtering(filtertype) {
    let filtered = data.filter((el) => {
      for (let key in el) {
        if (map[el[key]] !== undefined) {
          return el;
        }
      }
    });
if(Object.keys(map).length===0){
  setsort(data)
}else{
  setsort(filtered);
}
    
  }

  return (
    <main>
      <nav className={styles.navbar}>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9129/9129418.png"
            alt="logo"
          />
        </div>
        <div className={styles.options}>
          <li>Home</li>
          <li>My Campaign</li>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3602/3602123.png"
            alt="bell_logo"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/3293/3293334.png"
            alt="auth_logo"
          />
        </div>
      </nav>

      <section className={styles.dashboard}>
        <div className={styles.filtering}>
          <div>
            <h4>POPULARITY</h4>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["nano"] = 1;
                  } else {
                    delete map.nano;
                  }
                  filtering();
                }}
                value={"Nano"}
              />
              Nano(1k-9k)
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["micro"] = 1;
                  } else {
                    delete map.micro;
                  }
                  filtering();
                }}
                value={"micro"}
              />
              Micro(100k-999k)
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["macro"] = 1;
                  } else {
                    delete map.macro;
                  }
                  filtering();
                }}
                value={"macro"}
              />
              Macro(1M-10M)
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["custom"] = 1;
                  } else {
                    delete map.custom;
                  }
                  filtering();
                }}
                value={"custom"}
              />
              Custom
            </li>
            <input
              type="range"
              min="0"
              max="100"
              className={styles.slider}
              id="myRange"
            ></input>
          </div>
          <div>
            <h4>CAMPAIGN PREFERANCE</h4>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["barter"] = 1;
                  } else {
                    delete map.barter;
                  }
                  filtering();
                }}
                value={"barter"}
              />
              Barter
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["paid"] = 1;
                  } else {
                    delete map.paid;
                  }
                  filtering();
                }}
                value={"paid"}
              />
              Paid
            </li>
          </div>
          <div>
            <h4>PLATFORM</h4>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["youtube"] = 1;
                  } else {
                    delete map.youtube;
                  }
                  filtering();
                }}
                value={"youtube"}
              />
              YouTube
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["instagram"] = 1;
                  } else {
                    delete map.instagram;
                  }
                  filtering();
                }}
                value={"instagram"}
              />
              Instagram
            </li>
          </div>
          <div>
            <h4>ENGAGEMENT RATE</h4>
            <input
              type="range"
              min="0"
              max="100"
              className={styles.slider}
              id="myRange"
            ></input>
          </div>
          <div>
            <h4>AVERAGE</h4>
            <input
              type="range"
              min="0"
              max="100"
              className={styles.slider}
              id="myRange"
            ></input>
          </div>
          <div>
            <h4>CATEGORIES</h4>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["vehicle"] = 1;
                  } else {
                    delete map.vehicle;
                  }
                  filtering();
                }}
                value={"auto"}
              />
              Auto & Vehicles
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["anime"] = 1;
                  } else {
                    delete map.anime;
                  }
                  filtering();
                }}
                value={"Animation"}
              />
              Animation
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["agriculture"] = 1;
                  } else {
                    delete map.agricluture;
                  }
                  filtering();
                }}
                value={"agriculture"}
              />
              Aglriculture & Allied sector
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["arts"] = 1;
                  } else {
                    delete map.arts;
                  }
                  filtering();
                }}
                value={"Arts"}
              />
              Arts & Crafts
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["beauty"] = 1;
                  } else {
                    delete map.beauty;
                  }
                  filtering();
                }}
                value={"Beauty"}
              />
              Beauty
            </li>
            <li>
              {" "}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    map["travel"] = 1;
                  } else {
                    delete map.travel;
                  }
                  filtering();
                }}
                value={"blogs"}
              />
              Blogs & Travel
            </li>
          </div>
        </div>

        <div className={styles.rightsection}>
          {/* right side for upper buttons */}
          <div className={styles.uppersection}>
            <div>
              <label>
                Sort by <br />
                <button onClick={() => sorting("asc")}> Low to High</button>
                <button onClick={() => sorting("dsc")}>High to Low</button>
                <button onClick={() => sorting("date")}>Newest</button>
                <button onClick={() => sorting("rate")}>Popular</button>
              </label>
            </div>
            <div>
              <button>SELECT ALL</button>
              <button>INVITE</button>
              <button>ADD CAMPAIGN</button>
            </div>
          </div>
          {/* for product compaigns */}
          <div>
            {sort.map((el, i) => {
              return (
                <div key={i} className={styles.cards}>
                  <div>
                    {" "}
                    <img src={el.image} />
                  </div>

                  <div>
                    <div>
                      <h5>{el.title}</h5>
                      <p>
                        {" "}
                        This uniquely made Facial Scrub gently cleanses facial
                        skin without removing moisture and makes the skin appear
                        baby soft and pampered.
                      </p>
                      <p>Market price :Rs{el.price}</p>
                      <p>Launch At :{el.date}</p>
                      <p>Popularity :{el.popularity}</p>
                      <p>Category :{el.category}</p>
                      <button>{el.media}</button>{" "}
                      <button>{el.preferance}</button>
                      <div className={styles.acceptbtn}>
                        {" "}
                        <button>Accepted</button>
                        <button>Barter</button>
                      </div>
                    </div>
                    <div className={styles.cardbtnright}>
                      <button>DETAIL</button>
                      <button>INVITE</button>
                      <button>ANALYSE</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}


