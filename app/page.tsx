"use client";

import { CreateRoom, RoomFeed } from "@/components/room";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Home() {
  const roomsInitial = useQuery(api.rooms.getRooms);

  return (
    <div className="container mx-auto">
      <CreateRoom />
      <RoomFeed roomsInitial={roomsInitial} />
    </div>
  );
}
