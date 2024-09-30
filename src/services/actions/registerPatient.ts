"use server"

export const registerPatient = async (formData:FormData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/create-patient`, {
        method: "POST",
        body: formData,
        cache:"no-store",
    })

    const patientInfo = await res.json();
    console.log(patientInfo);

    return patientInfo;
}