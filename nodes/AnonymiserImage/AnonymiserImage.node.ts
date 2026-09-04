import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class AnonymiserImage implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Anonymiser Image',
        name: 'anonymiserImage',
        icon: 'file:anonymiserimage.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={$parameter["operation"]}',
        description: 'Perform anonymiser image operations in n8n',
        defaults: {
            name: 'Anonymiser Image',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'anonymiserImageApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Execute',
                        value: 'execute',
                        description: 'Execute the anonymisation action',
                        action: 'Execute action',
                    },
                ],
                default: 'execute',
            },
        ],
    };
}
