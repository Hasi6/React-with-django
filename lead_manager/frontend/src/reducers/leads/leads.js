import { createReducer } from "../util/reducerUtil";
import { ADD_LEADS, GET_LEADS, DELETE_LEADS, EDIT_LEADS } from "../../Types";

const initialState = [];

// ADD LEADS
const addLeads = (state, payload) => {
  return [...state, payload.lead];
};

// GET LEAD
const getLeads = (state, payload) => {
  return payload.leads;
};

// DELETE LEADS
const deleteLeads = (state, payload) => {
  const newLeads = state.filter(lead => lead._id !== payload.id);

  return newLeads;
};

// eDIT LEADS
const editLeads = (state, payload) => {
  const index = state.findIndex(lead => lead.id == payload.lead.id);
  if (index > -1) {
    state[index] = payload.lead;
  }
  return state;
};

export default createReducer(initialState, {
  [ADD_LEADS]: addLeads,
  [GET_LEADS]: getLeads,
  [DELETE_LEADS]: deleteLeads,
  [EDIT_LEADS]: editLeads
});
