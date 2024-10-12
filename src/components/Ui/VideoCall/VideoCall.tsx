'use client'
import React, { useState } from 'react';
import AgoraUIKit from 'agora-react-uikit';
import { Button, Stack } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Image from 'next/image';
const VideoCall = ({ videoCallingId }: { videoCallingId: string }) => {
    const [startVideoCall, setStartVideoCall] = useState(false);
    const rtcProps = {
        appId: process.env.NEXT_PUBLIC_VIDEO_CALL_APP_ID || '',
        channel: videoCallingId, // your agora channel
        token: null // use null or skip if using app in testing mode
    };
    const callbacks = {
        EndCall: () => setStartVideoCall(false),
    };
    return startVideoCall ? (
        <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
        </div>
    ) : (

        <Stack sx={{ width: '100%', maxWidth: 500, mx: "auto", }

        }
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}

        >
            <Button onClick={() => setStartVideoCall(true)} sx={{ width: "180px" }} endIcon={<VideoCallIcon></VideoCallIcon>}>
                Start Call
            </Button>
            <br />
            <br />
            <Image src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb25jMWk1b3VxYWtjYTdpZXlnNGcwZHVqcGppejM3bDUybTl3aXQ0ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PnHX3RAVHsjHXTO4qv/giphy.gif'
                width={500} height={500} alt='video call'></Image>
        </Stack>
    );
};

export default VideoCall;