import React from 'react'
import "./categoryBox.css"

function CategoryBox() {
  return (
    <div className="category_box">
      <div className="category_box--header">
        <div className="name">Top categories</div>
        <div className="view">View details</div>
      </div>
      <div className="category_boxes-feature">
        <div className="category_box-feature">
          <div className="category_name">Math</div>
          <div className="category_value">50</div>
        </div>
        <div className="category_box-feature">
          <div className="category_name">English</div>
          <div className="category_value">40</div>
        </div>
        <div className="category_box-feature">
          <div className="category_name">Science</div>
          <div className="category_value">30</div>
        </div>
        <div className="category_box-feature">
          <div className="category_name">Music</div>
          <div className="category_value">20</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBox