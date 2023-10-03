import "./App.css";
import {
  CourseForm,
  CourseList,
  CourseSearch,
  CourseValue,
} from "./components/index";

function App() {
  return (
    <div className="container is-fluid">
      <CourseForm />
      <CourseSearch />
      <CourseList />
      <CourseValue />
    </div>
  );
}

export default App;
