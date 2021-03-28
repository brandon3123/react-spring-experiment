import React from 'react';

class UserRow extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
                <td>{this.props.user.email}</td>
            </tr>
        )
    }
}

export default UserRow;