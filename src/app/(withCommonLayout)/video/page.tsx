import VideoCall from '@/components/UI/VideoCall/VideoCall';
import React from 'react';

const VideoCallPage = ({ searchParams }: { searchParams: { videoCallingId: string } }) => {


    const videoCallingId = searchParams.videoCallingId;

    return <VideoCall videoCallingId={videoCallingId}></VideoCall>
};

export default VideoCallPage;