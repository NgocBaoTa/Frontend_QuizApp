import React from 'react'
import "./questionBox.css"

function QuestionBox() {
  return (
    <div className="question_box">
      <div className="question_box--header">
        <div className="name">Questions</div>
        <div className="view">View details</div>
      </div>
      <div className="question_boxes-feature">
        <div className="question_box-feature">
          <div className="question_name">Total questions</div>
          <div className="question_value">500</div>
        </div>
        <div className="question_box-feature">
          <div className="question_name">Posted questions today</div>
          <div className="question_value">10</div>
        </div>
        <div className="question_box-feature">
          <div className="question_name">Updated questions today</div>
          <div className="question_value">5</div>
        </div>
        <div className="question_box-feature">
          <div className="question_name">Questions per session</div>
          <div className="question_value">10</div>
        </div>
      </div>
    </div>
  );
}

export default QuestionBox