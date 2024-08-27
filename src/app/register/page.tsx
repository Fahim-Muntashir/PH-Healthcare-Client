'use client'
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import assets from '@/assets';
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayloadData";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import PHForm from "@/components/Form/PHForm";
import PHInput from "@/components/Form/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


export const patientValidationSchema = z.object({
    name: z.string().min(1, "Please enter your Name"),
    email: z.string().email("plaease enter a valid email address!"),
    contactNumber: z.string().regex(/^\d{11}$/, "Please provide a valid contact number"),
    address: z.string().min(1, "Please provide a valid address")

})

export const validationSchema = z.object({
    password: z.string().min(1, "Please enter your password at least 8 characters!"),
    patient: patientValidationSchema,
})


export const defaultValues = {
    password: "",
    patient: {
        name: "",
        email: "",
        contactNumber: "",
        address: ""

    }
}


const RegisterPage = () => {

    const router = useRouter();

    const handleRegister = async (values: FieldValues) => {
        const data = modifyPayload(values);
        try {
            const res = await registerPatient(data);

            const result = await userLogin({ password: values.password, email: values.patient.email })

            if (result?.data?.accessToken) {
                toast.success(res.message)

                storeUserInfo({ accessToken: result?.data?.accessToken })

                router.push("/")
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
                                Patient Register
                            </Typography>
                        </Box>


                    </Stack>
                    <Box>
                        <PHForm resolver={zodResolver(validationSchema)} onSubmit={handleRegister} defaultValues={defaultValues}>
                            <Grid container spacing={3} my={1}>
                                <Grid item md={12}>
                                    <PHInput required={true}

                                        label="Name"
                                        fullWidth={true} name="patient.name"

                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput
                                        label="Email"
                                        type="email"
                                        name="patient.email"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput
                                        label="Password"
                                        type="password"
                                        name="password"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Contact Number"
                                        type="tel"
                                        name="patient.contactNumber"

                                        fullWidth={true}
                                    />
                                </Grid><Grid item md={6}>
                                    <PHInput required={true}

                                        label="Address"
                                        type="text"
                                        name="patient.address"
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
                        </PHForm>
                    </Box>

                </Box>
            </Stack>
        </Container >
    );
};

export default RegisterPage;