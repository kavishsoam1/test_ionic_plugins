import * as fromNote from '../actions/note.actions';
import { Note } from '../interfaces/note';
export interface NoteState {
  data: Note[];
}
export const initialState: NoteState = {
  data: [],
};
export function reducer(
  state = initialState,
  action: fromNote.ActionsUnion
): NoteState {
  switch (action.type) {
    case fromNote.ActionTypes.CreateNote: {
      return {
        ...state,
        data: [...state.data, action.payload.note],
      };
    }
    case fromNote.ActionTypes.DeleteNote: {
      return {
        ...state,
        ...state.data.splice(state.data.indexOf(action.payload.note), 1),
      };
    }
    default: {
      return state;
    }
  }
}
