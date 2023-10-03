import React from "react";
import { useSelector } from "react-redux";

interface RootStateType {
  courses: {
    data: {
      name: string;
      cost: number;
    }[];
    searchTerm: string;
  };
}

const CourseValue = () => {
  const { data, searchTerm } = useSelector(
    (state: RootStateType) => state.courses
  );

  const totalCost = data
    .filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reduce((acc, course) => acc + course.cost, 0);

  return <div className="coursePrice">Toplam Tutar: {totalCost}</div>;
};

export default CourseValue;
