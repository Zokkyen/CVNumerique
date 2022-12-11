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
                    startIcon={<LinkedInIcon aria-label="Mon LinkedIn" sx={{ width: '35px', height: '35px' }}/>}
                    href="https://www.linkedin.com/in/st%C3%A9phane-swaenepoel-6a730197/"
                    target="_blank"
                    sx={{ p: '0', minWidth: '0', m: '0' }}
                />
                <Button
                    variant="link"
                    startIcon={<GitHubIcon aria-label="Mon Github" sx={{ width: '35px', height: '35px' }}/>}
                    href="https://github.com/Zokkyen"
                    target="_blank"
                    sx={{ p: '0', minWidth: '0', }}
                />
                <Button
                    variant="link"
                    startIcon={<EmailIcon aria-label="Envoyer un mail" sx={{ width: '35px', height: '35px' }}/>}
                    href="mailto::stephane.swaenepoel@gmail.com"
                    target="_blank"
                    sx={{ p: '0', minWidth: '0' }}
                />
                <Button
                    variant="link"
                    startIcon={<PrintIcon aria-label="Télécharger le CV" sx={{ width: '35px', height: '35px' }}/>}
                    href={Pdf}
                    target="_blank"
                    sx={{ p: '0', minWidth: '0', display: "flex", justifyContent: "center", alignItems: "center" }}
                />
            </Box>
            <Box className="footerDesktop" sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Typography sx={{ width: '45%', display: 'flex', my: 'auto', pl: '15px' }}>
                    Stéphane Swaenepoel © 2022 Tous droits réservés.
                </Typography>
                <Box sx={{ width: 'fit-content', display: 'flex', marginLeft: 'auto' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ my: 'auto', pl: '20px', pr: '5px' }}>
                            LindekIn
                        </Typography>
                        <Button
                            variant="link"
                            startIcon={<LinkedInIcon aria-label="Mon LinkedIn" sx={{ width: '35px', height: '35px' }}/>}
                            href="https://www.linkedin.com/in/st%C3%A9phane-swaenepoel-6a730197/"
                            target="_blank"
                            sx={{ p: '0', minWidth: '0', m: '0' }}
                        />                        
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ my: 'auto', pl: '20px', pr: '5px' }}>
                            Github
                        </Typography>
                        <Button
                            variant="link"
                            startIcon={<GitHubIcon aria-label="Mon Github" sx={{ width: '35px', height: '35px' }}/>}
                            href="https://github.com/Zokkyen"
                            target="_blank"
                            sx={{ p: '0', minWidth: '0', }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ my: 'auto', pl: '20px', pr: '5px' }}>
                            Mail
                        </Typography>
                        <Button
                            variant="link"
                            startIcon={<EmailIcon aria-label="Envoyer un mail" sx={{ width: '35px', height: '35px' }}/>}
                            href="mailto::stephane.swaenepoel@gmail.com"
                            target="_blank"
                            sx={{ p: '0', minWidth: '0' }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ my: 'auto', pl: '20px', pr: '5px' }}>
                            Mon CV
                        </Typography>
                        <Button
                            variant="link"
                            startIcon={<PrintIcon aria-label="Télécharger le CV" sx={{ width: '35px', height: '35px' }}/>}
                            href={Pdf}
                            target="_blank"
                            sx={{ p: '0', minWidth: '0', display: "flex", justifyContent: "center", alignItems: "center", mr: '10px' }}
                        />
                    </Box>
                </Box>
            </Box>
        </footer>
    );

}
export default Footer;