import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const ActivityQuery = gql`
{
  activities{
    id
    name
    location
    type
    rating

  }
}
`;


class ActivityList extends React.Component {
 render() {
    console.log(this.props);
    const{
        data: {loading, activities}
    } = this.props;
    if(loading){
      return null;
    }  

    return (
    <div>
    <Paper className="hikeList">
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Location</TableCell>
            <TableCell >Type</TableCell>
            <TableCell >Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map(activity => {
            return (
              <TableRow key={activity.id}>
                <TableCell component="th" scope="row">
                  {activity.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {activity.location}
                </TableCell>
                <TableCell component="th" scope="row">
                  {activity.type}
                </TableCell>
                <TableCell component="th" scope="row">
                  {activity.rating}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    </div>

    );
  }
}

export default graphql(ActivityQuery)(ActivityList);