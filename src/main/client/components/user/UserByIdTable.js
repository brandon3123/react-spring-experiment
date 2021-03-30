import React from 'react'
import {fetchUserById} from "../../api/user/UserRoutes";
import UserRow from "./UserRow";
import UserTable from "./UserTable";

class UserByIdTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userFound: null
        }
    }

    componentDidMount() {
        fetchUserById(this.props.id)
            .then(user => this.setState({userFound: <UserRow key={user._links.self.href} user={user}/>}))
            .catch(error => console.log("Error fetching user by id " + this.props.id + " - " + error));
    }

    render() {
        return (
            <UserTable users={[this.state.userFound]}/>
        )
    }
}

export default UserByIdTable;