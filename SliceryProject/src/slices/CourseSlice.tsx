import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Course {
  name: string;
  description: string;
  cost: number;
  id: string | number;
}

interface FormState {
  searchTerm: string;
  data: Course[];
}

const courseSlice = createSlice({
  name: "form",
  initialState: {
    searchTerm: "",
    data: [],
  } as FormState,
  reducers: {
    addCourse(state, action: PayloadAction<Course>) {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCourse(state, action) {
      const updatedCourses = state.data.filter((course) => {
        return course.id != action.payload;
      });
      state.data = updatedCourses;
    },
  },
});

export const { addCourse, removeCourse } = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
