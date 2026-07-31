CREATE TABLE "hotel_features" (
	"id" serial PRIMARY KEY NOT NULL,
	"hotelId" integer NOT NULL,
	"userId" text NOT NULL,
	"feature" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hotel_videos" (
	"id" serial PRIMARY KEY NOT NULL,
	"hotelId" integer NOT NULL,
	"userId" text NOT NULL,
	"videoUrl" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "hotel_images" ALTER COLUMN "createdAt" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "hotels" ALTER COLUMN "location" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "hotels" ADD COLUMN "shortDescription" text;--> statement-breakpoint
ALTER TABLE "hotels" ADD COLUMN "stars" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "hotels" ADD COLUMN "packageType" text NOT NULL;--> statement-breakpoint
ALTER TABLE "hotels" DROP COLUMN "description";--> statement-breakpoint
ALTER TABLE "hotels" DROP COLUMN "pricePerNight";--> statement-breakpoint
ALTER TABLE "hotels" DROP COLUMN "rating";--> statement-breakpoint
ALTER TABLE "hotels" DROP COLUMN "amenities";