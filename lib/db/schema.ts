import {
  pgTable,
  text,
  timestamp,
  boolean,
  serial,
  integer,
} from "drizzle-orm/pg-core";
// ================= Better Auth =================

export const user = pgTable("user", {
  id: text("id").primaryKey(),

  name: text("name").notNull(),

  email: text("email").notNull().unique(),

  emailVerified: boolean("emailVerified").default(false).notNull(),

  image: text("image"),

  createdAt: timestamp("createdAt").defaultNow().notNull(),

  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),

  userId: text("userId").notNull(),

  token: text("token").notNull().unique(),

  expiresAt: timestamp("expiresAt").notNull(),

  ipAddress: text("ipAddress"),

  userAgent: text("userAgent"),

  createdAt: timestamp("createdAt").defaultNow().notNull(),

  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),

  userId: text("userId").notNull(),

  accountId: text("accountId").notNull(),

  providerId: text("providerId").notNull(),

  accessToken: text("accessToken"),

  refreshToken: text("refreshToken"),

  password: text("password"),

  createdAt: timestamp("createdAt").defaultNow().notNull(),

  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),

  identifier: text("identifier").notNull(),

  value: text("value").notNull(),

  expiresAt: timestamp("expiresAt").notNull(),

  createdAt: timestamp("createdAt").defaultNow(),

  updatedAt: timestamp("updatedAt").defaultNow(),
});

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

// ================= Buses =================

export const buses = pgTable("buses", {
  id: serial("id").primaryKey(),

  userId: text("user_id").notNull(),

  title: text("title").notNull(),

  description: text("description"),

  busType: text("bus_type")
    .notNull()
    .default("economic"),

  createdAt: timestamp("created_at")
    .defaultNow(),
    

  updatedAt: timestamp("updated_at")
    .defaultNow(),
});
// ================= Bus Images =================

export const busImages = pgTable("bus_images", {
  id: serial("id").primaryKey(),

  busId: integer("busId").notNull(),

  userId: text("userId").notNull(),

  imageUrl: text("imageUrl").notNull(),

  altText: text("altText"),

  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
// ================= Bus Videos =================

export const busVideos = pgTable("bus_videos", {
  id: serial("id").primaryKey(),

  busId: integer("busId").notNull(),

  userId: text("userId").notNull(),

  videoUrl: text("videoUrl").notNull(),

  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
