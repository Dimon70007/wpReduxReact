import React, {Component} from 'react';
import styles from './ReactWithRefs.css';

class ReactWithRefs extends Component {
  submit() {
    console.log('inputValue=', this.testInput.value);
  }

  render() {
    return (
      <div className={styles.refs}>
        <input type='text'
          placeholder='test'
          ref={input => this.testInput = input}
        />
        <button onClick={::this.submit}>Submit</button>
      </div>
    );
  }
}

export default ReactWithRefs;
