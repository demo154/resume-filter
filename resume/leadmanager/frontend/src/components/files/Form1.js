import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFile } from '../../actions/files';

export class Form1 extends Component {
    state = {
        document: ""


    };
    static propTypes = {
        addFile: PropTypes.func.isRequired
    };
    onChange = (e) => this.setState({ document: e.target.files[0] });
    // handleImageChange = (e) => {
    //     this.setState({
    //         document: e.target.files[0]
    //     })
    // };
    // async onSubmit(e) {
    //     e.preventDefault()
    //     let res = await this.uploadFile(this.state.document);
    //     console.log(res.data);
    //     this.State({
    //         document: null
    //     });
    // };
    onSubmit = (e) => {
        e.preventDefault();
        const { document } = this.state;
        const file = { document };
        this.props.addFile(file);
        this.setState({

            document: ""


        });
    };
    render() {
        const { document } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>ADD Files</h2>
                <form onSubmit={this.onSubmit} >
                    {/* <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div> */}

                    <div className="form-group">
                        <label>Document</label>
                        <input type="file"
                            className="form-control"
                            accept="application/pdf, application/msword"
                            name="document"
                            onChange={this.onChange}
                            value={document}
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

export default connect(null, { addFile })(Form1);
