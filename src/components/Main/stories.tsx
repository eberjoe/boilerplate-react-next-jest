import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Título para a story Basic',
  description: 'Description para a story Basic'
}

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'Título para a story Default',
  description: 'Description para a story Default'
}
