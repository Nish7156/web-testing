
import { useState } from "react";
import { components } from "react-select";

const BuySellCustomDropdowm = ({
  getStyles,
  Icon,
  data,
  isDisabled,
  isFocused,
  isSelected,
  children,
  isSecond,
  innerProps,
  showChildren,
  ...rest
}: any) => {
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => setIsActive(true);
  const onMouseLeave = () => setIsActive(false);

  let bg = "black";
  let textColor = "inherit";
  let borderColor = "inherit";
  let boxShadowColor = "transparent";

  if (isFocused) {
    bg = "black";
    borderColor = "#21FA51";
    boxShadowColor = "#21FA51";
  }
  if (isActive) {
    bg = "#1E1E24";
    textColor = "white";
  }

  if (isSelected) {
    bg = "#1E1E24      ";
    textColor = "white";
  }

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: textColor,
    // display: "flex ",
  };

  const props = {
    ...innerProps,
    onMouseEnter,
    onMouseLeave,
    style,
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <div className="flex items-center justify-between">
        <p className="text-2xl font-medium text-white"> {data?.label}</p>
        <div className="text-secondary  text-2xl font-medium">
        3M
        </div>
      </div>
    </components.Option>
  );
};

export default BuySellCustomDropdowm;
