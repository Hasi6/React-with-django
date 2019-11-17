import { createReducer } from "../util/reducerUtil";
import { ADD_LEADS, GET_LEADS, DELETE_LEADS, EDIT_LEADS } from "../../Types";

const initialState = {
  leads: []
};

// ADD LEADS
const addLeads = (state, payload) => {
  return [...state.leads, payload.lead];
};

// GET LEAD
const getLeads = (state, payload) => {
  return { leads: payload.leads };
};

// DELETE LEADS
const deleteLeads = (state, payload) => {
  const newLeads = state.filter(lead => lead._id !== payload.id);

  return { leads: newLeads };
};

// eDIT LEADS
const editLeads = (state, payload) => {
  const index = state.leads.findIndex(lead => lead.id == payload.lead.id);
  if (index > -1) {
    state.leads[index] = payload.lead;
  }
  return state;
};

export default createReducer(initialState, {
  [ADD_LEADS]: addLeads,
  [GET_LEADS]: getLeads,
  [DELETE_LEADS]: deleteLeads,
  [EDIT_LEADS]: editLeads
});
