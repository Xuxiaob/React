import React, {Component} from 'react';
import styles from "../assets/css/footer.module.css"
import {NavLink} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div className={styles['foot-btn']}>
                <ul>
                    <li className={styles.home}>
                        <NavLink to="/home"/>
                    </li>
                    <li className={styles.write}>
                        <NavLink to="/buycar"/>
                    </li>
                    <li className={styles.my}>
                        <NavLink to="/user"/>
                    </li>
                </ul>
            </div>
        );
    }
}

