import React from 'react';
import { Row, Col, Layout } from 'antd';
import './App.less';
import AppHeader from './layout/AppHeader';
import AppFooter from './layout/AppFooter';

const App = () => {

  return (
    <Layout style={{ height: "100vh" }}>
      <AppHeader />
      <Layout.Content style={{ height: "100%", padding: "1rem" }}>
        <div style={{ backgroundColor: "white", borderRadius: '5px', height: "100%" }}>

        </div>
      </Layout.Content>
      <AppFooter />
    </Layout>

  );
}

export default App;