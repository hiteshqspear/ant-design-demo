import { Tabs } from 'antd'
import React from 'react'
import { isObject } from '../_helperFunctions/validationHelper';

const TabPanel = (props) => {
    const { tabContentArr } = props;

    console.log('TabPanel tabContentArr', props);

    const handleTabChild = (tabElement) => {
        console.log('tabElement ::', tabElement);

        if (tabElement?.elements) {
            return <>nothing</>
        }

        return `Content of Tab Panel ${tabElement?.itemId}`;
    }

    const onChange = (key) => {
        console.log('TabPanel onChange', key);
    };

    return (
        <>
            {
                isObject(tabContentArr, 'title') ?
                    <Tabs
                        defaultActiveKey="1"
                        onChange={onChange}
                        items={
                            tabContentArr && tabContentArr.map((elm) => {
                                return {
                                    label: elm?.title,
                                    key: elm?.itemId,
                                    children: handleTabChild(elm),
                                };
                            })
                        }
                    />
                    :
                    <p>There is no content found</p>
            }
        </>
    )
}

export default TabPanel