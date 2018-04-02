import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component{
  render(){
    const { song } = this.props.data;

    if (!song) {return <div> Loading... </div>;}

    return(
      <div>
        <Link to="/">Back</Link>
        <h3> {song.title} </h3>
        <LyricList lyrics={song.lyrics}/>
        <LyricCreate songId={this.props.params.id}/>
      </div>
    )
  }
}
//write the query, pass to helper, pass in component that should recieve data
//component will try to render before data so write a promise
export default graphql(fetchSong,{
  options:(props) => {return{variables: {id: props.params.id} } }
})(SongDetail);
