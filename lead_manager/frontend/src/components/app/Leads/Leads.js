import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getLeads } from "../../../actions/leads/leads";

const Leads = ({ leads, getLeads }) => {
  useEffect(() => {
    getLeads();
  }, []);

  return (
    <Fragment>
      <h1>Leads</h1>
      {leads.length > 0 && (
        <table className="table table-stripe">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td><button className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    leads: state.leads.leads
  };
};

export default connect(mapStateToProps, { getLeads })(Leads);
