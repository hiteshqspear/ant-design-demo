import { Tabs } from 'antd'
import React from 'react'
import { isObject } from '../_helperFunctions/validationHelper';
import CollapseAblePanel from '../components/CollapseAblePanel';
import FormPanel from './FormPanel';

const TabPanel = (props) => {
    const { tabContentArr } = props;
    let formElmTypes = ['input', 'select', 'datepicker', 'multiselect'];

    const HandleTabChild = (elm) => {
        const { tabElementArr } = elm;
        
        if (tabElementArr?.elements?.find(i => formElmTypes?.includes(i?.type))) {
            return <><FormPanel formPanelData={tabElementArr?.elements} key={tabElementArr?.itemId}/></>
        } else {
            return tabElementArr?.elements?.map((i,index) => {
                if (i?.type === 'CollapsePanel') {
                    return <CollapseAblePanel collapseAblePanelData={i?.items} key={index} />
                } else {
                    return null;
                }
            })
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
                                    children: <HandleTabChild tabElementArr={elm} />,
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