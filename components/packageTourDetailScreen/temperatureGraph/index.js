import React from "react";
import classes from "./temperatureGraph.module.css";

function TemperatureGraph() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>When to Travel</h1>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus
        urna. In ut justo quis metus rhoncus cursus quis vitae magna. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Cras et finibus urna.
        In ut justo quis metus rhoncus cursus quis vitae magna. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Cras et finibus urna. In ut
        justo quis metus rhoncus cursus quis vitae magna
      </p>

      <div className={classes.graph_container}>
        <div className={classes.temp_bar}>
          <p>30</p>
          <p>26</p>
          <p>21</p>
          <p>17</p>
          <p>13</p>
          <p>9</p>
          <p>4</p>
          <p>0</p>
        </div>

        <div className={classes.middle_body}>
          <div className={classes.area_panel}>
            <p>Gilgit</p>
          </div>
          <div className={classes.graph_panel}>
            <p className={classes.label_right}>Rainfall (mm)</p>
            <p className={classes.label_left}>Temperature (degree C)</p>

            <div style={{ height: "20%" }} className={classes.single_bar}></div>
            <div style={{ height: "40%" }} className={classes.single_bar}></div>
            <div style={{ height: "10%" }} className={classes.single_bar}></div>
            <div style={{ height: "41%" }} className={classes.single_bar}></div>
            <div style={{ height: "65%" }} className={classes.single_bar}></div>
            <div style={{ height: "80%" }} className={classes.single_bar}></div>
            <div style={{ height: "85%" }} className={classes.single_bar}></div>
            <div style={{ height: "82%" }} className={classes.single_bar}></div>
            <div style={{ height: "73%" }} className={classes.single_bar}></div>
            <div style={{ height: "56%" }} className={classes.single_bar}></div>
            <div style={{ height: "40%" }} className={classes.single_bar}></div>
            <div style={{ height: "20%" }} className={classes.single_bar}></div>
          </div>
          <div className={classes.months_bar}>
            <p>Jan</p>
            <p>Feb</p>
            <p>Mar</p>
            <p>Apr</p>
            <p>May</p>
            <p>Jun</p>
            <p>Jul</p>
            <p>Aug</p>
            <p>Sep</p>
            <p>Oct</p>
            <p>Nov</p>
            <p>Dec</p>
          </div>
        </div>

        <div className={classes.rainfall_bar}>
          <p>48</p>
          <p>41</p>
          <p>34</p>
          <p>27</p>
          <p>21</p>
          <p>14</p>
          <p>7</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default TemperatureGraph;
