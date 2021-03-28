import React from 'react';
import ReactDOM from 'react-dom';
import UserTable from "./components/user/UserTable";
import FetchAllUsers from "./api/user/UserRoutes";
import AllUsersTable from "./components/user/AllUsersTable";

class App extends React.Component {

    render() {
        return (
            <AllUsersTable />

        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)