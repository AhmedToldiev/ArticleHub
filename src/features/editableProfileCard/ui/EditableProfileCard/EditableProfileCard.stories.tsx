import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Suspense } from 'react';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/editableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = args => (
    <Suspense fallback={<div>Loading...</div>}>
        <EditableProfileCard {...args} />
    </Suspense>
);

export const Normal = Template.bind({});
Normal.args = {

};
