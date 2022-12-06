import "../styles/Home.css";
import Navbar from "./Navbar"
import Footer from "./Footer"
import Box from '@mui/material/Box';

function Home() {
  return (
    <div className="App">
        <Navbar />

        <Box sx={{ height: 'calc(100vh - 56px)' }} >

        </Box>
        <Footer />
    </div>
  );
}

export default Home;
