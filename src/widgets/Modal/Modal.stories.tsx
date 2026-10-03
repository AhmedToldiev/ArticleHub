import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'widgets/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Черновой текст для модального окна.  Черновой текст для модального окна.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Черновой текст для модального окна.  Черновой текст для модального окна.',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
