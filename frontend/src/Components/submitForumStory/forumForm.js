import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './forumForm.css';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import { db } from '../../firebase'
const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
const { Option } = Select;
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class SubmitForm extends React.Component {
  state = {
    Anony : false,
    submitted: false,
  }
  formRef = React.createRef();

  onFinish = (values) => {
    console.log(values);
    console.log(this.state.Anony)
    db.collection("forum").add({
      email: values.email,
      name: this.state.Anony ? "Anonymous": values.name,
      namePhoto:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png",
      state: values.state,
      customizeState: values.customizeState ? values.customizeState: "",
      content: values.content,
      verified: false,
    })
      .then(() => {
        console.log("Document successfully written!");
        this.setState({submitted:true})
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    this.formRef.current.resetFields();
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  onToggleAnony = () =>{
    this.setState({Anony:!this.state.Anony})
  }



  render() {
    return (
      <div>
        {this.state.submitted && <p>Thank you for sharing </p>}
        {
          !this.state.submitted &&
        
      <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>


        {/* email */}
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />

        </Form.Item>
 
        <input
        type="checkbox" 
        style={{marginLeft:"100px", marginTop:"-100px"}}
        checked = {this.state.Anony} 
        onChange = {()=>{this.onToggleAnony(); }}/>
        <label>  Anonymous</label>
        {/* name */}
        <Form.Item
          name="name"
          label="Name"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: !this.state.Anony,
              message: 'Please input your Name!'
            },
          ]}
        >
          <Input disabled = {this.state.Anony}/>
                    
        </Form.Item>




        {/* city or state */}
        <Form.Item
          name="state"
          label="State/City"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select your state"
            allowClear
          >
            {states.map((state, index) => (
              <Option key={index} value={state}>{state}</Option>
            ))}
            <Option value="other">Other</Option>
          </Select>


        </Form.Item>


        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.state !== currentValues.state}
        >
          {({ getFieldValue }) =>
            getFieldValue('state') === 'other' ? (
              <Form.Item
                name="customizeState"
                label="Customize"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>


        {/* content */}
        <Form.Item
          name="content"
          label="Your Story"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>




        {/* button */}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>

        </Form.Item>
      </Form>}
      </div>
    );
  }
}

export default SubmitForm;