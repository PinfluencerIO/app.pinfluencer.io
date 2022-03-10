import React from "react";
import "./progressStepper.css";

export const ProgressStepper = ({ stepsStructure, active, onClick }) => {
  const createLinesFromData = () => {
    const results = [];
    stepsStructure.steps.forEach((element) => {
      results.push(
        <li
          key={element.itemLabel}
          onClick={onClick}
          className={addActiveOrCompletedClassNameIfRequired(element.itemLabel)}
        >
          <div className="stepItemContainer">
            <div className="stepCircle">
              <div data-item={element.itemLabel}>
                {setAsTickForCompleted(element.itemLabel)}
              </div>
            </div>
            <div className="stepLabel">{element.stepLabel}</div>
          </div>
        </li>
      );

      function setAsTickForCompleted(label) {
        if (active > label) {
          return "✓";
        } else {
          return label;
        }
      }
      function addActiveOrCompletedClassNameIfRequired(item) {
        if (active === item) {
          return "active";
        }
        if (active > item) {
          return "completed";
        }
      }
    });
    return results;
  };
  return (
    <div className="progessStepperContainer">
      <ul>{createLinesFromData()}</ul>
    </div>
  );
};
