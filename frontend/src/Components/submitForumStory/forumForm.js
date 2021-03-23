import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './forumForm.css';
import { Form, Input, Button, Select } from 'antd';
import {db} from '../../firebase'
const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
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
  formRef = React.createRef();
  onFinish = (values) => {
    console.log(values);
    db.collection("forum").add({
      email: values.email,
      name: values.name,
      state: values.state,
      content: values.content,
      verified: false,
  })
  .then(() => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  }); 
    
    this.formRef.current.resetFields();
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };



  render() {
    return (
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
          <Input/>
          
        </Form.Item>

        {/* name */}
        <Form.Item
          name="name"
          label="Name"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your Name!'
            },
          ]}
        >
          <Input />
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
          {states.map((state, index)=>(
            <Option key = {index} value={state}>{state}</Option>
          ))}
          <Option value="other">other</Option>
          </Select>














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
          <Input />
        </Form.Item>

        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.state !== currentValues.state}
        >
          {({ getFieldValue }) =>
            getFieldValue('state') === 'other' ? (
              <Form.Item
                name="customizeState"
                label="Your country"
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

          {/* stories */}
          {/* name */}
          <Form.Item
              name="Story"
              label="Story"
              
              rules={[
                {
                  required: true,
                  message: 'Please share your story!'
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
      </Form>
    );
  }
}

export default SubmitForm;