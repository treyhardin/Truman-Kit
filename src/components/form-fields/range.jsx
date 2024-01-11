import styles from './form-fields.module.css'

export default function Range(props) {

  const handleChange = (e) => {
    props.setValue(e.target.value)
  }

  return (

    <div class={styles.rangeWrapper}>

      <label for={props.id} class={styles.rangeInput}>
        <div class={styles.rangeTitle}>
          <p class={styles.rangeLabel}>{props.label}</p>
          <p class={styles.rangeValue}>{props.value()}</p>
        </div>
        <input 
          type="range"
          id={props.id}
          name={props.id}
          class={styles.range}
          min={props.min}
          max={props.max}
          step={props.step}
          onInput={handleChange}
          value={props.value()}
        />
      </label>

    </div>

  )
}