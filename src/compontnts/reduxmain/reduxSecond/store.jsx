import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer
    // middleware: () => [sagaMiddleware]
});
// sagaMiddleware.run(SagaData);
export default store;