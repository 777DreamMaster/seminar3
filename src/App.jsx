import './App.css';
import EffectNoDependencies from "./useEffects/EffectNoDependencies";
import EffectWithDependencies from "./useEffects/EffectWithDependencies";
import EffectNoDepArray from "./useEffects/EffectNoDepArray";
import MultipleEffects from "./useEffects/MultipleEffects";
import AsyncRequestEffect from "./useEffects/AsyncRequestEffect";
import TimerEffect from "./useEffects/TimerEffect";
import ToggleableMenu from "./useEffects/ToggleableMenu";
import Timer from "./useEffects/Timer";

function App() {

  return (
    <div className="App">

        {/*<EffectNoDependencies />*/}
        {/*<EffectWithDependencies />*/}
        {/*<ToggleableMenu />*/}
        {/*<EffectNoDepArray />*/}
        {/*<MultipleEffects />*/}
        {/*<AsyncRequestEffect />*/}
        {/*<TimerEffect />*/}
        <Timer />
    </div>
  );
}

export default App;
