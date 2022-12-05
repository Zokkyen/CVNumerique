import { Box, Typography, Button } from '@mui/material';
import * as React from 'react';
import "../styles/Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PrintIcon from '@mui/icons-material/Print';
import Pdf from "../files/cv.pdf"

function Footer() {
    return (
        <footer>
            <Box className="footerMobile" sx={{ display: { xs: 'flex', md: 'none', justifyContent: 'space-around' } }}>
                <Typography sx={{ fontSize: '0.8em' }}>
                    Stéphane Swaenepoel<br/>© 2022<br/>Tous droits réservés.
                </Typography>
                <Button
                    variant="link"
                    startIcon={<LinkedInIcon sx={{ width: '35px', height: '35px' }}/>}
                    href="https://www.linkedin.com/in/st%C3%A9phane-swaenepoel-6a730197/"
                    target="_blank"
                    sx={{ p: '0', minWidth: '0', m: '0' }}
                />
                <Button
                    variant="link"
                    startIcon={<GitHubIcon sx={{ width: '35px', height: '35px' }}/>}
                    href="https://github.com/Zokkyen"
                    target="_blank"
                    sx={{ p: '0', minWidth: '0', }}
                />
                <Button
                    variant="link"
                    startIcon={<EmailIcon sx={{ width: '35px', height: '35px' }}/>}
                    href="mailto::stephane.swaenepoel@gmail.com"
                    target="_blank"
                    sx={{ p: '0', minWidth: '0' }}
                />
                <Button
                    variant="link"
                    startIcon={<PrintIcon sx={{ width: '35px', height: '35px' }}/>}
                    href={Pdf}
                    target="_blank"
                    sx={{ p: '0', minWidth: '0', display: "flex", justifyContent: "center", alignItems: "center" }}
                />
            </Box>
            <Box className="footerDesktop" sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Typography sx={{ width: '70%', display: 'flex', my: 'auto', pl: '15px' }}>
                    Stéphane Swaenepoel © 2022 Tous droits réservés.
                </Typography>
                <Box sx={{ width: '30%', display: 'flex', justifyContent: 'space-around' }}>
                    <Button
                        variant="link"
                        startIcon={<LinkedInIcon sx={{ width: '35px', height: '35px' }}/>}
                        href="https://www.linkedin.com/in/st%C3%A9phane-swaenepoel-6a730197/"
                        target="_blank"
                        sx={{ p: '0', minWidth: '0', m: '0' }}
                    />
                    <Button
                        variant="link"
                        startIcon={<GitHubIcon sx={{ width: '35px', height: '35px' }}/>}
                        href="https://github.com/Zokkyen"
                        target="_blank"
                        sx={{ p: '0', minWidth: '0', }}
                    />
                    <Button
                        variant="link"
                        startIcon={<EmailIcon sx={{ width: '35px', height: '35px' }}/>}
                        href="mailto::stephane.swaenepoel@gmail.com"
                        target="_blank"
                        sx={{ p: '0', minWidth: '0' }}
                    />
                    <Button
                        variant="link"
                        startIcon={<PrintIcon sx={{ width: '35px', height: '35px' }}/>}
                        href={Pdf}
                        target="_blank"
                        sx={{ p: '0', minWidth: '0', display: "flex", justifyContent: "center", alignItems: "center" }}
                    />
                </Box>
            </Box>
        </footer>
    );

}
export default Footer;