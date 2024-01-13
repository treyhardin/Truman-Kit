import { Match, Show, Switch, createSignal } from 'solid-js'
import styles from './form-fields.module.css'
import Icon from '../../utils/icons'

export default function Input(props) {

  const [ isActive, setIsActive ] = createSignal(props.defaultValue || props.value() ? true : false)
  const [ error, setError ] = createSignal("")

  let inputField

  if (props.defaultValue) {
    props.setValue(props.defaultValue)
  }

  const handleInput = (e) => {
    props.setValue(e.target.value)

    if (e.target.validity.valid) {
      setError(null)
    }

    if (e.target.value) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const handleFocus = (e) => {
    setIsActive(true)
  }

  const handleBlur = (e) => {

    if (!e.target.validity.valid) {
      setError(e.target.validationMessage)
    } else {
      setError(null)
    }

    if (!props.value()) {
      setIsActive(false)
    }

  }

  // const handleInvalid = (e) => {
  //   console.log('invalid')
  //   console.log(e)
  // }

  const handleClear = (e) => {
    if (inputField) {
      props.setValue("")
      inputField.value = props.value()
      setError(null)
      setIsActive(false)
    }
  }


  return (
    <div class={styles.inputWrapper}>
    <div class={`${styles.input} ${props.type == 'textarea' ? styles.textAreaInput : ''}`} >
      <Switch>

        <Match when={props.type != 'textarea'}>
          <input 
            data-active={isActive()}
            class={styles.inputField} 
            type={props.type}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={inputField}
            max={props.max}
            min={props.min}
            step={props.step}
            pattern={props.pattern}
            value={props.value()}
            name={props.id}
            id={props.id}
            onInvalid={e => e.preventDefault()}
            placeholder={props.placeholder} 
            required={props.required}
          />
        </Match>

        <Match when={props.type == 'textarea'}>
          <textarea 
            data-active={isActive()}
            class={`${styles.inputField} ${styles.textArea}`} 
            type={props.type}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={inputField}
            max={props.max}
            min={props.min}
            step={props.step}
            pattern={props.pattern}
            value={props.value()}
            name={props.id}
            id={props.id}
            onInvalid={e => e.preventDefault()}
            rows={props.rows}
            placeholder={props.placeholder} 
            required={props.required}
          />
        </Match>

      </Switch>

      <label class={styles.label} for={props.id}>
        <p>{props.label}</p>
        <Show when={!props.required}>
          <p>(Optional)</p>
        </Show>
      </label>

      <Show when={props.type != 'number' && props.type != 'textarea'}>
        <button
          type='button'
          data-enabled={props.value() ? 'true' : 'false'}
          onClick={handleClear} 
          class={styles.clearButton}
          title='Clear Field'
          tabindex="-1"
          // disabled={props.value() ? 'false' : 'true'}
        >
          <Icon icon="x" />
        </button>
      </Show>

    </div>
      <Show when={props.description}>
        <p class={styles.description}>{props.description}</p>
      </Show>
      <Show when={error()}>
        <div class={styles.errorMessage}>
          <p class={styles.errorText}>{error()}</p>
        </div>
      </Show>
    </div>
  )
}