import axios from 'axios';


// CONSTS
const BASE_URL = "http://localhost:3000"
const MODEL_PATH = "/%%model_name_camel%%"

// Action Names
export const CREATED = 'CREATED_%%model_name_upper%%';
export const UPDATED = 'UPDATED_%%model_name_upper%%';
export const DELETED = 'DELETED_%%model_name_upper%%';
export const GET_ALL = 'GET_ALL_%%model_name_upper%%';
export const GET_ONE = 'GET_ONE_%%model_name_upper%%';
export const ERROR = 'ERROR_%%model_name_upper%%';


const custome_headers = {
  headers: {
          'accept': 'application/json',
          'accept-language': 'en_US',
          'content-type': 'application/x-www-form-urlencoded'
        }
 };


export function create%%model_name_camel%%(form_params, success_callback)
{
  var url = `${BASE_URL}/${MODEL_PATH}/`

  var params = new URLSearchParams();
  for(var key in form_params)
  {
    params.set(key, form_params[key]);
  }

  const request = axios.post(url, params, custome_headers);

  return (dispatch) => {
    request.then(({data}) => {
      // optional call
      success_callback();
      //
      dispatch(
        {
          type: CREATED,
          payload: data
        }
      );
    })
    .catch((response) => {
      // you can do whatever parsing you want with
      dispatch(
        {
          type: ERROR,
          payload: "Creation Failed!"
        }
      );
    });
  };

};


export function get%%model_name_camel%%(id)
{
  var url = `${BASE_URL}/${MODEL_PATH}/${id}`
  const request = axios.get(url, custome_headers);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch(
        {
          type: GET_ONE,
          payload: data
        }
      );
    })
    .catch((response) => {
      // you can do whatever parsing you want with the response
      dispatch(
        {
          type: ERROR,
          payload: `Fetching instcae id: ${id} failed`
        }
      );
    });
  };
}

export function update%%model_name_camel%%(form_params, success_callback)
{
  var url = `${BASE_URL}/${MODEL_PATH}/${form_params['id']}`

  var params = new URLSearchParams();
  for(var key in form_params)
  {
    params.set(key, form_params[key]);
  }

  const request = axios.put(url, params, custome_headers);

  return (dispatch) => {
    request.then(({data}) => {
      // optional call
      success_callback();
      //
      dispatch(
        {
          type: UPDATED,
          payload: data
        }
      );
    })
    .catch((response) => {
      // you can do whatever parsing you want with the response
      dispatch(
        {
          type: ERROR,
          payload: "Update Failed!"
        }
      );
    });
  };
};


export function delete%%model_name_camel%%(id)
{
  var url = `${BASE_URL}/${MODEL_PATH}/${id}`
  const request = axios.delete(url, custome_headers);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch(
        {
          type: DELETED,
          payload: data
        }
      );
    })
    .catch((response) => {
      // you can do whatever parsing you want with the response
      dispatch(
        {
          type: ERROR,
          payload: `Deleting instcae id: ${id} failed`
        }
      );
    });
  };
}

export function getAll%%model_name_camel%%()
{
  var url = `${BASE_URL}/${MODEL_PATH}/`
  const request = axios.get(url, custome_headers);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch(
        {
          type: DELETED,
          payload: data
        }
      );
    })
    .catch((response) => {
      // you can do whatever parsing you want with the response
      dispatch(
        {
          type: ERROR,
          payload: `Deleting instcae id: ${id} failed`
        }
      );
    });
  };
}
