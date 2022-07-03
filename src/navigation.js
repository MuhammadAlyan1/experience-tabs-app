import { useState, useRef } from "react";
// components
import { CompanyDetail } from "./companyDetail";

// css
import "./navigation.css";

export function Navigation(props) {
  const { data } = props;
  const [company, setCompany] = useState("TOMMY");
  const tommyBtn = useRef(null);
  const bigdropBtn = useRef(null);
  const cukerBtn = useRef(null);
  const buttons = [tommyBtn, bigdropBtn, cukerBtn];

  function navigationBtnClick(e) {
    buttons.forEach((button) => button.current.classList.remove("selectedBtn"));

    if (e.target.innerText === "TOMMY") {
      setCompany("TOMMY");
      tommyBtn.current.classList.add("selectedBtn");
    } else if (e.target.innerText === "BIGDROP") {
      setCompany("BIGDROP");
      bigdropBtn.current.classList.add("selectedBtn");
    } else if (e.target.innerText === "CUKER") {
      setCompany("CUKER");
      cukerBtn.current.classList.add("selectedBtn");
    }
  }

  if (data === "") {
    return;
  }

  return (
    <section className="buttons-details-container">
      <section className="button-div">
        <button
          className="navigation-btn selectedBtn"
          key={1}
          ref={tommyBtn}
          onClick={(e) => navigationBtnClick(e)}
        >
          TOMMY
        </button>
        <button
          className="navigation-btn"
          key={2}
          ref={bigdropBtn}
          onClick={(e) => navigationBtnClick(e)}
        >
          BIGDROP
        </button>
        <button
          className="navigation-btn"
          key={3}
          ref={cukerBtn}
          onClick={(e) => navigationBtnClick(e)}
        >
          CUKER
        </button>
      </section>
      <section id="conpany-detail-section">
        <CompanyDetail
          key={data.filter((item) => item.company === company).id}
          {...data.filter((item) => item.company === company)}
        />
      </section>
    </section>
  );
}
