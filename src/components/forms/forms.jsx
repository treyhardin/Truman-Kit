import { createSignal } from 'solid-js'
import Input from '../form-fields/input'
import styles from './forms.module.css'
import Toggle from '../form-fields/toggle'
import Range from '../form-fields/range'
import ViewportAnimation from '../../utils/animation/viewport-animation'

export default function Forms() {

  const [ textInput, setTextInput ] = createSignal(null)
  const [ urlInput, setUrlInput ] = createSignal(null)
  const [ emailInput, setEmailInput ] = createSignal(null)
  const [ telephoneInput, setTelephoneInput ] = createSignal(null)
  const [ numberInput, setNumberInput ] = createSignal(null)
  const [ passwordInput, setPasswordInput ] = createSignal(null)
  const [ textAreaInput, setTextAreaInput ] = createSignal(null)
  const [ checkboxInput, setCheckboxInput ] = createSignal(true)
  const [ radioInput, setRadioInput ] = createSignal(null)
  const [ rangeInput, setRangeInput ] = createSignal(20)


  return (
    <section class={styles.formsSection}>
      <div class={styles.formsInner}>

        <ViewportAnimation>
          <div class={styles.titleSection}>
            <h2 class="h3">Custom Forms</h2>
            <p>Styling HTML forms is a pain in the ass. I don't ever wanna write custom styles for forms again, so this kit includes the most common field types with easy-to-update styling tokens. Still got some work to do on accessibility, but so far it ain't too shabby.</p>
          </div>
        </ViewportAnimation>

        <form class={styles.form}>

            <Input
              label="Text"
              type="text"
              id="text"
              defaultValue="Default Text Value"
              value={textInput}
              setValue={setTextInput}
              required={true}
            />

          <div class={styles.inlineFields}>

            <Input
              label="Email"
              type="email"
              id="email"
              value={emailInput}
              setValue={setEmailInput}
              required={true}
            /> 

            <Input
              label="Phone"
              type="tel"
              id="tel"
              // description="Use format 601-818-6709"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={telephoneInput}
              setValue={setTelephoneInput}
              required={false}
            />

          </div>

          <Input
            label="URL"
            type="url"
            id="url"
            pattern="https://.*"
            value={urlInput}
            setValue={setUrlInput}
            required={false}
          />

          <div class={styles.inlineFields}>

            <Input
              label="Number"
              type="number"
              id="number"
              min="0"
              max="6"
              step="2"
              value={numberInput}
              setValue={setNumberInput}
              required={false}
            />

            <Input
              label="Password"
              type="password"
              id="password"
              min="0"
              max="6"
              step="2"
              value={passwordInput}
              setValue={setPasswordInput}
              required={false}
            />

          </div>

          <Input
            label="Textarea"
            type="textarea"
            id="textarea"
            rows="3"
            value={textAreaInput}
            setValue={setTextAreaInput}
            required={false}
          />

          <Toggle
            label="Checkbox"
            type="checkbox" 
            id="checkbox" 
            value={checkboxInput}
            setValue={setCheckboxInput}
          />

          <Toggle
            label="Radio"
            type="radio"
            id="radio"
            value={radioInput}
            setValue={setRadioInput}
            options={[
              {
                label: "Radio Option 1",
                id: "option1",
                checked: true,
              },
              {
                label: "Radio Option 2",
                id: "option2",
              },
            ]}
          />

          <Range
            label="Range:"
            id="range"
            min="0"
            max="100"
            step="5"
            value={rangeInput}
            setValue={setRangeInput}
          />

          <input 
            type='submit' 
            value="Submit" 
            name='Submit'
            onClick={e => console.log(e)}
          />

        </form>


      {/* 
      
      
      <input type="checkbox"></input>

      <input type="color"></input>
      <input type="date"></input>
      <input type="datetime-local"></input>
      <input type="file"></input>
      <input type="image"></input>
      <input type="month"></input>
      <input type="radio"></input>
      <input type="range"></input>
      <input type="reset"></input>
      <input type="search"></input>
      <input type="time"></input>
      <input type="week"></input> 
      
      */}
      </div>
    </section>
  )
}