import { USER_ROLE } from "@/constants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
    page: number;
    limit: number;
    totalCount: number;
}

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
    title: string;
    path: string;
    parentPath?: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    child?: DrawerItem[];
}


export type ResponseSuccessType = {
    data: any;
    meta?: IMeta;
}

export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorResponse[];
}
export type IGenericErrorResponseMessage = {
    path: string | number;
    message: string;
}