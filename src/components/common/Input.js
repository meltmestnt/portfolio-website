import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 40px 0px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    z-index: 99;
    height: 3px;
    width: 0%;
    background: #f06449;
    transition: 0.5s;
    transition-delay: 0.2s;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    z-index: 999;
    height: 3px;
    width: 0%;
    transition: 0.5s;
    background: #26408b;
    opacity: 0.85;
  }
  &:hover {
    &::before {
      width: 100%;
      transition-delay: 0.2s;
    }
    &::after {
      width: 100%;
      transition-delay: 0s;
    }
  }
`;

const Label = styled.label`
  position: absolute;
  top: -13px;
  font-weight: 700;
  color: #dadada;
  font-size: 0.95rem;
  left: 0;
`;

const CoolInput = styled.input`
  display: block;
  width: 100%;
  border: 0;
  border-bottom: 2px solid silver;
  padding: 12px 5px;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "League Spartan", sans-serif;
  border-radius: 0;
  background: transparent;
  color: silver;
  position: relative;
  outline: none;
  margin: 5px 0px;
  transition: 0.5s;
  &:focus {
    border-bottom: 3px solid #26408b;
    z-index: 99999;
  }
`;

function Input({ label, handler, input }) {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <CoolInput
        onChange={e => handler(e.target.value)}
        value={input}
      ></CoolInput>
    </InputWrapper>
  );
}

export default Input;
