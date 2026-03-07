import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'shared/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = args => <CommentList {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    comments: [
        {
            id: '1',
            text: 'First comment',
            user: {
                id: '1',
                username: 'Ahmed',
                avatar: 'https://i.pravatar.cc/150?img=3',
            },
        },
        {
            id: '2',
            text: 'Second comment',
            user: {
                id: '2',
                username: 'John',
                avatar: 'https://i.pravatar.cc/150?img=5',
            },
        },
    ],
};