import React, {FC, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles(() => 
    createStyles({
        background: {
            backgroundSize: "cover",
            height: "100vh",
        },
        paper: {
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
            top: "33%",
            width: "45%",
        },
        inputbase: {
            width: "80%",
        },
    }),
)

const SearchBar: FC = () => {
    const classes = useStyle();
    const [keyword, setKeyword] = useState("");
    const history = useHistory();
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    }
      
    const handleSubmit = () => {
        history.push("/search/" + keyword);  
    }
      
    return(
        <AppBar position = "static">
            <Toolbar>
                <Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
                    <IconButton type="submit">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        className={classes.inputbase}
                        placeholder="検索する文字列を入力してください"
                        onChange={handleChange}
                    />
                </Paper>
            </Toolbar>
        </AppBar>
    
    )
}

export default SearchBar;