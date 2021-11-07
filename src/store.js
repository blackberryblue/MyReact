//상태와 액션이 있어야 한다.

const initstate = {
  number: 1,
  number2: 10124,
};
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = () => {
  return { type: INCREASE };
};

export const decrease = () => {
  return { type: DECREASE };
};

// 상태만 건드림(변경해줌)
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "INCREASE":
      return { number: state.number + 1 };
    case "DECEASE":
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;
