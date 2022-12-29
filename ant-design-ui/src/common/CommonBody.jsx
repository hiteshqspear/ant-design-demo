import React from 'react'
import { Layout, theme, Typography } from 'antd';
import FormType1 from '../Pages/Forms/FormType1';
import FormType2 from '../Pages/Forms/FormType2';
import FormType3 from '../Pages/Forms/FormType3';
import FormType4 from '../Pages/Forms/FormType4';
import { useParams } from 'react-router-dom';
import records from '../JSON/records.json'

const CommonBody = () => {
    let { formName } = useParams();

    const { Content } = Layout;
    const { Text } = Typography;
    const { token: { colorBgContainer } } = theme.useToken();

    const HandleForms = () => {
        return records && records?.map((elm, eIndex) => {

            if ((!formName || formName === 'FORM_WITH_TAB_PANEL') && elm?.formName === 'FORM_WITH_TAB_PANEL') {
                return <FormType1 formData={elm?.elements} key={eIndex} />
            } if (formName === 'FORM_WITH_COLLAPSABLE' && elm?.formName === 'FORM_WITH_COLLAPSABLE') {
                return <FormType2 formData={elm?.elements} key={eIndex} />
            } if (formName === 'FORM_SIMPLE' && elm?.formName === 'FORM_SIMPLE') {
                return <FormType3 formData={elm?.elements} key={eIndex} />
            } if (formName === 'FORM_WITH_COLLAPSABLE_UNDER_TAB' && elm?.formName === 'FORM_WITH_COLLAPSABLE_UNDER_TAB') {
                return <FormType4 formData={elm?.elements} key={eIndex} />
            } else {
                return null;
            }
        })
    }

    return (
        <>
            <Content
                className='border border-secondary'
                style={{
                    margin: '24px 16px',
                    minHeight: 280,
                    borderRadius: '10px',
                    background: colorBgContainer,
                }}
            >
                <Typography.Title
                    className='w-100 text-center bg-dark'
                    level={3}
                    style={{
                        margin: 0,
                        'borderTopRightRadius': '10px',
                        'borderTopLeftRadius': '10px',
                    }}
                >
                    <Text className="text-light bg-dark">Form Preview</Text>
                </Typography.Title>

                {/*********** common Forms ********/}
                <HandleForms />

            </Content>
        </>
    )
}

export default CommonBody