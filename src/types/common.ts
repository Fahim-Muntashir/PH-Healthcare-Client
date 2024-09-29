import { USER_ROLE } from "@/constants/role";

export type IMeta = {
    page: number;
    limit: number;
    totalCount: number;
}

export type UserRole = keyof typeof USER_ROLE;