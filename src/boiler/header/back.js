import React, {Component} from 'react';
import { RouteComponentProps, withRouter } from "react-router"

const GoBack = ({ history }) => <button className="back" onClick={() => history.goBack()} alt="Go back" >Back</button>;

export default withRouter(GoBack);