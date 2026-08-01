ALTER TABLE "buses" ALTER COLUMN "description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "buses" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "buses" ADD COLUMN "bus_type" text DEFAULT 'economic' NOT NULL;--> statement-breakpoint
ALTER TABLE "buses" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "buses" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "buses" DROP COLUMN "userId";--> statement-breakpoint
ALTER TABLE "buses" DROP COLUMN "createdAt";--> statement-breakpoint
ALTER TABLE "buses" DROP COLUMN "updatedAt";