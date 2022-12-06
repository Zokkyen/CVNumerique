import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/logo/logo2m.png';
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import WalletIcon from '@mui/icons-material/Wallet';
import "../styles/Navbar.css";

const pages = ['<_ Informations', '<_ Compétences', '<_ Etudes', '<_ Jobs', '<_ Loisirs', '<_ Portfolio'];

function Navbar() {

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl" >
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              {['left'].map((anchor) => (
                <React.Fragment key={anchor} >
                  <IconButton
                    size="small"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleDrawer(anchor, true)}
                    color="inherit"
                  >
                    <MenuIcon sx={{ width: '40px', height: '40px' }}/>
                  </IconButton>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    <MenuItem 
                      sx={{ width: '50vw' }}
                    >
                      <PermDeviceInformationIcon sx={{ mr: '15px' }} />
                      <Link href="#" underline="hover"  >
                        {pages[0]}
                      </Link>
                    </MenuItem>
                    <MenuItem 
                      sx={{ width: '50vw' }}
                    >
                      <SettingsSuggestIcon sx={{ mr: '15px' }} />
                      <Link href="#" underline="hover"  >
                        {pages[1]}
                      </Link>
                    </MenuItem>
                    <MenuItem 
                      sx={{ width: '50vw' }}
                    >
                      <SchoolIcon sx={{ mr: '15px' }} />
                      <Link href="#" underline="hover"  >
                        {pages[2]}
                      </Link>
                    </MenuItem>
                    <MenuItem 
                      sx={{ width: '50vw' }}
                    >
                      <WorkIcon sx={{ mr: '15px' }} />
                      <Link href="#" underline="hover"  >
                        {pages[3]}
                      </Link>
                    </MenuItem>
                    <MenuItem 
                      sx={{ width: '50vw' }}
                    >
                      <MusicNoteIcon sx={{ mr: '15px' }} />
                      <Link href="#" underline="hover"  >
                        {pages[4]}
                      </Link>
                    </MenuItem>
                    <MenuItem 
                      sx={{ width: '50vw' }}
                    >
                      <WalletIcon sx={{ mr: '15px' }} />
                      <Link href="#" underline="hover"  >
                        {pages[5]}
                      </Link>
                    </MenuItem>
                  </Drawer>
                </React.Fragment>
              ))}
            </Box>
            <img src={logo} alt='logo' className='logo'/>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
export default Navbar;