import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import assets from '@/assets';
import Link from "next/link";

const LoginPage = () => {
    return (
        <Container>
            <Stack sx={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Box sx={{
                    maxWidth: 600,
                    width: "100%",
                    boxShadow: 1,
                    borderRadius: 1,
                    padding: 4,
                    textAlign: "center"
                }}>

                    <Stack sx={{
                        justifyContent: "center",
                        alignItems: "center",

                    }}>
                        <Box><Image src={assets.svgs.logo} width={50} height={50} alt="logo" /></Box>

                        <Box>
                            <Typography variant="h6">
                                Login PH HealthCare
                            </Typography>
                        </Box>


                    </Stack>
                    <Box>
                        <form>
                            <Grid container spacing={3} my={1}>

                                <Grid item md={6}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>


                            </Grid>
                            <Typography mb={4} textAlign={"end"} component="p" fontWeight={300}>
                                Forgot Password?
                            </Typography>
                            <Button sx={{
                                margin: "10px 0"
                            }} fullWidth>Register</Button>
                            <Typography component="p" fontWeight={300}>
                                Create An Account? <Link href={"/register"}>Register</Link>
                            </Typography>
                        </form>
                    </Box>

                </Box>
            </Stack>
        </Container>
    );
};

export default LoginPage;