import React from 'react';
import { Collapse } from 'antd';
import TabPanel from './TabPanel';
import FormPanel from './FormPanel';

const CollapseAblePanel = (props) => {
    const { collapseAblePanelData } = props;
    console.log('collapseAblePanelData ::', collapseAblePanelData)
    const { Panel } = Collapse;
    let formElmTypes = ['input', 'select', 'datepicker', 'multiselect'];

    const onChange = (key) => {
        console.log('CollapseAblePanel key ::', key);
    };

    const HandlePanel = () => {
        let panelType;
        return <>
            <Collapse
                defaultActiveKey={['1']}
                style={{
                    borderRadius: '10px',
                }}
                onChange={onChange}
            >
                {collapseAblePanelData && collapseAblePanelData?.map((elm, eIndex) => {
                    if (elm && elm?.elements) {
                        if (elm?.elements?.find(i => formElmTypes?.includes(i?.type))) {
                            panelType = 'FormPanel';
                        } if (elm?.elements?.find(i => i?.type === 'TabPanel')) {
                            panelType = 'TabPanel';
                        }
                    }

                    return (
                        <Panel header={elm?.title} key={elm?.key}>
                            {panelType === 'FormPanel' && <FormPanel formPanelData={elm?.elements} />}
                            {elm?.elements && elm?.elements?.map((val, vIndex) => {
                                if (panelType === 'TabPanel') {
                                    return <React.Fragment key={vIndex}>
                                        <TabPanel tabContentArr={val?.items} />
                                    </React.Fragment>
                                } else {
                                    return null;
                                }
                            })}
                        </Panel>
                    );
                })}
            </Collapse>
        </>
    }

    return (
        <>
            {/* this function handles collapsePanel data */}
            <HandlePanel />
        </>
    )
}

export default CollapseAblePanel