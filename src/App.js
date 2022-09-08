import './App.css';
import Video from './Video'
import { coding, lisbon, bjj, biking, pizza } from './videos'
import millify from 'millify'; 

function App() {

  return (
    <div className="App">
      <div className="app__videos">
            <Video
            url={coding}
            channel="thecleverprogrammer"
            description="This is the reality of my life... #programmer #programming #coding #code #coder #softwareengineer #computerscience #tiktoktrend #developer #codinglife"
            song="Cursed renegade - AVE"
            likes={millify(1263293)}
            message={millify(239)}
            share={millify(231)}
            />
            <Video
            url={lisbon}
            channel="wheretofindme"
            description="if you’re planning a trip to Portugal, this fairytale location is a must visit! #sintra #portugaltiktok #tiktokportugal #lisbon"
            song="Une barque sur l'océan from Miroirs - Andre Laplante"
            like={millify(20254882)}
            message={millify(298)}
            share={millify(238)}
            />
            <Video
            url={bjj}
            channel="smittywit"
            description="This Is What Makes Jiu-Jitsu Fun"
            song="Piano Lofi Hiphop(1087796) - KEYAG"
            like={millify(345632)}
            message={millify(3167)}
            share={millify(626)}
            />
            <Video
            url={biking}
            channel="cycleclub1"
            description="It's too crazy#bike #foryou #sports #fyp #crazy #cycling #mountainbike"
            song="original sound - Cycling Club"
            like={millify(234737)}
            messages={millify(1533)}
            shares={millify(1241)}
            />
            <Video
            url={pizza}
            channel="aureliovisciotti"
            description="La pizza Italy…🇮🇹 #pizzatime #pizza #pizzanapoletana #felicità"
            song="suono originale - Aurelio Visciotti"
            likes={millify(302000)}
            messages={millify(2550)}
            shares={millify(2500)}
            />
      </div>
    </div>
  );
}

export default App;


