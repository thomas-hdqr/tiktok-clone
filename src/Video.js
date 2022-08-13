import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'

function Video() {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    };

  return (
    <div className="video">
        <video 
        className="video__player" 
        loop
        onClick={onVideoPress}
        ref={videoRef}
        controls
        src="https://v16-webapp.tiktok.com/6c2829cd322e6808594403dac5c9e5ef/62f7ce16/video/tos/alisg/tos-alisg-pve-0037c001/fecd465dcecc43d4847e84a0455be1a6/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=5166&bt=2583&cs=0&ds=3&ft=eXd.6HKSMyq8Zp2lHwe2NkFTyl7Gb&mime_type=video_mp4&qs=0&rc=NDc4N2RmMzk5PDc7aGQ7aUBpandldjU6Zm88ZDMzODczNEAyM2AxYjQzNmAxMTFfYDBhYSNoNmEucjRvX3BgLS1kMS1zcw%3D%3D&l=202208131014190102231230142040FB17&btag=80000"></video>
        <VideoFooter />
        {/* <VideoSidebar /> */}
    </div>
  )
}

export default Video