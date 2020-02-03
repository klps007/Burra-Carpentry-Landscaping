import React, {
    Component
} from "react";
import "../styles/HomePage.css";


export class AdminPage extends Component {
    render() {
        return (
                  <div>
        <h1>Admin Dashboard</h1>
        { 
        //   (this.state.user) ? 
        //     <Welcome 
        //      onlogOut={this.logOut.bin	d(this)} 
        //     />
        //   :
        //     <LoginForm 
        //      onLogin={this.onLogin.bind(this)} 
        //     />
        }
      </div>
        );
    }
}

export default AdminPage;