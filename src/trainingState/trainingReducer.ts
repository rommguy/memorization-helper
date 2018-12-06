import { Reducer } from 'redux'
import { TRAINING_MODE, TrainingState } from '../stateTypes'
import { SET_MODE, trainingAction } from './trainingActions'

const initialState: TrainingState = {
  trainingMode: TRAINING_MODE.WORDS,
}

export const trainingReducer: Reducer<TrainingState, trainingAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case SET_MODE:
      return { ...state, trainingMode: action.mode }
    default:
      return initialState
  }
}
