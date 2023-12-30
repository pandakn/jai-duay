import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import React from "react";
import { useForm } from "react-hook-form";

interface IRoom {
  name: string;
  bio: string;
  promptPay: string;
}

const CreateRoom = () => {
  const { register, handleSubmit, reset } = useForm<IRoom>();
  const mutateRoom = useMutation(api.rooms.createRoom);

  const onSubmit = (data: IRoom) => {
    mutateRoom(data);
    reset();
  };

  return (
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl my-4">
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-2">
        <div>
          <label className="label">
            <span className="text-base label-text">Room Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="w-full input input-bordered input-primary"
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Bio</span>
          </label>
          <input
            {...register("bio")}
            type="text"
            placeholder="Name"
            className="w-full input input-bordered input-primary"
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Propmt Pay</span>
          </label>
          <input
            {...register("promptPay")}
            type="text"
            placeholder="Name"
            className="w-full input input-bordered input-primary"
          />
        </div>

        <div>
          <button className="btn btn-block btn-primary my-4" type="submit">
            Create Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoom;
