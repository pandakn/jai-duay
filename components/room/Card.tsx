import { Id } from "@/convex/_generated/dataModel";
import Image from "next/image";

type Room = {
  _id: Id<"rooms">;
  _creationTime: number;
  name: string;
  qrCode: string;
  bio: string;
  billId: Id<"bills">;
  users: Id<"users">[] | null;
};

type CardProps = {
  room: Room;
  handleDeleteRoomById: (args: { roomId: Id<"rooms"> }) => Promise<null>;
};

const Card = ({ room, handleDeleteRoomById }: CardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-actions justify-end">
        <button onClick={() => handleDeleteRoomById({ roomId: room._id })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cc0000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-trash-2 hover:opacity-60"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
      </div>

      <figure className="px-10 pt-10">
        <Image
          src={room.qrCode}
          alt="Qr Code Propmpt Pay"
          width={200}
          height={100}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{room.name}</h2>
        <p>{room.bio}</p>
      </div>
    </div>
  );
};

export default Card;
