import React from 'react';
import { Collapse } from 'antd';
import TabPanel from './TabPanel';

const CollapseAblePanel = (props) => {
    const { collapseAblePanelData } = props;
    const { Panel } = Collapse;

    const onChange = (key) => {
        console.log('CollapseAblePanel key ::', key);
    };

    return (
        <>
            <Collapse
                defaultActiveKey={['1']}
                style={{
                    borderRadius: '10px',
                }}
                onChange={onChange}>

                {collapseAblePanelData && collapseAblePanelData?.map((elm, eIndex) => {
                    return (
                        <Panel header={elm?.title} key={elm?.key}>
                            {
                                elm?.elements && elm?.elements?.map((val, vIndex) => {
                                    return (
                                        val?.type && val?.type === 'TabPanel' && (
                                            <React.Fragment key={vIndex}>
                                                <TabPanel tabContentArr={val?.items} />
                                            </React.Fragment>
                                        )
                                    )
                                })
                            }
                        </Panel>
                    );
                })}
            </Collapse>
        </>
    )
}

export default CollapseAblePanel