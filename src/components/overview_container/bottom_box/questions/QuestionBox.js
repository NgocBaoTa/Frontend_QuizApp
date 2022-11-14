import React from 'react'

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
          <div className="question_name">English</div>
          <div className="question_value">40</div>
        </div>
        <div className="question_box-feature">
          <div className="question_name">Science</div>
          <div className="question_value">30</div>
        </div>
        <div className="question_box-feature">
          <div className="question_name">Music</div>
          <div className="question_value">20</div>
        </div>
      </div>
    </div>
  );
}

export default QuestionBox