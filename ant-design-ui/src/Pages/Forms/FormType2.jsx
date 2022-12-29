import React from 'react';
import CollapseAblePanel from '../../components/CollapseAblePanel';
// import CollapsePanel from '../../components/Collapse/CollapsePanel';

const FormType2 = (props) => {
  const { formData } = props;

  return (
    <>
      <div className='m-2'>
        {formData && formData?.map((el, eIndex) => {
          return (el?.type === 'CollapsePanel' && <CollapseAblePanel collapseAblePanelData={el?.items} key={eIndex} />)
        })}
        {/* <CollapsePanel /> */}
      </div>
    </>
  )
}

export default FormType2