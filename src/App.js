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

function App() {
  return (
    <div className="App">
      {/* <OnPointerMove/> */}
      {/* <Faqs/> */}
      {/* <AccordionComponent /> */}
      <AutoComplete />
    </div>
  );
}

export default App;
library.add(fab, fas, far)