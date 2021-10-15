import {useStoreon} from '../web_modules/storeon/preact.js'
import CarouselItem from './CarouselItem.js'
import EyeExaminationProcessList from './EyeExaminationProcessList.js'
import {html} from '../helper/index.js'

export default (props) => {
  return html`
    <div class="carousel slide">
      <div class="carousel-inner">
        <${CarouselItem} step="process" wrappedComponent=${EyeExaminationProcessList}/>
        <${CarouselItem} step="user" wrappedComponent=${EyeExaminationProcessList}/>
        <${CarouselItem} step="appointment" wrappedComponent=${EyeExaminationProcessList}/>
        <${CarouselItem} step="customer" wrappedComponent=${EyeExaminationProcessList}/>
        <${CarouselItem} step="summary" wrappedComponent=${EyeExaminationProcessList}/>
      </div>
    </div>
  `;
}
