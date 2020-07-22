import React from 'react';

class FacebookAuth extends React.Component {
    state = {user:false};

    componentDidMount() {
        window.FB.init({
                appId           : '254779632420791',
                autoLogAppEvents: true,
                xfbml           : true,
                version         : 'v7.0'
            }
        );
        this.FB = window.FB;
    }

    login = () => {
        this.FB.login(function(response) {
            console.log(response);
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                this.FB.api('/me', {fields: 'name, email' }, function(response) {
                    console.log(response);
                    console.log('Good to see you, ' + response.name + '.');
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
            // handle the response
        }, {
            scope: 'email',
            return_scopes: true,
            // enable_profile_selector:true
        });
    };

    logout = ()=>{
        this.FB.logout(function(response) {
            console.log(response);
            // user is now logged out
        });
    };

    render() {
        return (
            <div>
                <div onClick={this.login}>Facebook Login</div>
                <div onClick={this.logout}>Facebook Logout</div>
            </div>
        )
    }
}

export default FacebookAuth