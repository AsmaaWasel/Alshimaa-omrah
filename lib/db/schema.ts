import {
  pgTable,
  text,
  timestamp,
  boolean,
  serial,
  integer,
} from "drizzle-orm/pg-core";

// ================= Hotels =================

export const hotels = pgTable("hotels", {
  id: serial("id").primaryKey(),

  userId: text("userId").notNull(),

  name: text("name").notNull(),

  description: text("description").notNull(),

  location: text("location"),

  stars: integer("stars").notNull(), // 3 | 4 | 5

  packageType: text("packageType").notNull(), // vip | economic

  createdAt: timestamp("createdAt").defaultNow().notNull(),

  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// ================= Hotel Images =================

export const hotelImages = pgTable("hotel_images", {
  id: serial("id").primaryKey(),

  hotelId: integer("hotelId").notNull(),

  userId: text("userId").notNull(),

  imageUrl: text("imageUrl").notNull(),

  altText: text("altText"),

  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// ================= Hotel Videos =================

export const hotelVideos = pgTable("hotel_videos", {
  id: serial("id").primaryKey(),

  hotelId: integer("hotelId").notNull(),

  userId: text("userId").notNull(),

  videoUrl: text("videoUrl").notNull(),

  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// ================= Hotel Features =================

export const hotelFeatures = pgTable("hotel_features", {
  id: serial("id").primaryKey(),

  hotelId: integer("hotelId").notNull(),

  userId: text("userId").notNull(),

  feature: text("feature").notNull(),

  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// ================= Hotel Services =================

export const hotelServices = pgTable("hotel_services", {
  id: serial("id").primaryKey(),

  hotelId: integer("hotelId").notNull(),

  userId: text("userId").notNull(),

  service: text("service").notNull(),

  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
