import { Button } from "react-bootstrap";

interface ButtonComponentProps {
  onClick: () => void;
  children: any;
  variant?: string;
  disabled?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ variant = "primary", onClick, children, disabled }) => {
  return (
    <Button variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
