import React from 'react'
import { Avatar as AntdAvatar } from 'antd'
import { AvatarProps } from 'antd/lib'
import { getNameInitials } from '@/utilities';

type Props =  AvatarProps & {
  name?:string;

}

const CustomAvatar = ({name, style, ...rest}: Props) => {
  return (
    <AntdAvatar
      alt={'Krish Makhijani'}
      size={'small'}
      style={{
        backgroundColor: '#87d068',
        display : 'flex',
        border : 'none',
        alignItems : 'center',
        ...style
      }}
      {...rest}

      >
        {getNameInitials(name || '')}
    </AntdAvatar>
  )
}

export default CustomAvatar