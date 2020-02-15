import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

export class Form extends Component {
    state = {
        email: "",
        role: "",
        message: ""


    };
    static propTypes = {
        addLead: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = e => {
        e.preventDefault();
        const { email, role, message } = this.state;
        const lead = { email, role, message };
        this.props.addLead(lead);
        this.setState({

            email: "",
            role: "",
            message: ""

        });
    };
    render() {
        const { email, role, message } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>ADD ROLES</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Roles</label>
                        <select
                            className="form-control"
                            type="text"
                            name="role"
                            onChange={this.onChange}
                            value={role}
                        >

                            <option>SELECT</option>
                            <option>HR</option>
                            <option>Team Lead</option>
                            <option>MANAGER</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <input
                            className="form-control"
                            type="message"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addLead })(Form);
