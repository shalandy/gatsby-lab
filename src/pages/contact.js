import React from 'react'

class ContactForm extends React.Component{

  /*onChangeName(event) {
    this.setState({
    name: event.target.value
    });
  }
  onChangeEmail(event) {
    this.setState({
    email: event.target.value
    });
  }
  onChangeMessage(event) {
    this.setState({
    message: event.target.value
    });
  }*/

  onChange(event) {
  this.setState({
    [event.target.id]: event.target.value
  });
  }

  onSubmit(event) {
    event.preventDefault();
    fetch('https://untitled-7u6istdb7h9e.runkit.sh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((response) => {
      if (!response.ok) throw new Error(response);
      return response.json();
    })
    .then((response) => {
      console.log(response);
      alert('Sent successfully!');
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
    <form>
      <label htmlFor="name">Name</label>
      <input
      type="text"
      id="name"
      onChange = {(event) => this.onChange(event)}
      />
      <br/>
      <br/>
      <label htmlFor="email">Email</label>
      <input
      type="text"
      id="email"
      onChange = {(event) => this.onChange(event)}
      />
      <br/>
      <br/>
      <label htmlFor="message">Message</label>
      <textarea
      id="message"
      onChange = {(event) => this.onChange(event)}/>
      <br/>
      <br/>
      <input
        type="submit"
        value="Send Message"
        onClick={(event) => this.onSubmit(event)}
      />
    </form>
  );
  }
}

export default ContactForm;
