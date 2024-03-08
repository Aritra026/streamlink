import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const {roomId} = useParams()
    const myMeeting = async (element) => {
        const appID= 600330459;
        const serverSecret = "959c231e001ff9074e9556e2ecaefc0e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret, roomId, Date.now().toString(),"Enter Username");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };
    return (
        <div className='room-page'>
            <div ref={myMeeting}/>
        </div>
    );
};
export default RoomPage 