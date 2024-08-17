import React, { useState } from 'react';
import { DotChartOutlined } from '@ant-design/icons';
import { Divider, Form, Radio, Skeleton, Space, Switch } from 'antd';
const SkeletonApp = () => {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState('large');
  const [buttonShape, setButtonShape] = useState('default');
  const [avatarShape, setAvatarShape] = useState('circle');
  const handleActiveChange = (checked) => {
    setActive(checked);
  };
  const handleBlockChange = (checked) => {
    setBlock(checked);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleShapeButton = (e) => {
    setButtonShape(e.target.value);
  };
  const handleAvatarShape = (e) => {
    setAvatarShape(e.target.value);
  };
  return (
    <>
      <Space>
        <Skeleton.Image size='large' className='img__polace' active={active} />
      </Space>
    </>
  );
};
export default SkeletonApp;