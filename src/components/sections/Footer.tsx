import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Divider, Link, useTheme} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Logo from "../../assets/img/icon.png";

export default function Footer() {
    const theme = useTheme();

    return (
      <footer id={"footer"} className="inset-x-0 bottom-0" style={{background: theme.palette.background.default}}>
          <Box
            sx={{
                padding: '1.5rem',
                background: theme.palette.primary.dark,
                color: theme.palette.primary.contrastText
            }}
          >
              <Box className="lg:flex">
                  <Box className="w-full -mx-6 lg:w-2/5">
                      <Box className="flex items-center">
                          <Link
                                href="/"
                                underline="none"
                                color="inherit"
                                sx={{textDecoration: 'none'}}
                          >
                            <img className="h-12" src={Logo} alt="Logo"/>
                          </Link>
                          <Typography variant="h3" component="div" sx={{flexGrow: 1, color: '#fff'}}>
                              {import.meta.env.VITE_APP_NAME}
                          </Typography>
                      </Box>

                      <Typography variant="h6" color="textSecondary" sx={{color: '#fff'}}>
                            If you have any questions, feel free to contact me. I will get back to you as soon as possible.
                      </Typography>

                      <Box
                          sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', lg: 'flex-start' },
                            marginTop: 1,
                            '& > *': {
                                marginX: "24px",
                            }
                        }}
                      >
                          <Link
                            href="https://github.com/Jack-Christopher"
                            underline="none"
                            color={theme.palette.primary.contrastText}
                            sx={{textDecoration: 'none'}}
                          >
                            <GitHubIcon sx={{ fontSize: 50}}/>
                          </Link>
                          <Link
                            href="mailto:jackchristopherhuaihuahuayhua@gmail.com"
                            underline="none"
                            color={theme.palette.primary.contrastText}
                            sx={{textDecoration: 'none'}}
                          >
                            <EmailIcon sx={{ fontSize: 50}}/>
                          </Link>

                            <Link
                                href="tel:+51997817071"
                                underline="none"
                                color={theme.palette.primary.contrastText}
                                sx={{textDecoration: 'none'}}
                            >
                                <PhoneIcon sx={{ fontSize: 50}}/>
                            </Link>

                      </Box>
                      <Typography variant="h6" color="textSecondary" sx={{color: '#fff', marginTop: '1rem'}}>
                          Let's Connect!
                        </Typography>
                  </Box>
              </Box>

              <Divider sx={{marginTop: '1rem', borderColor: theme.palette.primary.contrastText, height: '1px'}}/>

              <Typography variant="body2" align="center" color="textSecondary" sx={{color: theme.palette.primary.contrastText, margin: "1rem 0rem"}}>
                  Made with ❤️ by {import.meta.env.VITE_AUTHOR_NAME}
              </Typography>
          </Box>
      </footer>
  );
}
