import React from 'react'
import CollapseAblePanel from '../../components/CollapseAblePanel';
import FormPanel from '../../components/FormPanel';
import TabPanel from '../../components/TabPanel';

const CommonForm = (props) => {
    const { formData, source } = props;
    let formElmTypes = ['input', 'select', 'datepicker', 'multiselect', 'table'];

    const SeperateData = () => {
        if (formData) {
            /////////////////////////// Call FormPanel Start ////////////////////////////
            let callFormPanel = formData?.find((el) => formElmTypes?.includes(el?.type));

            if (callFormPanel) {
                return (
                    <React.Fragment>
                        <div className={`${source ? '' : 'm-3'}`}>
                            <FormPanel formPanelData={formData} key={'key'} />
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
                            <div className={`${source ? '' : 'm-1'}`}>
                                <TabPanel tabPanelData={element?.items} key={eIndex} source={'root'} />
                            </div>
                        </React.Fragment>
                    )
                } if (element?.type === "CollapsePanel") {
                    return (
                        <React.Fragment key={eIndex}>
                            <div className={`${source ? '' : 'm-1'}`}>
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