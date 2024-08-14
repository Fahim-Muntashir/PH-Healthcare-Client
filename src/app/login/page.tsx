'use client';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import assets from '@/assets';
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";


export type FormValues = {
    email: string;
    password: string;
}


const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>()


    const onSubmit: SubmitHandler<FormValues> = async (values) => {
        console.log(values);
        try {
            const res = await userLogin(values)

            if (res?.data?.accessToken) {

                storeUserInfo({ accessToken: res?.data?.accessToken })
            }
        } catch (err: any) {
            console.log(err.message);
        }
    }


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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={3} my={1}>

                                <Grid item md={6}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        size="small"
                                        fullWidth={true}
                                        {...register("email")} />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        size="small"
                                        fullWidth={true}
                                        {...register("password")}
                                    />
                                </Grid>


                            </Grid>
                            <Typography mb={4} textAlign={"end"} component="p" fontWeight={300}>
                                Forgot Password?
                            </Typography>
                            <Button type="submit" sx={{
                                margin: "10px 0"
                            }} fullWidth>Login</Button>
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