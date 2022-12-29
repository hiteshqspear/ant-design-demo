import React from 'react';
import CollapseAblePanel from '../../components/CollapseAblePanel';

const FormType4 = (props) => {
  const { formData } = props;

  return (
    <>
      <div className='m-3'>
        {formData && formData?.map((el, eIndex) => {
          return (el?.type === 'CollapsePanel' && <CollapseAblePanel collapseAblePanelData={el?.items} key={eIndex} />)
        })}
      </div>
    </>
  )
}

export default FormType4