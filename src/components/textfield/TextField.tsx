import React from "react";
import { Form } from "react-bootstrap";

interface TextFieldProps {
  label: string;
  placeholder: string;
  helperText?: string;
  type?: string;
  onChange?: (e: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  helperText,
  onChange,
  type,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        onChange={onChange && ((e) => onChange(e.target.value))}
        type={type}
        placeholder={placeholder}
      />
      {helperText && <Form.Text className="text-muted">{helperText}</Form.Text>}
    </Form.Group>
  );
};

export default TextField;
