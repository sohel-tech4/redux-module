const logger = (state) => (next) => (action) => {
  console.log("Current State =>", state.getState());
  console.log("Action =>", action);
  next(action);
};

export default logger;
