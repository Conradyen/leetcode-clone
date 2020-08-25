import React from "react";
import { RoutesProps } from "./type";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export const ThemeSwitch: React.FC<RoutesProps> = ({
  isDarkMode,
  handelThemeChange,
}) => {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={isDarkMode}
            onChange={handelThemeChange}
            name="modeSwitch"
            color="primary"
          />
        }
        label="Dark Mode"
      />
    </FormGroup>
  );
};
