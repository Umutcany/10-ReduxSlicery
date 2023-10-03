import { useSelector } from "react-redux";
import {
  changeCost,
  changeDescription,
  changeName,
  formReducer,
} from "../slices/formSlice";

import { useDispatch } from "react-redux/es/exports";
import { addCourse } from "../slices/CourseSlice";

type RootStateType = {
  form: ReturnType<typeof formReducer>;
  // Add other slices as needed
};

const CourseForm = () => {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state: RootStateType) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addCourse({
        name,
        description,
        cost,
      })
    );
  };

  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input
              onChange={(e) => {
                dispatch(changeName(e.target.value));
              }}
              className="input is-expanded"
              value={name}
            />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea
              onChange={(e) => {
                dispatch(changeDescription(e.target.value));
              }}
              className="input is-expanded"
              value={description}
            />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input
              onChange={(e) => {
                dispatch(changeCost(parseInt(e.target.value)));
              }}
              type="number"
              className="input is-expanded"
              value={cost}
            />
          </div>
        </div>
        <div className="field">
          <button onClick={handleSubmit} className="button is-primary">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
