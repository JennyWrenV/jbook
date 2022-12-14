import cellsReducer from './cells-reducer'
import { combineReducers } from 'redux'
import bundlesReducer from './bundles-reducer'

const reducers = combineReducers({
    cells: cellsReducer,
    bundles: bundlesReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>