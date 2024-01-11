import { For, Match, Switch } from 'solid-js'
import styles from './form-fields.module.css'
import Icon from '../../utils/icons'

export default function Toggle(props) {

  const handleCheckboxChange = (e) => {
    props.setValue(e.target.checked)
  }

  const handleRadioChange = (e) => {
    props.setValue(e.target.id)
  }

  return (
    <div class={styles.toggleWrapper}>
      
      <Switch>

        <Match when={props.type == 'checkbox'}>
          
          <label for={props.id} class={styles.checkboxInput}>
            <input 
              type={props.type}
              value={props.value()}
              checked={props.value()}
              name={props.id}
              id={props.id}
              onChange={handleCheckboxChange}
              class={styles.checkbox}
              // hidden={true}
            />
            <div class={styles.check}>
              <Icon icon="check" />
            </div>
            {props.label}
          </label>
        </Match>

        <Match when={props.type == 'radio'}>

          <fieldset class={styles.radioGroup} onChange={handleRadioChange}>

            <legend class={styles.legend}>{props.label}</legend>

            <For each={props.options}>{(option, i) => 

              <label for={option.id} class={styles.radioInput}>
                <input 
                  type={props.type}
                  value={props.id}
                  name={props.id}
                  id={option.id}
                  // defaultChecked="true"
                  checked={option.checked == true ? true : false}
                  // onChange={handleRadioChange}
                  class={styles.radio}
                  required
                />
                {option.label}
              </label>
            }</For>

          </fieldset>
          

        </Match>

      </Switch>


    </div>
  )
}