import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const CampsQuery = gql`
{
    camps{
        id
        name
        location
        distance
        rating
      }
}
`;


class CampList extends React.Component {
 render() {
    console.log(this.props);
    const{
        data: {loading, camps}
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
            <TableCell>Camp Name</TableCell>
            <TableCell >Location</TableCell>
            <TableCell >Distance</TableCell>
            <TableCell >Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {camps.map(camp => {
            return (
              <TableRow key={camp.id}>
                <TableCell component="th" scope="row">
                  {camp.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {camp.location}
                </TableCell>
                <TableCell component="th" scope="row">
                  {camp.distance}
                </TableCell>
                <TableCell component="th" scope="row">
                  {camp.rating}
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

export default graphql(CampsQuery)(CampList);