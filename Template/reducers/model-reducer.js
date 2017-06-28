
import {CREATED,UPDATED,DELETED,GET_ALL} from '../actions/crud'

export default function (state = null,action)
{
  switch (action.type) {
    case CREATED:
      {
        // change state here
        return action.payload;
      }
    case UPDATED:
      {
        // change state here
        return action.payload;
      }
    case DELETED:
    {
      // change state here
      var result = action.payload.acknowledge ? true:false;
      return result;
    }
    case GET_ALL:
    {
      // change state here
      return action.payload;
    }
  }
  return state;
}
