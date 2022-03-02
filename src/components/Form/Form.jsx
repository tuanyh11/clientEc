import React from 'react';
import './Form.css';

const Form = props => {
  return (
    <div className='form'>
        <form action="" onSubmit={(e) => {props.hanleSubmit && props.hanleSubmit(e)}} encType="multipart/form-data">
            {props.dataForm && props.renderInput ? (
                props.dataForm.map((item, index) => props.renderInput(item, index))
            ): ''}
            {props.inputAttValues && props.inputAttValues.length > 0 && props.renderInputAtt?  (
                <div className="">
                    {props.inputAttValues.map((item, index) => (
                        props.renderInputAtt(item, index)
                    ))}
                </div>
            ): ''}
            {props.renderButton ? (
                <div className="formAdditon">
                    {props.renderButton()}
                </div>
            ): ''}
            {
                props.renderButtonSubmit ? (
                    props.renderButtonSubmit()
                ): ''
            }
            {
               props.renderNavigation ? (
                <div className="formSuggest">
                    {props.renderNavigation()}
                </div>
                ): '' 
            }
        </form>
    </div>
  )
}

export default Form