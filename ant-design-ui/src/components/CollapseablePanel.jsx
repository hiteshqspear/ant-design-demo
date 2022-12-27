import { Collapse } from 'antd'
import React from 'react'
import TabPanel from '../components/TabPanel';

const CollapseablePanel = () => {

    const { Panel } = Collapse;

    const panelData = [
        {
            key: 1,
            title: "Company Details",
            active: true,
            elements: [
                {
                    "elementId": 2,
                    "type": "TabPanel",
                    "items": [
                        {
                            "itemId": 1,
                            "title": "Basic Details",
                            "active": true,
                            "elements": [
                                {
                                    "elementId": 3,
                                    "type": "input",
                                    "maxLength": 100,
                                    "required": true,
                                    "readOnly": false,
                                    "label": "Company Name",
                                    "title": "Company Name",
                                    "attribute": "companyName"
                                },
                                {
                                    "elementId": 4,
                                    "type": "select",
                                    "required": false,
                                    "readOnly": false,
                                    "label": "City",
                                    "title": "Please Select",
                                    "attribute": "companyCity",
                                    "items": [
                                        {
                                            "id": 1,
                                            "value": "Delhi"
                                        },
                                        {
                                            "id": 2,
                                            "value": "Delhi"
                                        }
                                    ]
                                },
                                {
                                    "elementId": 5,
                                    "type": "datepicker",
                                    "required": false,
                                    "readOnly": false,
                                    "label": "Registration Date",
                                    "title": "Select Date",
                                    "attribute": "registrationDate"
                                },
                                {
                                    "elementId": 6,
                                    "type": "multiselect",
                                    "required": false,
                                    "readOnly": false,
                                    "label": "Category",
                                    "title": "Select Category",
                                    "attribute": "category",
                                    "url": "https://xyz.com/lookup/category",
                                    "id": "categorId",
                                    "value": "categoryName"
                                },
                                {
                                    "elementId": 7,
                                    "type": "table",
                                    "required": false,
                                    "readOnly": false,
                                    "Columns": [
                                        {
                                            "id": "title",
                                            "title": "Title"
                                        },
                                        {
                                            "id": "status",
                                            "title": "Status"
                                        },
                                        {
                                            "id": "time",
                                            "title": "Time"
                                        },
                                        {
                                            "id": "category",
                                            "title": "Category"
                                        }
                                    ],
                                    "url": "https://xyz.com/table"
                                }
                            ]
                        },
                        {
                            "itemId": 2,
                            "title": "This is panel Heading 1"
                        },
                        {
                            "itemId": 3,
                            "title": "This is panel Heading 2"
                        }
                    ]
                }
            ]
        },
        {
            key: 2,
            title: "Contact Details",
            active: true,
        },
        {
            key: 3,
            title: "Review Details",
            active: true,
        }
    ]

    const onChange = (key) => {
        console.log('CollapseablePanel key ::', key);
    };

    return (
        <>
            <Collapse
                defaultActiveKey={['1']}
                style={{
                    borderRadius: '10px',
                }}
                onChange={onChange}>

                {panelData && panelData?.map((elm, index) => {
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

export default CollapseablePanel