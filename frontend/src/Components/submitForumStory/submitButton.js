import { Modal, Button } from 'antd';
import React, { useContext } from "react";
import 'antd/dist/antd.css';
import './submitButton.css'
import Form from './forumForm'

const SubmitButton = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Button className="button" type="primary" size = "large"onClick={showModal} block>
        Share Your Story!
      </Button>
      <Modal
        title="Share Your Stories"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
         
        ]}
      >
        
        
        <Form/>
      </Modal>
    </>
  );
};

export default SubmitButton;