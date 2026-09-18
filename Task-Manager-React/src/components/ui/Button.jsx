import "../../css/ui/Button.css";

function Button({ variant, margin, buttontype, buttonMessage, onClick }) {
  let marginClass = "";
  let variantClass = "";

  if (margin === "mg-L") marginClass = "mg-left";
  if (margin === "mg-R") marginClass = "mg-right";

  if (variant === "menu") variantClass = "btn-neutral-outline";
  if (variant === "neutral") variantClass = "btn-neutral";
  if (variant === "create") variantClass = "btn-create";
  if (variant === "update") variantClass = "btn-update";
  if (variant === "delete") variantClass = "btn-delete";
  return (
    <>
      <button type={buttontype} className={`${variantClass} ${marginClass} register-button`.trim()} onClick={onClick}>
        {buttonMessage}
      </button>
    </>
  );
}

export default Button;