import React from 'react';
import {
  Button, Drawer, Checkbox, Layout, Switch, Row, Col,
} from 'antd';

import Card from './component/card';
import FilterInDrawerContent from './component/drawer/filter';

const {
  Header, Content,
} = Layout;

export default class App extends React.Component {
  state = {
    following: [],
    types: [],
    filter: {
      age: [18, 20],
      bust: [90, 110],
      west: [50, 80],
      hip: [80, 110],
    },
    isBlur: true,
  };

  componentDidMount() {
    chrome.storage.local.get('following', ({ following = [] }) => {
      const types = [...new Set(following.map(item => item.type))];
      this.setState({ following: following.reverse(), types });
    });
  }

  _renderCard = item => (
    <Card item={item} isBlur={this.state.isBlur} />
  );

  _handleChange = () => {
    this.setState({ isBlur: !this.state.isBlur });
  };

  _handleToggleFilterDrawer = () => {
    const { visibleDrawer, filter } = this.state;

    if (visibleDrawer) {
      this.setState({ visibleDrawer: false });
    } else {
      this.setState({
        visibleDrawer: true,
        drawerContent: <FilterInDrawerContent filter={filter} />,
      });
    }
  }

  render() {
    const {
      following, types, isBlur, visibleDrawer, drawerContent,
    } = this.state;

    return (
      <Layout>
        <Header style={{ color: 'white' }}>
          DMM.pornstars
        </Header>
        <Content style={{ padding: '20px 50px' }}>
          <div
            style={{
              height: '60px', paddingBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}
          >
            <p style={{ margin: 0 }}>
              {following.length}
              件の女優
            </p>
            <div style={{
              display: 'flex', width: 100, justifyContent: 'space-between', alignItems: 'center',
            }}
            >
              {/* <Button sieze="small" shape="circle" icon="filter" onClick={this._handleToggleFilterDrawer}/> */}
              {/* types.map(type => (
              <Checkbox>
                {type}
              </Checkbox>
              )) */}
              <Switch
                checkedChildren="blur"
                unCheckedChildren="blur"
                defaultChecked
                onChange={this._handleChange}
                checked={!isBlur}
              />
            </div>
          </div>
          <Row gutter={15}>
            {following.map(item => (
              <Col span={6}>
                <Card item={item} isBlur={isBlur} />
              </Col>
            ))}
          </Row>
        </Content>
        <Drawer
          title="Filter"
          placement="right"
          closable={false}
          width={500}
          onClose={this._handleToggleFilterDrawer}
          visible={visibleDrawer}
        >
          {drawerContent}
        </Drawer>
      </Layout>
    );
  }
}
