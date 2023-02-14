import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Form, Input, Select, DatePicker, Table } from 'antd';
import { SaveOutlined, ClearOutlined } from '@ant-design/icons';
import { addformData } from '../redux/action/slices';
import moment from 'moment/moment';

const FormPanel = (props) => {
    let { formPanelData } = props;
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const formDataRedux = useSelector((state) => state.forms);

    let formElmTypes = ['input', 'select', 'datepicker', 'multiselect'];

    const handleChange = () => {
        form.setFieldsValue({ sights: [] });
    };

    const onFinish = (values) => {
        if (values?.registrationDate) {
            values.registrationDate = moment(values?.registrationDate?.$d).format('MMMM Do YYYY, h:mm:ss a');
        }
        console.log('Received values of form: ', values);
        dispatch(addformData(values));
    };

    const FormInside = () => {
        // filter input types according to our needs //
        let FormDataObj = formPanelData?.filter((el) => formElmTypes?.includes(el?.type));

        return FormDataObj && FormDataObj?.map((item, index) => {
            return (
                <React.Fragment key={index} >
                    <Col span={12}>
                        {item?.type === 'input' && (
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
                                <Input />
                            </Form.Item>
                        )}
                        {item?.type === 'select' && (
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
                                <Select mode='single' options={item?.items} onChange={handleChange} defaultValue="Select City" />
                            </Form.Item>
                        )}
                        {item?.type === 'datepicker' && (
                            <Form.Item
                                name={`${item?.attribute}`}
                                label={`${item?.label}`}
                                rules={[
                                    {
                                        required: item?.required,
                                        message: item?.errorMsg
                                    }
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>
                        )}
                        {item?.type === 'multiselect' && (
                            <Form.Item
                                name={`${item?.attribute}`}
                                label={`${item?.label}`}
                                rules={[
                                    {
                                        required: item?.required,
                                        message: item?.errorMsg
                                    }
                                ]}
                            >
                                <Select mode='multiple' options={item?.items} onChange={handleChange} defaultValue={item?.items[0]} allowClear />
                            </Form.Item>
                        )}
                    </Col>
                </React.Fragment>
            )
        })
    }

    const TableInside = () => {
        // filter input types according to our needs //
        let FormDataObj = formPanelData?.filter((el) => el?.type === 'table');

        return FormDataObj && FormDataObj?.map((item) => {
            let keys = item?.columns?.map(i => i?.id);

            return (
                <React.Fragment key={keys}>
                    <Table columns={item?.columns} dataSource={item?.data} className='mt-2 mb-3' />
                </React.Fragment>
            )
        })

    }

    return (
        <>
            {console.log('formDataRedux log :: ', formDataRedux)}
            {formPanelData && (
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
            )}
        </>
    )
}

export default FormPanel