import {Composition} from 'remotion';
import { HelloWorld } from './Components/HelloWorld';
import './style.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>

<Composition
  id="HelloWorld"
  component={HelloWorld}
  durationInFrames={240}
  fps={60}
  width={1920}
  height={1080}
	inputProps={{ type: "landscape" }}
  defaultProps={{
    text: 'Hello, This!',
  }}
/>

<Composition
  id="HelloWorld2"
  component={HelloWorld}
  durationInFrames={240}
  fps={60}
  width={1080}
  height={1080}
  defaultProps={{
    text: 'Hello, That!',
  }}
/>
		</>
	);
};
