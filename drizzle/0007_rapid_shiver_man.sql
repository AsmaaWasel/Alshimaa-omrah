CREATE TABLE "bus_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"busId" integer NOT NULL,
	"userId" text NOT NULL,
	"imageUrl" text NOT NULL,
	"altText" text,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "bus_videos" (
	"id" serial PRIMARY KEY NOT NULL,
	"busId" integer NOT NULL,
	"userId" text NOT NULL,
	"videoUrl" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "buses" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
