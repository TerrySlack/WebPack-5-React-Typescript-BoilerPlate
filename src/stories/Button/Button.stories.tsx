import type { Meta, StoryObj } from "@storybook/react";

import { Button as Btn } from "Components/Buttons/";

// More on default exports: https://js.org
const meta = {
  title: "Example/Button",
  component: Btn,
  // Enables auto-generated documentation: https://js.org
  tags: ["autodocs"],
  // More on argTypes: https://js.org
  argTypes: {
    backgroundColor: { control: "text" }, // Standardized control type string
  },
} satisfies Meta<typeof Btn>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories: https://js.org
export const Primary: Story = {
  // More on args: https://js.org
  args: {
    backgroundColor: "pink",
  },
};
