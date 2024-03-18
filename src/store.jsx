import { createContext, useState } from "react";

export const recContext = createContext({
  audioRec: [],
  setAudioRec: () => {},
  videoRec: [],
  setVideoRec: () => {},
});

const RecContextProvider = ({ children }) => {
  const [audioRec, setAudioRec] = useState([]);
  const [videoRec, setVideoRec] = useState([]);

  return (
    <recContext.Provider
      value={{ audioRec, setAudioRec, videoRec, setVideoRec }}
    >
      {children}
    </recContext.Provider>
  );
};

export default RecContextProvider;
