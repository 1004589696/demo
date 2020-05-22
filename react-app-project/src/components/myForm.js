import React, { useImperativeHandle, useRef, forwardRef } from "react";
import { Form } from "antd";

const MyForm = (props, ref) => {
  const formRef = useRef();

  useImperativeHandle(ref, () => ({
    formFields: props.form.getFieldsValue(),
  }));

  return <Form ref={formRef}>...</Form>;
};

const WrappedForm = Form.create({ name: "form" })(forwardRef(MyForm));

export default WrappedForm;
