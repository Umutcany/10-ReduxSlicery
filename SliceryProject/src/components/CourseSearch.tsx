import React from "react";
import { changeSearchTerm, courseReducer } from "../slices/CourseSlice";
import { useDispatch, useSelector } from "react-redux";

type RootStateType = {
  courses: ReturnType<typeof courseReducer>;
};

const CourseSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootStateType) => {
    return state.courses.searchTerm;
  });

  return (
    <div className="listHeader">
      <h3 className="title is-3">Kurslarım</h3>
      <div className="search field i-horizontal">
        <label className="label">Ara</label>
        <input
          className="input"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            return dispatch(changeSearchTerm(event.target.value));
          }}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

export default CourseSearch;
