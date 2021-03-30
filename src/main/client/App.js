import React from 'react';
import ReactDOM from 'react-dom';
import AllUsersTable from "./components/user/AllUsersTable";
import UserByIdTable from "./components/user/UserByIdTable";

class App extends React.Component {

    render() {
        return (
            <div>
                <AllUsersTable />
                <UserByIdTable id={"2"} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)