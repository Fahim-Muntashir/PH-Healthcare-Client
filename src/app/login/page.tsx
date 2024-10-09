'use client';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import assets from '@/assets';
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import PHForm from "@/components/Form/PHForm";
import PHInput from "@/components/Form/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";


export const validationSchema = z.object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6, "Must be at least 6 characters long")
})


const LoginPage = () => {
    const [error, setError] = useState("");
    const router = useRouter();
    const handleLogin = async (values: FieldValues) => {
        console.log(values);
        try {
            const res = await userLogin(values)

            if (res?.data?.accessToken) {
                toast.success(res.message)

                storeUserInfo({ accessToken: res?.data?.accessToken })

                // router.push("/dashboard")
            } else {
                setError(res.message)
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

                    {error && <Box>
                        <Typography sx={{
                            backgroundColor: "red",
                            padding: "1px",
                            borderRadius: "2px",
                            color: "white",
                            marginTop: "1px",
                        }}>
                            {error}
                        </Typography>
                    </Box>}
                    <Box>
                        <PHForm

                            onSubmit={handleLogin} resolver={zodResolver(validationSchema)} defaultValues={{
                                email: "",
                                password: "",
                            }}>
                            <Grid container spacing={3} my={1}>

                                <Grid item md={6}>
                                    <PHInput
                                        name="email"
                                        label="Email"
                                        type="email"
                                        size="small"
                                        fullWidth={true}

                                    ></PHInput>
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput
                                        name="password"
                                        label="Password"
                                        type="password"
                                        size="small"
                                        fullWidth={true}

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
                        </PHForm>
                    </Box>

                </Box>
            </Stack>
        </Container>
    );
};

export default LoginPage;