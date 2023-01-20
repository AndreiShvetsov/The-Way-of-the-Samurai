import React from "react";
import st from "./Content.module.css";
import Portret from "./portret.jpg";

function Content() {
  return (
    <div className={st}>
      <img src={Portret} alt="AnimePortret" className={st.portret}/>
      Привет, меня зовут Андрей и у меня много интересных идей!
      
    </div>
  );
}

export default Content;
