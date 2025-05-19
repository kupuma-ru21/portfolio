import {Icon, IconButton, useColorModeValue} from "@chakra-ui/react";
import {CiLight, CiDark} from "react-icons/ci";
import {useIndex} from "./useIndex";

export const SwitchTheme = () => {
  const {t, changeThemeColor} = useIndex();

  return (
    <IconButton
      onClick={changeThemeColor}
      icon={<Icon as={useColorModeValue(CiLight, CiDark)} boxSize="24px" />}
      aria-label={t("header.Theme")}
    />
  );
};
