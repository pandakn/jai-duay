import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  rooms: defineTable({
    name: v.string(),
    qrCode: v.string(),
    bio: v.string(),
    billId: v.id("bills"),
    users: v.union(v.array(v.id("users")), v.null()),
  }),
  bills: defineTable({
    menus: v.array(
      v.object({
        menu: v.id("menus"),
        payers: v.array(v.id("users")),
        price: v.int64(),
        amount: v.int64(),
      })
    ),
    totalPrice: v.number(),
    roomId: v.union(v.id("rooms"), v.null()),
  }),
  users: defineTable({
    name: v.string(),
    avatar: v.string(),
    rooms: v.array(
      v.object({
        roomId: v.id("rooms"),
        amount: v.int64(),
      })
    ),
  }),
  menus: defineTable({
    title: v.string(),
    bills: v.array(v.id("bills")),
  }),
});
