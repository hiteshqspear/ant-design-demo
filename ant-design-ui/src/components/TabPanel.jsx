import React from 'react'
import { Tabs } from 'antd'
import { isObject } from '../_helperFunctions/validationHelper';
// import CollapseAblePanel from '../components/CollapseAblePanel';
// import FormPanel from './FormPanel';
import CommonForm from '../Pages/Forms/CommonForm';

const TabPanel = (props) => {
    const { tabPanelData } = props;
    // let formElmTypes = ['input', 'select', 'datepicker', 'multiselect'];

    const HandleTabChild = (elm, eIndex) => {
        const { tabElementArr } = elm;

        // if (tabElementArr?.elements?.find(i => formElmTypes?.includes(i?.type))) {
        //     return <><FormPanel formPanelData={tabElementArr?.elements} key={tabElementArr?.itemId}/></>
        // } else {
        //     return tabElementArr?.elements?.map((i,index) => {
        //         if (i?.type === 'CollapsePanel') {
        //             return <CollapseAblePanel collapseAblePanelData={i?.items} key={index} />
        //         } else {
        //             return null;
        //         }
        //     })
        // }

        if (tabElementArr) {
            return <><CommonForm formData={tabElementArr?.elements} key={eIndex} source={'CommonForm_TabPanel'} /></>
        } else {
            return null;
        }

    }

    const onChange = (key) => {
        console.log('TabPanel onChange', key);
    };

    return (
        <>
            {
                isObject(tabPanelData, 'title') ?
                    <Tabs
                        defaultActiveKey="1"
                        onChange={onChange}
                        items={
                            tabPanelData && tabPanelData.map((elm) => {
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