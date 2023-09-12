import React, { useEffect, useState } from "react";
import "./SecondaryProjectCard.css";

export default function SecondaryProjectCard() {
  return (
    <div>
      <div class="secprocontainer">
        <div class="secprocard">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXMlMjBuaWtlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div class="secprocard-body">
            <div class="secprorow">
              <div class="card-title">
                <h4>StockSocial</h4>
                {/* <h3>$120</h3> */}
              </div>
              <div class="view-btn">
                <a href="">View Details</a>
              </div>
            </div>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              dignissimos.
            </p>
            <div class="btn-group">
              <div class="secprobtn">
                <a href="">Buy Now</a>
              </div>
              <a href=""> Cancel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
