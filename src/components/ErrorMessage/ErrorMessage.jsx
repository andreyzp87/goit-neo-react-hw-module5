const ErrorMessage = ({ error }) => {
  return (
    <div>
      <p>Something wrong happened: {error.message}</p>
    </div>
  );
};

export default ErrorMessage;
