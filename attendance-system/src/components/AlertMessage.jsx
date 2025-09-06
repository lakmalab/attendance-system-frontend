import { Alert } from "@material-tailwind/react";

export default function AlertMessage({ message, color = "green", onClose }) {
  return (
    <Alert
      open={Boolean(message)}
      color={color}
      onClose={onClose}
      className="rounded-lg shadow-md mb-4"
    >
      {message}
    </Alert>
  );
}
