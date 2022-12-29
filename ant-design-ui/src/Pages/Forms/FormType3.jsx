import React from 'react'
// import { Col, Row, Button, Form, Input, Select, Space, DatePicker, Table, Tag } from 'antd';
// import { SaveOutlined, ClearOutlined } from '@ant-design/icons';
import FormPanel from '../../components/FormPanel';

const FormType3 = (props) => {
  const { formData } = props;

  // const [form] = Form.useForm();

  // const fieldData = [
  //   {
  //     id: '0',
  //     type: 'input',
  //     // name: 'CompanyName',
  //     label: 'Company Name',
  //     placeholder: 'Type your company name'
  //   },
  //   {
  //     id: '1',
  //     type: 'select',
  //     // name: 'City',
  //     label: 'City',
  //     items: [
  //       {
  //         "id": 0,
  //         "value": "Delhi"
  //       },
  //       {
  //         "id": 1,
  //         "value": "Punjab"
  //       },
  //       {
  //         "id": 2,
  //         "value": "Haryana"
  //       },
  //       {
  //         "id": 3,
  //         "value": "Himachal pradesh"
  //       }
  //     ]
  //   },
  //   {
  //     id: '2',
  //     type: 'date',
  //     // name: 'RegistrationDate',
  //     label: 'Registration Date',
  //   },
  //   {
  //     id: '3',
  //     type: 'input_tags',
  //     // name: 'Category',
  //     label: 'Category',
  //   }
  // ];

  // const columns = [
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //     key: 'name',
  //     render: (text) => <a href='/#'>{text}</a>,
  //   },
  //   {
  //     title: 'Age',
  //     dataIndex: 'age',
  //     key: 'age',
  //   },
  //   {
  //     title: 'Address',
  //     dataIndex: 'address',
  //     key: 'address',
  //   },
  //   {
  //     title: 'Tags',
  //     key: 'tags',
  //     dataIndex: 'tags',
  //     render: (_, { tags }) => (
  //       <>
  //         {tags.map((tag) => {
  //           let color = tag.length > 5 ? 'geekblue' : 'green';
  //           if (tag === 'loser') {
  //             color = 'volcano';
  //           }
  //           return (
  //             <Tag color={color} key={tag}>
  //               {tag.toUpperCase()}
  //             </Tag>
  //           );
  //         })}
  //       </>
  //     ),
  //   },
  //   {
  //     title: 'Action',
  //     key: 'action',
  //     render: (_, record) => (
  //       <Space size="middle">
  //         <a href='/#'>Invite {record.name}</a>
  //         <a href='/#'>Delete</a>
  //       </Space>
  //     ),
  //   },
  // ];

  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];

  // const log = (e) => {
  //   console.log(e);
  // };

  // const handleChange = () => {
  //   form.setFieldsValue({ sights: [] });
  // };

  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };

  return (
    <>
      <div className='m-3'>
        {/*  <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          <Row gutter={24}>
            {fieldData && fieldData?.map((item, index) => {
              return (<Col span={12} key={index}>
                <Form.Item
                  name={`${item?.name}`}
                  label={`${item?.label}`}
                  rules={[
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ]}
                >
                  {item?.type === 'input' && (
                    <Input placeholder={`${item?.placeholder}`} />
                  )}
                  {item?.type === 'select' && (
                    <Select options={item?.items} onChange={handleChange} defaultValue="Select City">
                    </Select>
                  )}
                  {item?.type === 'date' && (
                    <DatePicker />
                  )}
                  {item?.type === 'input_tags' && (
                    <>
                      <Tag closable onClose={log}>
                        Cloths
                      </Tag>
                      <Tag closable onClose={log}>
                        Cosmetics
                      </Tag>
                      <Tag closable onClose={log}>
                        Gadgets
                      </Tag>
                      <Tag closable onClose={log} className='disableClass'>
                        Iphones
                      </Tag>
                    </>
                  )}
                </Form.Item>
              </Col>)
            })}
          </Row>
          <Table columns={columns} dataSource={data} className='mt-2 mb-3' />
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
        </Form> */}

        <FormPanel formPanelData={formData} />
      </div>
    </>
  )
}

export default FormType3