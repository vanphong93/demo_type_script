import React from "react";
import { InterfaceDataUser } from "./DemoProps";

interface InterfaceUserInfor {
  user: InterfaceDataUser;
}
export default function UserInfor({ user }: InterfaceUserInfor) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </div>
  );
}
