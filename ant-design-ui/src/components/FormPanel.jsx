import React from 'react'
import { Col, Row, Button, Form, Input, Select, DatePicker, Table, Tag } from 'antd';
import { SaveOutlined, ClearOutlined } from '@ant-design/icons';

const FormPanel = (props) => {
    let { formPanelData } = props;
    const [form] = Form.useForm();

    let formElmTypes = ['input', 'select', 'datepicker', 'multiselect'];

    const log = (e) => {
        console.log(e);
    };

    const handleChange = () => {
        form.setFieldsValue({ sights: [] });
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const FormInside = () => {
        // filter input types according to our needs //
        let newFormData = formPanelData?.filter((el) => formElmTypes?.includes(el?.type));

        return newFormData && newFormData?.map((item, index) => {
            return <React.Fragment key={index}>
                <Col span={12} key={index}>
                    <Form.Item
                        name={`${item?.attribute}`}
                        label={`${item?.label}`}
                        rules={[
                            {
                                required: item?.required,
                                message: item?.errorMsg
                            },
                            { whitespace: true }
                        ]}
                    >
                        {item?.type === 'input' && (
                            <Input placeholder={`${item?.placeholder}`} />
                        )}
                        {item?.type === 'select' && (
                            <Select options={item?.items} onChange={handleChange} defaultValue="Select City">
                            </Select>
                        )}
                        {item?.type === 'datepicker' && (
                            <DatePicker />
                        )}
                        {item?.type === 'multiselect' && item?.data && (
                            item?.data?.map((tabs, tabIndex) => {
                                return <Tag closable onClose={log} key={tabIndex} className={`${tabs?.disable && 'disableClass'}`}>
                                    {tabs?.categoryName}
                                </Tag>
                            })
                        )}
                    </Form.Item>
                </Col>
            </React.Fragment>
        })
    }

    const TableInside = () => {
        // filter input types according to our needs //
        let newFormData = formPanelData?.filter((el) => el?.type === 'table');

        return newFormData && newFormData?.map((item) => {
            let keys = item?.columns?.map(i => i?.id);

            return <React.Fragment key={keys}>
                <Table columns={item?.columns} dataSource={item?.data} className='mt-2 mb-3' />
            </React.Fragment>
        })

    }

    return (
        <>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
            >
                <Row gutter={24}>
                    <FormInside />
                </Row>

                <TableInside />

                <Row>
                    <Col
                        span={24}
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            icon={<SaveOutlined />}
                            size={'large'}
                        >
                            Save
                        </Button>
                        <Button
                            icon={<ClearOutlined />}
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => {
                                form.resetFields();
                            }}
                            size={'large'}
                        >
                            Clear
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default FormPanel