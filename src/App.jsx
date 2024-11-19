import './App.css';
import EffectNoDependencies from "./useEffects/EffectNoDependencies";
import EffectWithDependencies from "./useEffects/EffectWithDependencies";
import EffectNoDepArray from "./useEffects/EffectNoDepArray";
import MultipleEffects from "./useEffects/MultipleEffects";
import AsyncRequestEffect from "./useEffects/AsyncRequestEffect";
import TimerEffect from "./useEffects/TimerEffect";

function App() {

  return (
    <div className="App">

        <EffectNoDependencies />
        {/*<EffectWithDependencies />*/}
        {/*<EffectNoDepArray />*/}
        {/*<MultipleEffects />*/}
        {/*<AsyncRequestEffect />*/}
        {/*<TimerEffect />*/}
    </div>
  );
}

export default App;
