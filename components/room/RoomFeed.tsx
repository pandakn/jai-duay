import { Id } from "@/convex/_generated/dataModel";
import React from "react";
import { RoomCard } from ".";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

type Room = {
  _id: Id<"rooms">;
  _creationTime: number;
  name: string;
  qrCode: string;
  bio: string;
  billId: Id<"bills">;
  users: Id<"users">[] | null;
};

type RoomFeedProps = {
  roomsInitial: Room[] | undefined;
};

const RoomFeed = ({ roomsInitial }: RoomFeedProps) => {
  const mutateDeleteRoom = useMutation(api.rooms.deleteRoomById);

  return (
    <div className="flex flex-wrap gap-4">
      {roomsInitial?.map((room) => (
        <RoomCard
          key={room._id}
          room={room}
          handleDeleteRoomById={mutateDeleteRoom}
        />
      ))}
    </div>
  );
};

export default RoomFeed;
