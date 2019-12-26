import React from "react";
import Input from "./../common/Input";
import Button from "./../common/Button";
import emailjs from "emailjs-com";
const serviceId = "default_service";
const templateId = "template_g3huBAWt";
function ModalForm({ triggerLoad, setFeedback }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const clearInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  const submit = () => {
    triggerLoad();
    clearInputs();
    emailjs
      .send(
        "gmail",
        templateId,
        {
          message_html: message,
          from_name: name,
          reply_to: email,
          user_id: `${name}&${email}`
        },
        "user_SNDajX08yiHMod1zJKSLh"
      )
      .then(res => {
        setFeedback("success");
      })

      .catch(err => setFeedback("failed"));
  };
  return (
    <form
      style={{
        position: "relative",
        zIndex: 999
      }}
    >
      <Input input={name} handler={setName} required label="Name*"></Input>
      <Input input={email} handler={setEmail} required label="E-mail*"></Input>
      <Input
        input={message}
        handler={setMessage}
        required
        label="Message*"
      ></Input>
      <Button
        click={submit}
        disabled={name.length < 3 || email.length < 3 || message.length < 3}
      >
        Send message
      </Button>
    </form>
  );
}

export default ModalForm;
