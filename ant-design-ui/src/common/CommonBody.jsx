import React from 'react'
import { Layout, theme, Typography } from 'antd';
import FormType1 from '../Pages/Forms/FormType1';
import FormType2 from '../Pages/Forms/FormType2';
import FormType3 from '../Pages/Forms/FormType3';
import FormType4 from '../Pages/Forms/FormType4';
import { useParams } from 'react-router-dom';

const CommonBody = () => {
    let { formName } = useParams();

    const { Content } = Layout;
    const { Text } = Typography;
    const { token: { colorBgContainer } } = theme.useToken();

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
                {(!formName || formName === 'FORM_WITH_TAB_PANEL') && <FormType1 />}
                {formName === 'FORM_WITH_COLLAPSABLE' && <FormType2 />}
                {formName === 'FORM_SIMPLE' && <FormType3 />}
                {formName === 'FORM_WITH_COLLAPSABLE_UNDER_TAB' && <FormType4 />}
                
            </Content>
        </>
    )
}

export default CommonBody