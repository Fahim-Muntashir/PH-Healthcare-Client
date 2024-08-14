'use client'
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import assets from '@/assets';
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayloadData";
import { registerPatient } from "@/services/actions/registerPatient";


interface IpatientData {
    name: string;
    email: string;
    contactNumber: string;
    address: string
}

interface IpatientRegisterFormData {
    password: string;
    patient: IpatientData;
}

const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IpatientRegisterFormData>()


    const onSubmit: SubmitHandler<IpatientRegisterFormData> = async (values) => {
        const data = modifyPayload(values);
        try {
            const res = await registerPatient(data);
            console.log(res);
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
                                Patient Register
                            </Typography>
                        </Box>


                    </Stack>
                    <Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={3} my={1}>
                                <Grid item md={12}>
                                    <TextField
                                        label="Name"
                                        variant="outlined"
                                        size="small"
                                        fullWidth={true}                                        {...register("patient.name")}

                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        size="small"
                                        {...register("patient.email")}
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        size="small"
                                        {...register("password")}

                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Contact Number"
                                        type="tel"
                                        variant="outlined"
                                        size="small"
                                        {...register("patient.contactNumber")}

                                        fullWidth={true}
                                    />
                                </Grid><Grid item md={6}>
                                    <TextField
                                        label="Address"
                                        type="text"
                                        variant="outlined"
                                        size="small"
                                        {...register("patient.address")}
                                        fullWidth={true}
                                    />
                                </Grid>
                            </Grid>

                            <Button type="submit" sx={{
                                margin: "10px 0"
                            }} fullWidth>Register</Button>
                            <Typography component="p" fontWeight={300}>
                                Do you already have an account? <Link href={"/login"}>Login</Link>
                            </Typography>
                        </form>
                    </Box>

                </Box>
            </Stack>
        </Container>
    );
};

export default RegisterPage;