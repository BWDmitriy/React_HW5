import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', textArea: '', selectValue: 'grapefruit', summaryValue: 'Please input your data!' };

    this.handleChange = this.handleChange.bind(this);
    this.handleTAChange = this.handleTAChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleTAChange(e) {
    this.setState({ textArea: e.target.value });
  }
  handleSelectChange(e) {
    this.setState({ selectValue: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({summaryValue: 'My name is ' + this.state.value + ' . ' + this.state.textArea + ' My favorite flavor is ' + this.state.selectValue + '.'});
  }

  render() {
    console.log(this.state)

    return <div>
      <form onSubmit={this.handleSubmit}>
        <p><label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label></p>
        <p>
          <label>
            About me:
            <textarea value={this.state.textArea} onChange={this.handleTAChange} />
          </label>
        </p>
        <p>
          <label>
            My favorite flavor:
            <select value={this.state.selectValue} onChange={this.handleSelectChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
        </p>
        <input type="submit" value="Submit" />
        <p>{this.state.summaryValue}</p>
      </form>
    </div>
  }
}

export default NameForm;