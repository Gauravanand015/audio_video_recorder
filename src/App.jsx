import "./App.css";
import { useContext, useState } from "react";
import VideoRecorder from "../src/VideoRecorder";
import AudioRecorder from "../src/AudioRecorder";
import { recContext } from "./store";

const App = () => {
  let [recordOption, setRecordOption] = useState("video");
  const { audioRec } = useContext(recContext);
  console.log(audioRec);

  const toggleRecordOption = (type) => {
    return () => {
      setRecordOption(type);
    };
  };

  return (
    <div>
      <h1>React Media Recorder</h1>
      <div className="button-flex">
        <button onClick={toggleRecordOption("video")}>Record Video</button>
        <button onClick={toggleRecordOption("audio")}>Record Audio</button>
      </div>
      <div>
        {recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
      </div>
    </div>
  );
};

export default App;
