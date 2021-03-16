import React, { useEffect } from 'react'
import './App.css';
import Login from './Login';
import {getTokenFromResponse} from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import {useDataLayerValue} from './DataLayer'

const spotify=new SpotifyWebApi();  

function App() {
  const [{ user,token }, dispatch]=useDataLayerValue();

  useEffect(() => {
    const hash=getTokenFromResponse();
    window.location.hash=""
    const _token=hash.access_token;
    if(_token){
      spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      console.log(user)
      spotify.getMe().then( (user) =>{
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
      console.log(user)
    }
  }, [])
  return (
    <div className="App">
      {
        token ? (<Player spotify={spotify}/>) : ( 
        <Login />
        )
      }
      
    </div>
  );
}

export default App;
