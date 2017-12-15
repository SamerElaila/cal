import React, { Component } from 'react';
import Button from 'rmwc/Button';
import { Toolbar, ToolbarRow, ToolbarTitle, ToolbarSection } from 'rmwc/Toolbar';

class Login extends Component {
  constructor(props) {
    super(props);

    this.goTo = this.goTo.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarTitle> Auth0 - React </ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection alignEnd>
            { isAuthenticated() ? (
                <Button onClick={this.logout}>
                  Log Out
                </Button>
              ) : (
                <Button onClick={this.login}>
                  Log In
                </Button>
              )
            }
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
      </div>
    );
  }
}

export default Login;
