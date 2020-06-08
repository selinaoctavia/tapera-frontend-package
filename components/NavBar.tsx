import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import $ from 'jquery';

if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
    require('materialize-css');
}


export default class NavBar extends Component<any, any> {
   constructor(props: any) {
        super(props)
        this.props = props;
    }

    componentDidMount = () => {
        $('.side-nav').sidenav();
    }

  render() {
    return (
      <Fragment>
        <nav className="blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <a href="index.html" className="brand-logo">Madmin</a>
              <a href="#" data-activates="side-nav" className="button-collapse show-on-large right">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li className="active">
                  <a href="index.html">Dashboard</a>
                </li>
                <li>
                  <a href="posts.html">Posts</a>
                </li>
                <li>
                  <a href="categories.html">Categories</a>
                </li>
                <li>
                  <a href="comments.html">Comments</a>
                </li>
                <li>
                  <a href="users.html">Users</a>
                </li>
              </ul>
              <ul id="side-nav" className="side-nav">
                <li>
                  <div className="user-view">
                    <div className="background">
                    </div>
                    <a href="#">
                    </a>
                    <a href="#">
                      <span className="name white-text">John Doe</span>
                    </a>
                    <a href="#">
                      <span className="email white-text">john.doe@mail.com</span>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="index.html"><i className="material-icons">dashboard</i> Dashboard</a>
                </li>
                <li>
                  <a href="posts.html"><i className="material-icons">assignment</i> Posts</a>
                </li>
                <li>
                  <a href="categories.html"><i className="material-icons">drag_indicator</i> Categories</a>
                </li>
                <li>
                  <a href="comments.html"><i className="material-icons">comment</i> Comments</a>
                </li>
                <li>
                  <a href="users.html"><i className="material-icons">person_pin_circle</i> Users</a>
                </li>
                <li>
                  <div className="divider"></div>
                </li>
                <li>
                  <a href="#" className="subheader"><i className="material-icons">control_camera</i> Account Controls</a>
                </li>
                <li>
                  <a href="login.html" className="waves-effect"><i className="material-icons">input</i> Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    )
  }
}
