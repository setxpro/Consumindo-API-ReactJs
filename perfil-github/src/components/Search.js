/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';

import { Button, makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const usestyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    busca: {
        outline: 'none',
        border: '1px solid #64ffda',
        background: 'transparent',
        color:'#8892b0',
        width: 200,
        height: 30,
        fontSize: 20,  
        padding: 5,
        borderRadius: 5,
    },
    git: {
        color:'#64ffda',
        fontSize: 200,
        marginBottom: 100,
    },
    img: {
        borderRadius: '50%',
        marginBottom: 20,
    },
    form: {
        display: 'flex',
        
    },
    name: {
        marginBottom: 15,
        color: '#64ffda',
        textAlign: 'center',
    },
    linkName: {
        marginBottom: 15,
        color: '#8892b0',
        textDecoration: 'none',
        textAlign: 'center',
    },
    city: {
        marginBottom: 15,
        textAlign: 'center',
    },
    biog: {
        textAlign: 'center',
    }
});


export default function Search() {

    const classes = usestyles();

    const [search, setSearch] = useState([]);
    const [userData, setUseData] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.github.com/users/${search}`)
        .then(resp => resp.json())
        .then(response => setUseData(response))
    }
    console.log(userData)
    const HandleChange = (event) => {
        setSearch(event.target.value);
    }

    return(
        <div className={classes.root}>

            {!userData && (<GitHubIcon className={classes.git}/>)}

            {userData && (
                <div>
                        <img src={userData.avatar_url}
                        alt=""
                        height="200px"
                        className={classes.img}
                        />

                         <h1 className={classes.name}>
                                <a href={`https://github.com/${search}?tab=repositories`} className={classes.linkName} target="_new">
                                {userData.name}
                                </a>
                             </h1>

                    <h3 className={classes.city}>{userData.location}</h3>

                    <p  className={classes.name}>
                        <a href={userData.blog} className={classes.linkName}>
                            {userData.blog}
                        </a>
                    </p>
                        <p className={classes.name}>
                          {userData.bio}
                        </p>
            </div>
            )}

            <form className={classes.form} onSubmit={handleSubmit}>
                <input 
                type="text"
                className={classes.busca}
                placeholder="Search"
                value={search}
                onChange={HandleChange}
                required
                />
                <Button 
                style={{
                    color: '#64ffda', 
                    border: '1px solid #64ffda', 
                    height: '30px', 
                    marginLeft: '3px'}}
                    type="submit"
                >
                Search
                </Button>
            </form>
        </div>
    );
}