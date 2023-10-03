import { useSelector } from "react-redux";
import { courseReducer, removeCourse } from "../slices/CourseSlice";
import { useDispatch } from "react-redux/es/exports";

type RootStateType = {
  courses: ReturnType<typeof courseReducer>;
};

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state: RootStateType) => {
    return {
      data: state.courses.data,
    };
  });
  const renderedCourses = courses.data.map((course, index: number) => {
    return (
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
    );
  });
  return <div className="courseList">{renderedCourses}</div>;
};

export default CourseList;
