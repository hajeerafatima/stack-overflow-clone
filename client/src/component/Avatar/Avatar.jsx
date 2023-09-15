import React from 'react'

 export const Avatar = ({children,backgroungColor, px, py, color, borderRadius, fontSize, cursor,textDecoration}) => {
  
    const style ={
    backgroungColor,
    padding: `${py} ${px} `,
    color,
    borderRadius,
    fontSize,
    textAlign:'center',
    cursor: cursor || null,
    textDecoration: textDecoration || 'none'
  }
    return (
    <div style={style}>
        {children}
    </div>
  )
}
export default Avatar
