import React from 'react';
import styles from './index.module.scss';
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        dashboard
        <Link to="/login">跳转登陆页面</Link>
      </div>
    </div>
  );
}
export default Dashboard;