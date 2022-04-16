import {Box, Button, TextField} from "@mui/material";
import React from "react";

const SearchWeather = ({searchLocation, setLocation, location}) => {
    return (
        <div className="w-11/12 ml-0 mt-12">
            <Box
                component="form"
                // sx={{
                //     '& > :not(style)': {m: 1, width: '25ch'},
                // }}
                noValidate
                autoComplete="off"
                onSubmit={searchLocation}
            >
                <div className="flex-row flex w-full gap-2">
                    <TextField
                        fullWidth
                        id="filled-basic"
                        className="w-9/12 "
                        label="Enter Location"
                        variant="filled"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />

                    <Button
                        variant="contained"
                        className="bg-sky-900 font-bold ml-2 w-3/12"
                        color="info"
                        type="submit"
                        style={{textTransform: 'none'}}
                    >
                        Search
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default SearchWeather;