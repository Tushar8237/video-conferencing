import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function Room() {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appId = 1637572516
    const serverSecret = "39de6f7741502880bb2e19d41cd8adf5"
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId, 
        serverSecret, 
        roomId, 
        Date.now().toString(),
        'Tushar'
    )


    const zp = ZegoUIKitPrebuilt.create(kitToken)

    zp.joinRoom({
        scenario : {
            mode: ZegoUIKitPrebuilt.GroupCall,
        }
    })
  } 
  return (
    <div>
        <div ref={myMeeting} />
    </div>
  )
}
