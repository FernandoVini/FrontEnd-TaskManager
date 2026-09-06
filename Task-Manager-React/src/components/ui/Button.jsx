import "../../css/ui/Button.css";

function Button({ buttontype, buttonMessage, onClick }) {
  return (
    <>
      <button type={buttontype} className='register-button' onClick={onClick}>
        {buttonMessage}
      </button>
    </>
  );
}

export default Button;