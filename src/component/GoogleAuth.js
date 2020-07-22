import React from "react";

class GoogleAuth extends React.Component{
    state = {isSigned : null};

    componentDidMount() {
        window.gapi.load('auth2', () => {
            window.gapi.auth2
                .init({
                    clientId:
                        "616364587651-0leeaqnqlldojv55po6i9dfl2hc9e5j5.apps.googleusercontent.com",
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.auth.isSignedIn.listen(this.authOnChange);
                    console.log(this.auth);
                });
        });
    }

    onLogin = ()=>{
        this.auth.signIn();
    };

    onLogout = ()=>{
        this.auth.signOut();
    };

    authOnChange = async () => {
        await this.setState({isSigned: this.auth.isSignedIn.get()});
        console.log(this.state.isSigned);
    };

    render() {
        return (
            <div>
                Google
                <div onClick={this.onLogin}>Login</div>
                <div onClick={this.onLogout}>Logout</div>
            </div>
        );

    }

}
export default GoogleAuth;