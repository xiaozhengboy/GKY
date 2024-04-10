import './index.scss'
import { Card, Form, Input, Button, Pagination } from 'antd'
import logo from '@/assets/ys.png'

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };



    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单 */}
                <Form validateTrigger={['onBlur']}
                    onFinish={onFinish}>
                    <Form.Item
                        // label="Password"
                        name="tel" // 指定校验名
                        rules={[   // 校验规则
                            {
                                required: true,     // 必填
                                message: '请输入手机号',
                            },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '请输入正确的手机号格式'
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="code" // 指定校验名
                        rules={[   // 校验规则
                            {
                                required: true,     // 必填
                                message: '请输入验证码',
                            },
                        ]}>
                        <Input size="large" placeholder="请输入验证码" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>


            </Card>
            <Pagination defaultCurrent={6} total={500}>

            </Pagination>
        </div>
    )
}






export default Login