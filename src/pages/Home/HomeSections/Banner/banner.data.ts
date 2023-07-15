import { ISelectOption } from '../../../../types/components/selectInput/selectInput.types';

export const capsuleStatusList: ISelectOption[] = [
    {
        id: crypto.randomUUID(),
        option: 'Active',
        value: 'active'
    },
    {
        id: crypto.randomUUID(),
        option: ' Inactive',
        value: 'inactive'
    },
    // Add more capsule status entries here
];

export const originalLaunchList: ISelectOption[] = [
    {
        id: crypto.randomUUID(),
        option: '2017-02-19T14:39:00.000Z',
        value: '2017-02-19T14:39:00.000Z'
    },
    {
        id: crypto.randomUUID(),
        option: '2015-09-21T16:00:00.000Z',
        value: '2015-09-21T16:00:00.000Z'
    },
    // Add more original launch date entries here
];

export const capsuleTypeList: ISelectOption[] = [
    {
        id: crypto.randomUUID(),
        option: 'Dragon 1.1',
        value: 'Dragon 1.1'
    },
    {
        id: crypto.randomUUID(),
        option: 'Dragon 1.0',
        value: 'Dragon 1.0'
    },
    // Add more capsule type entries here
];
