
import {GET_ONE} from '../actions/crud'

export default function (state = null,action)
{
  switch (action.type) {
    case GET_ONE:
      {
        // change state here
        return action.payload;
      }
  }
  return state;
}
