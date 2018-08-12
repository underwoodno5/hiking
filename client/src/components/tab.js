import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HikeList from '../components/hikelist';
import CampList from '../components/camplist';
import ActivityList from '../components/activitylist';



class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
      
    const { value } = this.state;
    
    return (
        <div>
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        {value === 0 && <HikeList />}
        {value === 1 && <CampList />}
        {value === 2 && <ActivityList />}

        </div>


    );
  }
}



export default CenteredTabs;