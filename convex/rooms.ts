import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const args = {
  name: v.string(),
  bio: v.string(),
  promptPay: v.string(),
};

const generateQrCodePromptPay = (n: string) => {
  return `https://promptpay.io/${n}`;
};

export const createRoom = mutation({
  args,
  handler: async (ctx, args) => {
    const qrCode = generateQrCodePromptPay(args.promptPay);

    const newBill = await ctx.db.insert("bills", {
      menus: [],
      totalPrice: 0,
      roomId: null,
    });

    const roomId = await ctx.db.insert("rooms", {
      name: args.name,
      bio: args.bio,
      qrCode,
      billId: newBill,
      users: null,
    });

    await ctx.db.patch(newBill, { roomId });
  },
});

export const getRooms = query({
  args: {},
  handler: async (ctx, args) => {
    const rooms = await ctx.db.query("rooms").collect();
    return rooms;
  },
});

export const deleteRoomById = mutation({
  args: {
    roomId: v.id("rooms"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.roomId);
  },
});
