import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";

const ContactForm = ({ onFinish }) => {
  return (
    <Form
      name="contact-form"
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      size="large"
    >
      <Form.Item
        label={<span className="text-white">Name</span>}
        name="name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item
        label={<span className="text-white">Email</span>}
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        label={<span className="text-white">Phone</span>}
        name="phone"
        rules={[
          { required: true, message: "Please enter your phone number" },
        ]}
      >
        <Input placeholder="Enter your phone number" />
      </Form.Item>

      <Form.Item
        label={<span className="text-white">Note</span>}
        name="note"
      >
        <Input.TextArea rows={3} placeholder="Enter your message or note" />
      </Form.Item>

      <Form.Item
        name="consent"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(
                    new Error(
                      "You must agree to the terms and conditions"
                    )
                  ),
          },
        ]}
      >
        <Checkbox className="text-white">
          I hereby authorize to send notifications via
          SMS/Messages/Promotional/Informational messages and agree to the{" "}
          <Link to="/termsandcondition">Terms of Service</Link> and{" "}
          <Link to="/privacypolicies">Privacy Policy</Link>.
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-100">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
