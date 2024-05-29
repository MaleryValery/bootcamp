
import { useState } from "react";
import { Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material";

function CustomForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return <Container sx={{ p: 12, display: 'flex', justifyContent: 'center', alignItems: 'center' ,width: { sx: '80%', md: '60%'}}}>
      <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
        <Typography  variant="h4" sx={{textAlign: 'center'}}>
          Login Form
        </Typography>
        <FormControl sx={{ m: 1,  width: '90%'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type='email'
            label="Email"
          />
        </FormControl>
         <FormControl sx={{ m: 1, width: '90%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button>
          Submit
        </Button>
    </Container>
  </Container>
}

export default CustomForm
