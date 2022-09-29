import React from 'react'
import UserInfor from './UserInfor'
export interface InterfaceDataUser{
    name:string;
    age:number;
}
let data:InterfaceDataUser={
    name:"alice",
    age:2,
}
export default function DemoProps() {
  return (
    <div>
        <p>Demo props</p>
        <UserInfor user={data}/></div>
  )
}
