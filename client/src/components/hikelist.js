import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const TrailsQuery = gql`
{
  trails{
    id
    name
    location
    difficulty
    rating
    complete

  }
}
`;


class HikeList extends React.Component {
 render() {
    console.log(this.props);
    const{
        data: {loading, trails}
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
            <TableCell>Hike Name</TableCell>
            <TableCell >Location</TableCell>
            <TableCell >Difficulty</TableCell>
            <TableCell >Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trails.map(trail => {
            return (
              <TableRow key={trail.id}>
                <TableCell component="th" scope="row">
                  {trail.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {trail.location}
                </TableCell>
                <TableCell component="th" scope="row">
                  {trail.difficulty}
                </TableCell>
                <TableCell component="th" scope="row">
                  {trail.rating}
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

export default graphql(TrailsQuery)(HikeList);