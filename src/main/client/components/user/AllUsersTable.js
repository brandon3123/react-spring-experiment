import React from 'react';
import UserTable from "./UserTable";
import {fetchAllUsers} from "../../api/user/UserRoutes";
import UserRow from "./UserRow";

class AllUsersTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetchAllUsers()
            .then(users => {
                this.setState({
                    users: users.map(user => {
                        return <UserRow key={user._links.self.href}
                                        user={user}/>
                    })
                })
            })
            .catch(error => console.log("Error fetching all users. " + error));
    }

    render() {
        return (
            <UserTable users={this.state.users}/>
        )
    }
}

export default AllUsersTable;