import PHModal from "@/components/Shared/PHModal/PHModal";
import { TextField } from "@mui/material";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SpecialistModal = ({ open, setOpen }: TProps) => {
    return (
        <PHModal open={open} setOpen={setOpen} title={"Create Specialist"}>
            <TextField> </TextField>
        </PHModal>
    );
};

export default SpecialistModal;