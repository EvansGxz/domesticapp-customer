import { colors } from "../../styles";
import CircleIcon from "./circle-icon";

const Template = (args) => <CircleIcon {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  color: colors.pink[600],
  inverted: false,
};

export const Default = Template.bind({});
Default.args = {
  size: "md",
  color: colors.pink[600],
  inverted: false,
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  color: colors.pink[600],
  inverted: false,
};

export const Inverted = Template.bind({});
Inverted.args = {
  size: "lg",
  color: colors.pink[600],
  inverted: true,
};
