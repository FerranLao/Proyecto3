import React from "react";
import { StyledLoading } from "../lib/styledcomps/styledLoading";

export const LoadingScreen = () => {
  return (
    <StyledLoading>
      <div className="loader-container">
        <div className="rocket-container">
          <div className="structure">
            <svg
              height="352"
              id="rocket-svg"
              version="1.1"
              viewBox="0 0 59.266662 93.133333"
              width="224"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="layer2" transform="translate(-33.866666,-33.866666)">
                <path
                  className="load1"
                  d="m 296,336 a 8.0000078,8.0000078 0 0 0 -8,8 v 80 a 8.0000078,7.9999501 0 0 0 1.16406,4.14062 l -0.22461,0.11329 49.32227,49.32031 0.0781,0.0801 0.004,-0.004 A 7.9999934,8.0000655 0 0 0 344,480 a 7.9999934,8.0000655 0 0 0 8,-8 v -80 a 7.9999934,7.9998924 0 0 0 -2.34961,-5.65625 l 0.004,-0.004 -48.00391,-48.00195 -0.004,0.002 A 8.0000078,8.0000078 0 0 0 296,336 Z"
                  id="right-wing"
                  transform="scale(0.26458333)"
                />
                <path
                  className="load2"
                  d="m 184,336 a 8.0000006,8.0000078 0 0 0 -5.65234,2.3457 l -0.004,-0.002 -47.91797,47.91797 -0.082,0.082 0.004,0.002 A 8.0000078,7.9998924 0 0 0 128,392 v 80 a 8.0000078,8.0000655 0 0 0 8,8 8.0000078,8.0000655 0 0 0 5.65625,-2.34961 l 0.004,0.004 49.40039,-49.40039 -0.22657,-0.11329 A 8.0000006,7.9999501 0 0 0 192,424 v -80 a 8.0000006,8.0000078 0 0 0 -8,-8 z"
                  id="left-wing"
                  transform="scale(0.26458333)"
                />
                <path
                  d="M 239.96875,128 A 111.99996,124.13082 0 0 0 176,240 l 16,200 a 8.0000006,8.0000655 0 0 0 8,8 h 80 a 8.0000078,8.0000655 0 0 0 8,-8 L 304,240 A 111.99996,124.13082 0 0 0 239.96875,128 Z"
                  id="rocket-main-part"
                  className="load3"
                  transform="scale(0.26458333)"
                />
                <path
                  d="m 239.96875,128 a 111.99996,124.13082 0 0 0 -47.77344,48 h 95.51953 a 111.99996,124.13082 0 0 0 -47.74609,-48 z"
                  id="nose"
                  className="load1"
                  transform="scale(0.26458333)"
                />
                <ellipse
                  cx="63.5"
                  cy="59.266663"
                  id="window-stroke"
                  rx="7.4083333"
                  ry="7.4083328"
                  className="load1"
                />
                <ellipse
                  cx="63.499996"
                  cy="59.266666"
                  id="window-inner"
                  rx="6.3499975"
                  ry="6.3500061"
                  className="load1"
                />
                <path
                  d="m 240,336 a 7.9999898,8.0000078 0 0 0 -8,8 v 128 a 7.9999898,8.0000078 0 0 0 8,8 7.9999898,8.0000078 0 0 0 8,-8 V 344 a 7.9999898,8.0000078 0 0 0 -8,-8 z"
                  id="middle-wing"
                  className="load1"
                  transform="scale(0.26458333)"
                />
                <path
                  d="M 239.96875,128 A 111.99996,124.13082 0 0 0 176,240 l 7.68164,96.01562 a 8.0000006,8.0000078 0 0 0 -5.33398,2.33008 l -0.004,-0.002 -47.91797,47.91797 -0.082,0.082 0.004,0.002 A 8.0000078,7.9998924 0 0 0 128,392 v 80 a 8.0000078,8.0000655 0 0 0 8,8 8.0000078,8.0000655 0 0 0 5.65625,-2.34961 l 0.004,0.004 49.40039,-49.40039 -0.22657,-0.11329 a 8.0000006,7.9999501 0 0 0 0.18946,-0.3496 l 0.0371,0.46289 L 192,440 a 8.0000006,8.0000655 0 0 0 8,8 h 32 v 24 a 7.9999898,8.0000078 0 0 0 8,8 V 336 252 196 128.01758 A 111.99996,124.13082 0 0 0 239.96875,128 Z"
                  id="shadow-layer"
                  className="load1"
                  transform="scale(0.26458333)"
                />
              </g>
            </svg>
          </div>
          <div className="text-container">
            <h2>Loading</h2>
          </div>
          <div className="smoke">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="meteors-container">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </StyledLoading>
  );
};
