import React from "react";
import { StyleOutlined } from "../../icons/StyleOutlined";
import "./style.css";

export const Website = () => {
  return (
    <div className="website">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <img className="polygon" alt="Polygon" src="/img/polygon-1.svg" />
              <img className="img" alt="Polygon" src="/img/polygon-2.svg" />
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="rectangle" />
              <div className="rectangle-2" />
            </div>
          </div>
          <div className="group-2">
            <div className="text-wrapper">Recipe Maker</div>
            <p className="p">The answer to the question, “What’s for dinner tonight?”</p>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-3">
              <div className="ellipse" />
              <div className="ellipse-2" />
            </div>
          </div>
        </div>
        <div className="user-input-wrapper">
          <div className="user-input">
            <div className="input-window">
              <div className="overlap-4">
                <img className="underline" alt="Underline" src="/img/underline-1.svg" />
                <div className="text-wrapper-2">What’s in your fridge?</div>
                <div className="input-text">
                  <div className="overlap-group-2">
                    <p className="text-wrapper-3">chicken, carrots, onions, spam, garlic, apple, potatoes</p>
                    <div className="rectangle-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="overlap-5">
            <div className="overlap-6">
              <div className="element-onions-large-wrapper">
                <p className="element-onions-large">
                  2 onions (large; 1.5 lb, 670 g)
                  <br />2 carrots (6.7 oz, 190 g)
                  <br />3 Yukon gold potatoes (15 oz, 432 g)
                  <br />1 tsp ginger (grated)
                  <br />2 cloves garlic
                  <br />½ apple (6 oz, 170 g)
                  <br />
                  1½ lb boneless, skinless chicken thighs (see Notes for substitutions)
                  <br />
                  freshly ground black pepper
                </p>
              </div>
              <div className="text-wrapper-4">Japanese Curry</div>
              <div className="text-wrapper-5">Ingredients:</div>
              <div className="text-wrapper-6">(serves 2-4)</div>
            </div>
            <p className="text-wrapper-7">Here’s what you can make:</p>
            <img className="underline-2" alt="Underline" src="/img/underline.svg" />
            <div className="group-3">
              <div className="overlap-group-3">
                <StyleOutlined className="cached" />
                <div className="text-wrapper-8">New recipe</div>
              </div>
              <div className="text-wrapper-9">Not a fan?</div>
            </div>
            <div className="rectangle-4" />
          </div>
        </div>
        <div className="group-4">
          <div className="group-5">
            <div className="overlap-group-4">
              <img className="arrow" alt="Arrow" src="/img/arrow-1.svg" />
              <div className="text-wrapper-10">Generating...</div>
            </div>
          </div>
          <div className="overlap-7">
            <div className="text-wrapper-11">Make me a recipe!</div>
          </div>
        </div>
        <div className="text-wrapper-12">Designed for Hackcamp 2023.</div>
      </div>
    </div>
  );
};
