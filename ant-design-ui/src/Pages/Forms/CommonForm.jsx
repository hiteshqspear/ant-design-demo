import React from 'react'
import CollapseAblePanel from '../../components/CollapseAblePanel';
import FormPanel from '../../components/FormPanel';
import TabPanel from '../../components/TabPanel';

const CommonForm = (props) => {
    const { formData } = props;
    let formElmTypes = ['input', 'select', 'datepicker', 'multiselect', 'table'];

    const SeperateData = () => {
        if (formData) {
            /////////////////////////// Call FormPanel Start ////////////////////////////
            let callFormPanel = formData?.find((el) => formElmTypes?.includes(el?.type));

            if (callFormPanel) {
                return (
                    <React.Fragment>
                        <div className='m-3'>
                            <FormPanel formPanelData={formData} />
                        </div>
                    </React.Fragment>
                )
            }
            /////////////////////////// Call FormPanel End ////////////////////////////

            ////////////////// Call TabPanel,CollapsePanel Start //////////////////////
            return formData && formData?.map((element, eIndex) => {
                if (element?.type === "TabPanel") {
                    return (
                        <React.Fragment key={eIndex}>
                            <div className='m-2'>
                                <TabPanel tabContentArr={element?.items} key={eIndex} />
                            </div>
                        </React.Fragment>
                    )
                } if (element?.type === "CollapsePanel") {
                    return (
                        <React.Fragment key={eIndex}>
                            <div className='m-2'>
                                <CollapseAblePanel collapseAblePanelData={element?.items} key={eIndex} />
                            </div>
                        </React.Fragment>
                    )
                } else {
                    return null;
                }
            })
            /////////////////// Call TabPanel,CollapsePanel end ///////////////////////
        } else {
            return null;
        }
    }

    return (
        <>
            <SeperateData />
        </>
    )
}

export default CommonForm