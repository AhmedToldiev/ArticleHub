import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Input } from './Input';

export default {
    title: 'widgets/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Введите текст',
    value: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Введите текст',
    value: 'Text',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
