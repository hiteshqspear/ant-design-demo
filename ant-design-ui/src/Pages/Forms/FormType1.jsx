import React from 'react';
import CollapsePanel from '../../components/Collapse/CollapsePanel';
import { Tabs } from 'antd';

const FormType1 = () => {

    const onChange = (key) => {
        console.log('FormType1 onChange', key);
    };

    return (
        <>
            <Tabs
                className='p-2'
                defaultActiveKey="1"
                onChange={onChange}
                items={[
                    {
                        label: `Company Details`,
                        key: '1',
                        children: <CollapsePanel />,
                    },
                    {
                        label: `Contact Details`,
                        key: '2',
                        children: `Content of Tab Pane 2`,
                    },
                    {
                        label: `Review`,
                        key: '3',
                        children: `Content of Tab Pane 3`,
                    },
                ]}
            />
        </>
    )
}

export default FormType1