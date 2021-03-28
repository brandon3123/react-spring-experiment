import React from 'react';

class UserTable extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                {this.props.users}
                </tbody>
            </table>
        )
    }
}

export default UserTable;