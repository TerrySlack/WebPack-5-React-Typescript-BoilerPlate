import type { Meta, StoryObj } from "@storybook/react";

// @ts-ignore
import { Button as Btn } from "Components/Buttons/";

// @ts-ignore

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Btn> = {
  title: "Example/Button",
  component: Btn,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "dodgerblue" },
  // },
};

export default meta;
type Story = StoryObj<typeof Btn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args

  // Add props here.
  args: {
    backgroundColor: "pink",
  },
};
