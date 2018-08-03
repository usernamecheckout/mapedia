import React  from 'react';
import logo from '../assets/images/logo.svg';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
// proptypes is an object. it can help you check the type of the

export class Header extends React.Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        handleLogout: PropTypes.func.isRequired,
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Around</h1>
                {
                    this.props.isLoggedIn ?
                        <a className="logout"
                           onClick={this.props.handleLogout}
                        >
                            <Icon type="logout" />{' '}Logout
                        </a> : null
                }
            </header>
        );
    }
}
