import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff.js";
import Visibility from "@mui/icons-material/Visibility.js";

export default function UserFild() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            {/*<TextField*/}
            {/*    id="input-with-icon-textfield"*/}
            {/*    label="username"*/}
            {/*    variant="outlined"*/}
            {/*    // defaultValue="username"*/}
            {/*    InputProps={{*/}
            {/*        startAdornment: (*/}
            {/*            <InputAdornment position="start">*/}
            {/*                <AccountCircle />*/}
            {/*            </InputAdornment>*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
            <FormControl sx={{ m: 1, width: '90%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">UserName</InputLabel>
                <OutlinedInput
                    id="UserName"
                    // type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                               < AccountCircle/>
                            </IconButton>
                        </InputAdornment>
                    }
                    label="UserName"
                />
            </FormControl>
        </Box>
    );
}