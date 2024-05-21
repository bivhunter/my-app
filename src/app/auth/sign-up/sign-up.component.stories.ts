import { Meta, StoryObj } from '@storybook/angular';

import { SignUpComponent } from './sign-up.component';

type ComponentWithCustomControls = SignUpComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Sign Up',
  component: SignUpComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `SignUp` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const SignUp: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
