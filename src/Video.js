import React, { useRef, useState } from 'react'
import './Video.css'

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
        src="https://v16-webapp.tiktok.com/35ca7e969d05916d3a637dcdc721ccb0/62f3de44/video/tos/useast2a/tos-useast2a-pve-0068/83e11de2103245dbbbf692d1a7cd75ab/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3180&bt=1590&btag=80000&cs=0&ds=3&ft=eXd.6HKSMyq8ZRAO_we2N1_Aol7Gb&mime_type=video_mp4&qs=0&rc=OzgzOzZmNzM1OGQ1N2Y3NUBpM3Brczd3b2c0eDMzOjczM0A0MDRjM2ExXjExXjEzNmJiYSNhai5iLWhvNGlfLS01MTZzcw%3D%3D&l=2022081010345001021702913505023F3C"></video>
        {/* <VideoFooter /> */}
        {/* <VideoSidebar /> */}
    </div>
  )
}

export default Video