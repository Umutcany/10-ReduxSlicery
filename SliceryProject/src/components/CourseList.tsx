import React from "react";
import { useSelector } from "react-redux";
import { courseReducer, removeCourse } from "../slices/CourseSlice";
import { useDispatch } from "react-redux/es/exports";

type RootStateType = {
  courses: ReturnType<typeof courseReducer>;
};

const CourseList = () => {
  const dispatch = useDispatch();
  const { data, searchTerm } = useSelector(
    (state: RootStateType) => state.courses
  );

  const filteredCourses = data.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderedCourses = filteredCourses.map((course, index: number) => (
    <div key={index} className="panel">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <p>{course.cost}</p>
      <button
        onClick={() => dispatch(removeCourse(course.id))}
        className="button is-danger"
      >
        Sil
      </button>
    </div>
  ));

  return <div className="courseList">{renderedCourses}</div>;
};

export default CourseList;
