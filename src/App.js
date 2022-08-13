import './App.css';
import Video from './Video'

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
        url='https://v16-webapp.tiktok.com/6c2829cd322e6808594403dac5c9e5ef/62f7ce16/video/tos/alisg/tos-alisg-pve-0037c001/fecd465dcecc43d4847e84a0455be1a6/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=5166&bt=2583&cs=0&ds=3&ft=eXd.6HKSMyq8Zp2lHwe2NkFTyl7Gb&mime_type=video_mp4&qs=0&rc=NDc4N2RmMzk5PDc7aGQ7aUBpandldjU6Zm88ZDMzODczNEAyM2AxYjQzNmAxMTFfYDBhYSNoNmEucjRvX3BgLS1kMS1zcw%3D%3D&l=202208131014190102231230142040FB17&btag=80000'
        channel="Toto"
        song="Italian Hooker - Pasquale and Rosina Parmiggiano"
        description="How to make pizza the right way"
        likes={123}
        messages={20}
        shares={400}
         />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
