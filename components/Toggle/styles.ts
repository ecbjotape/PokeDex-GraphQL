import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20%;

  img {
    width: 21px;
    height: 21px;
    position: relative;
    left: 10px;
    filter: invert();
    transform: rotateY(180deg);
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: 26px;
  border-radius: 15px;
  background: #fff;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #605c54;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #fff;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 41px;
      transition: 0.3s;
    }
  }
`;
