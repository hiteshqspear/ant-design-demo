import { Tabs } from 'antd'
import React from 'react'
import { isObject } from '../_helperFunctions/validationHelper';
import FormPanel from './FormPanel';

const TabPanel = (props) => {
    const { tabContentArr } = props;

    const handleTabChild = (tabElementArr) => {
        if (tabElementArr?.elements) {
            return <><FormPanel formPanelData={tabElementArr?.elements} /></>
        }
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