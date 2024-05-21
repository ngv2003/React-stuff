import React, { useState } from 'react';
import propTypes from 'prop-types';

function MyTeam(props) {
    const [player, setPlayer] = useState([]);
    const [newPlayer, setNewPlayer] = useState("");

    function handleInputChange(event) {
        setNewPlayer(event.target.value);
    }

    function addPlayer() {
        if (newPlayer.trim() !== "") {
            setPlayer(p => [...p, newPlayer]);
            setNewPlayer("");
        }
    }

    function deletePlayer(index) {
        const updatedTeam = player.filter((_, i) => i !== index);
        setPlayer(updatedTeam);
    }

    function movePlayerUp(index) {
        if (index > 0) {
            const updatedTeam = [...player];
            [updatedTeam[index], updatedTeam[index - 1]] =
            [updatedTeam[index - 1], updatedTeam[index]];
            setPlayer(updatedTeam);
        }
    }

    function movePlayerDown(index) {
        if (index < player.length - 1) {
            const updatedTeam = [...player];
            [updatedTeam[index], updatedTeam[index + 1]] =
            [updatedTeam[index + 1], updatedTeam[index]];
            setPlayer(updatedTeam);
        }
    }

    return (
        <div className='team'>
            <h1>{props.name}</h1>
            <div className='name-box'>
                <input type="text"
                       placeholder='Enter a player...'
                       value={newPlayer}
                       onChange={handleInputChange} />
                <button className='add-button' onClick={addPlayer}>
                    Add
                </button>
            </div>
            <div className='list-container'>
            <ol>
                {player.map((play, index) => 

                    <li key={index}>
                        <span className='text'>{index+1}.</span>
                        <span className='text-1'>{play}</span>
                        <button className='delete-button' onClick={() => deletePlayer(index)}>
                            Delete
                        </button>
                        <button className='move-button' onClick={() => movePlayerUp(index)}>
                            👆
                        </button>
                        <button className='move-button' onClick={() => movePlayerDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
            </div>
        </div>
    );
}

MyTeam.propTypes = {
    name: propTypes.string,
}

export default MyTeam;
