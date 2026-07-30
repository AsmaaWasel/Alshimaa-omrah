CREATE TABLE "bus_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"busId" integer NOT NULL,
	"userId" text NOT NULL,
	"imageUrl" text NOT NULL,
	"altText" text,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hotel_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"hotelId" integer NOT NULL,
	"userId" text NOT NULL,
	"imageUrl" text NOT NULL,
	"altText" text,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DROP TABLE "bookings" CASCADE;--> statement-breakpoint
DROP TABLE "busImages" CASCADE;--> statement-breakpoint
DROP TABLE "customers" CASCADE;--> statement-breakpoint
DROP TABLE "hotelImages" CASCADE;--> statement-breakpoint
DROP TABLE "packages" CASCADE;--> statement-breakpoint
DROP TABLE "payments" CASCADE;--> statement-breakpoint
DROP TABLE "trips" CASCADE;--> statement-breakpoint
ALTER TABLE "buses" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "buses" ADD COLUMN "capacity" integer;--> statement-breakpoint
ALTER TABLE "buses" ADD COLUMN "pricePerSeat" integer;--> statement-breakpoint
ALTER TABLE "buses" ADD COLUMN "features" text;--> statement-breakpoint
ALTER TABLE "hotels" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "hotels" ADD COLUMN "location" text NOT NULL;--> statement-breakpoint
ALTER TABLE "hotels" ADD COLUMN "pricePerNight" integer;--> statement-breakpoint
ALTER TABLE "hotels" ADD COLUMN "rating" text;--> statement-breakpoint
ALTER TABLE "hotels" ADD COLUMN "amenities" text;--> statement-breakpoint
ALTER TABLE "buses" DROP COLUMN "title";--> statement-breakpoint
ALTER TABLE "buses" DROP COLUMN "busType";--> statement-breakpoint
ALTER TABLE "hotels" DROP COLUMN "title";--> statement-breakpoint
ALTER TABLE "hotels" DROP COLUMN "hotelType";--> statement-breakpoint
ALTER TABLE "hotels" DROP COLUMN "packageType";