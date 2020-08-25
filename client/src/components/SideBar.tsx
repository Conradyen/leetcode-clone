import React, { useState } from "react";
import { CreateChannel } from "./createModel/CreateChannel";
import { AddUserModel } from "./createModel/AddUserModel";

export const SideBar = () => {
  const [openCreateChannel, setOpenCreateChannel] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);

  const handleCreateChannelToggleOpen = () => {
    setOpenCreateChannel(true);
  };

  const handleCreateChannelToggleClose = () => {
    setOpenCreateChannel(false);
  };

  const handleAddUserToggleOpen = () => {
    setOpenAddUser(true);
  };

  const handleAddUserToggleClose = () => {
    setOpenAddUser(false);
  };

  return (
    <div>
      <CreateChannel
        open={openCreateChannel}
        toggleOpen={handleCreateChannelToggleOpen}
        toggleClose={handleCreateChannelToggleClose}
      />
      <AddUserModel
        open={openAddUser}
        toggleOpen={handleAddUserToggleOpen}
        toggleClose={handleAddUserToggleClose}
      />
    </div>
  );
};
