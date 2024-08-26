import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import AccordionComponent from './component/accordion';
import Faqs from './component/faqs';
import OnPointerMove from './component/onPointerMove';
// import Sculpture from './component/sabirTask';
import StateQueue from './component/stateQueue';
import AutoComplete from './component/autoComplete';
import TicTacToe from './component/ticTacToe';
import StyledComponent from './component/styledComponent';
import CodeTube from './component/codeTube/codeTube';
import Counter from './component/counter';
import Form from './component/form';

function App() {
  return (
    <div className="App">
      {/* <OnPointerMove/> */}
      {/* <Faqs/> */}
      {/* <AccordionComponent /> */}
      {/* <AutoComplete /> */}
      {/* <TicTacToe /> */}
      {/* <StyledComponent/> */}
      {/* <CodeTube/> */}
      <Counter/>
      {/* <Form/> */}
    </div>
  );
}

export default App;
library.add(fab, fas, far)