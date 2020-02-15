import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFiles, deleteFile } from '../../actions/files';
export class Files extends Component {
    static propTypes = {
        files: PropTypes.array.isRequired,
        getFiles: PropTypes.func.isRequired,
        deleteFile: PropTypes.func.isRequired,

    };
    componentDidMount() {
        this.props.getFiles();
    }
    render() {
        return (
            <Fragment>
                <h2> Files </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            {/* <th>Name</th> */}
                            <th>Document</th>
                            {/* <th>Document</th> */}
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.files.map((file) => (
                            <tr key={file.id}>
                                <td>{file.id}</td>
                                {/* <td>{lead.name}</td> */}
                                <td>{file.document}</td>
                                {/* <td>{lead.document}</td> */}

                                <td>
                                    <button
                                        onClick={this.props.deleteFile.bind(this, file.id)}
                                        className="btn btn-danger btn-sm">
                                        {" "}delete</button></td>

                            </tr>

                        ))}
                    </tbody>
                </table>

            </Fragment>
            // <div>lead list</div>
        );
    }
}
const mapStateToProps = state => ({
    files: state.files.files
});

export default connect(mapStateToProps, { getFiles, deleteFile })(Files);
