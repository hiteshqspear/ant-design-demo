import React from 'react';
import { Collapse } from 'antd';
// import TabPanel from './TabPanel';
// import FormPanel from './FormPanel';
import CommonForm from '../Pages/Forms/CommonForm';

const CollapseAblePanel = (props) => {
    const { collapseAblePanelData } = props;
    const { Panel } = Collapse;
    // let formElmTypes = ['input', 'select', 'datepicker', 'multiselect'];

    const onChange = (key) => {
        console.log('CollapseAblePanel key ::', key);
    };

    const HandlePanel = () => {
        // let panelType;
        return <>
            <Collapse
                defaultActiveKey={['1']}
                style={{
                    borderRadius: '10px',
                }}
                onChange={onChange}
            >
                {/* {collapseAblePanelData && collapseAblePanelData?.map((elm, eIndex) => {
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
                                        <TabPanel tabPanelData={val?.items} />
                                    </React.Fragment>
                                } else {
                                    return null;
                                }
                            })}
                        </Panel>
                    );
                })} */}
                {collapseAblePanelData && collapseAblePanelData?.map((elm, eIndex) => {
                    return (
                        <React.Fragment key={eIndex}>
                            <Panel header={elm?.title} key={elm?.key}>
                                <CommonForm formData={elm?.elements} key={eIndex} source={'CommonForm_CollapseAblePanel'} />
                            </Panel>
                        </React.Fragment>
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