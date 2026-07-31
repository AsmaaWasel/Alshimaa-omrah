CREATE TABLE "hotel_services" (
	"id" serial PRIMARY KEY NOT NULL,
	"hotelId" integer NOT NULL,
	"userId" text NOT NULL,
	"service" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "account" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "bus_images" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "buses" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "session" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "user" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "verification" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "account" CASCADE;--> statement-breakpoint
DROP TABLE "bus_images" CASCADE;--> statement-breakpoint
DROP TABLE "buses" CASCADE;--> statement-breakpoint
DROP TABLE "session" CASCADE;--> statement-breakpoint
DROP TABLE "user" CASCADE;--> statement-breakpoint
DROP TABLE "verification" CASCADE;--> statement-breakpoint
ALTER TABLE "hotel_images" ALTER COLUMN "createdAt" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "hotels" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "hotels" DROP COLUMN "shortDescription";