import axios from "axios";
import { config } from "../../config";
import { ADD_LEADS, GET_LEADS, DELETE_LEADS, EDIT_LEADS } from "../../Types";

// WE NEED THESE TWO TO CALL ASYNC/AWAIT OTHER THAN WE NEED TO USE .THEN AND .CATCH
require("babel-core/register");
require("babel-polyfill");

// GET LEADS
export const getLeads = () => async dispatch => {
  try {
    const res = await axios.get("/api/leads");
    dispatch({
      type: GET_LEADS,
      payload: { leads: res.data }
    });
  } catch (err) {
    console.error(err.message);
  }
};

// ADD LEADS
export const addLeads = () => {};
// DELETE LEADS
export const deleteLeads = () => {};
// EDIT LEADS
export const editLeads = () => {};
