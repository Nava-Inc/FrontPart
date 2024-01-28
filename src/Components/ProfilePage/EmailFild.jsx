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
import {Email} from "@mui/icons-material";

export default function EmailFild() {
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
                <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                <OutlinedInput
                    id="Email"
                    // type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                                < Email/>
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Email"
                />
            </FormControl>
        </Box>
    );
}