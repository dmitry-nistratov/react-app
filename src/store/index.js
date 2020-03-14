import { createStore, applyMiddleware } from "redux";

import reducer from "../reducer";
import logger from "../middlewares/logger";
import genId from "../middlewares/genId";
import api from "../middlewares/api";

const enhancer = applyMiddleware(genId, api, logger);

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store;
