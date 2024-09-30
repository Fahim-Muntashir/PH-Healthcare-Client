import PHFileUploader from "@/components/Form/PHFileUploader";
import PHForm from "@/components/Form/PHForm";
import PHInput from "@/components/Form/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialitiesApi";
import { modifyPayload } from "@/utils/modifyPayloadData";
import { Button, Grid, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SpecialtyModal = ({ open, setOpen }: TProps) => {

    const [createSpecialty] = useCreateSpecialtyMutation();

    const handleFormSubmit = async (values: FieldValues) => {

        const data = modifyPayload(values);



        try {
            const res = await createSpecialty(data).unwrap
                ();
            if (res?.id) {
                toast.success("Specialty Created Successfully!")
                setOpen(false);
            }
        } catch (err) {
            console.error(err);
        }


    }
    return (
        <PHModal open={open} setOpen={setOpen} title={"Create A New Specialist"
        }>

            <PHForm onSubmit={handleFormSubmit}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <PHInput name="title" label="Title">
                        </PHInput>
                    </Grid>
                    <Grid item md={6}>
                        <PHFileUploader name="file" label="Upload File"
                        ></PHFileUploader>
                    </Grid>
                </Grid>

                <Button sx={{ mt: 1 }} type="submit">
                    Create
                </Button>

            </PHForm>

        </PHModal >
    );
};

export default SpecialtyModal;