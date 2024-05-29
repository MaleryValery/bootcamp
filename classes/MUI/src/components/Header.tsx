import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';


const navItems = ['Home', 'About', 'Contact'];

export default function Header() {


  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
          >
            MUI
          </Typography>
          <Box>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          <Avatar sx={{ ml: { xs: 'auto', md:2}} } />
        </Toolbar>
      </AppBar>
      </>
  );
}
