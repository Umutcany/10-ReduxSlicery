import { courseReducer } from "../slices/CourseSlice";
import { formReducer } from "../slices/formSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    form: formReducer,
    courses: courseReducer,
  },
});
