import React from 'react'
import { Layout, theme, Typography } from 'antd';
import { useParams } from 'react-router-dom';
// import FormType1 from '../Pages/Forms/FormType1';
// import FormType2 from '../Pages/Forms/FormType2';
// import FormType3 from '../Pages/Forms/FormType3';
// import FormType4 from '../Pages/Forms/FormType4';
// import { useParams } from 'react-router-dom';
import records from '../JSON/records.json'
import CommonForm from '../Pages/Forms/CommonForm';
import Category from '../Pages/Category/Category';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Login from '../Pages/Login/Login';

const CommonBody = () => {
    let { formName } = useParams();

    const { Content } = Layout;
    const { Title } = Typography;
    const { token: { colorBgContainer } } = theme.useToken();

    // const HandleForms = () => {
    //     return records && records?.map((elm, eIndex) => {

    //         if (formName === 'FORM_WITH_TAB_PANEL' && elm?.formName === 'FORM_WITH_TAB_PANEL') {
    //             return <FormType1 formData={elm?.elements} key={eIndex} />
    //         } if (formName === 'FORM_WITH_COLLAPSABLE' && elm?.formName === 'FORM_WITH_COLLAPSABLE') {
    //             return <FormType2 formData={elm?.elements} key={eIndex} />
    //         } if (formName === 'FORM_SIMPLE' && elm?.formName === 'FORM_SIMPLE') {
    //             return <FormType3 formData={elm?.elements} key={eIndex} />
    //         } if (formName === 'FORM_WITH_COLLAPSABLE_UNDER_TAB' && elm?.formName === 'FORM_WITH_COLLAPSABLE_UNDER_TAB') {
    //             return <FormType4 formData={elm?.elements} key={eIndex} />
    //         } else {
    //             return null;
    //         }
    //     })
    // };

    const FormHandler = () => {
        return records && records?.map((elm, eIndex) => {
            if (elm) {
                return (
                    <React.Fragment key={eIndex}>
                        <div className='m-2 mb-5 border border-secondary' style={{ borderRadius: '10px' }}>
                            <Typography.Title
                                className='w-100 text-center bg-dark'
                                level={3}
                                style={{
                                    margin: 0,
                                    'borderTopRightRadius': '10px',
                                    'borderTopLeftRadius': '10px',
                                }}
                            >
                                <Title
                                    className='text-light bg-dark'
                                    level={3}
                                    style={{
                                        'borderTopRightRadius': '10px',
                                        'borderTopLeftRadius': '10px',
                                    }}
                                >
                                    {elm?.formName}
                                </Title>
                                {/* <Text className="text-light bg-dark h5">{elm?.formName}</Text> */}
                            </Typography.Title>
                            <CommonForm formData={elm?.elements} key={eIndex} />
                        </div>
                    </React.Fragment>
                )
            } else {
                return null;
            }
        })
    };

    return (
        <>
            {formName === 'Home' && (
                <Content
                    className='border border-secondary'
                    style={{
                        margin: '24px 16px',
                        minHeight: 280,
                        borderRadius: '10px',
                        background: colorBgContainer,
                    }}
                >

                    {/*********** common Forms ********/}
                    {/* <HandleForms /> */}

                    <FormHandler />
                </Content>
            )}
            {formName === 'Category' && <Category />}
            {formName === 'About' && <AboutUs />}
            {formName === 'Login' && <Login />}
        </>
    )
}

export default CommonBody