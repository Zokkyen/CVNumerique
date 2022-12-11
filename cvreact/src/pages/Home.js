import "../styles/Home.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Photo from "../images/profil.webp"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Home() {
  return (
    <>
        <Navbar />

        <Box sx={{ display: { xs: 'flex', md: 'none'}, flexDirection: "column", alignItems: 'center', width: '100vw', backgroundColor: '#3d3d3d' }} >
          
          <Box sx={{ height: 'calc(100vh - 56px)', width: '100%', marginTop: '56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Box sx={{ height: '200px', width: '100%', position: 'relative' }} >
              <Box className="boxLeft" sx={{ height: '200px', width: '200px' }} ></Box>
              <Box className="profilePhoto" sx={{ height: '190px', width: '200px' }} >
                <img
                    src={Photo}
                    alt="Profil"
                    className="photo"
                  />
              </Box>
              <Box className="boxRight" sx={{ height: '200px', width: '200px' }} ></Box>
            </Box>
            <Box sx={{ display: 'flex', height: '100px', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Typography color="white" sx={{ padding: '0 20px 0 20px', textAlign: 'center' }}>
                Je m'appelle <span className="secondColor"><strong>Stéphane Swaenepoel (Alias Zokkyen)</strong></span>, futur <span className="secondColor">Concepteur Développeur d'Applications</span>.
                Apprendre de nouvelles choses est mon <span className="secondColor underlineText"><strong>Leitmotiv !</strong></span>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', height: '80px', width: '100%',  justifyContent: 'center', alignItems: 'center' }}>
              <ArrowCircleDownIcon sx={{ width: '80px', height: '80px', color: 'white' }} />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', height: '300px', width: '100%', justifyContent: 'center', alignItems: 'center' }}>

          </Box>

        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100vw', backgroundColor: '#3d3d3d', flexDirection: 'column' }} >
          <Box sx={{ height: 'calc(100vh - 69px)', width: '100%', marginTop: '69px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ height: '200px', width: '400px', position: 'relative' }} >
              <Box className="boxLeft" sx={{ height: '200px', width: '200px' }} ></Box>
              <Box className="profilePhoto" sx={{ height: '190px', width: '200px' }} >
                <img
                    src={Photo}
                    alt="Profil"
                    className="photo"
                  />
              </Box>
              <Box className="boxRight" sx={{ height: '200px', width: '200px' }} ></Box>
            </Box>
            <Box sx={{ display: 'flex', height: '200px', width: '40%', justifyContent: 'center', alignItems: 'center' }}>
              <Typography color="white" sx={{ padding: '0 20px 0 20px', textAlign: 'center' }}>
                Je m'appelle <span className="secondColor"><strong>Stéphane Swaenepoel (Alias Zokkyen)</strong></span>, futur <span className="secondColor">Concepteur Développeur d'Applications</span>.
                Apprendre de nouvelles choses est mon <span className="secondColor underlineText"><strong>Leitmotiv !</strong></span>
              </Typography>
            </Box>
            {/* <Box sx={{ display: 'flex', height: '80px', width: '100%',  justifyContent: 'center', alignItems: 'center' }}>
              <ArrowCircleDownIcon color="secondary" sx={{ width: '80px', height: '80px' }} />
            </Box> */}
          </Box>

          {/* <Box sx={{ display: 'flex', height: '300px', width: '100%', justifyContent: 'center', alignItems: 'center' }}>

          </Box> */}
        </Box>

        <Footer />
    </>
  );
}

export default Home;
