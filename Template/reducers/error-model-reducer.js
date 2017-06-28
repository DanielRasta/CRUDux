
import {ERROR} from '../actions/crud'

export default function (state = null,action)
{
  switch (action.type) {
    case ERROR:
      {
        // change state here
        return {
          ShowError: true,
          ErrorText: action.payload
        }
      }
  }
  return state;
}
