\c puppies;


CREATE TABLE "Users" (
	"User_ID" serial NOT NULL,
	"User_Name" TEXT NOT NULL,
	CONSTRAINT Users_pk PRIMARY KEY ("User_ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Events" (
	"Event_ID" serial NOT NULL,
	"Location_longitude" serial NOT NULL,
	"Location_latitude" serial NOT NULL,
	"Description" TEXT,
	"Photo" TEXT,
	"Date" DATE NOT NULL,
	"Host_ID" bigint NOT NULL,
	"Spot_ID" bigint NOT NULL,
	"Participants_min" int NOT NULL,
	"Participants_max" int NOT NULL,
	"Participants_number" int NOT NULL,
	"Sport" TEXT NOT NULL,
	CONSTRAINT Events_pk PRIMARY KEY ("Event_ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Spots" (
	"Spot_ID" serial NOT NULL,
	"Spot_longitude" bigint NOT NULL,
	"Spot_latitude" bigint NOT NULL,
	"Fields" TEXT NOT NULL,
	CONSTRAINT Spots_pk PRIMARY KEY ("Spot_ID")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Events" ADD CONSTRAINT "Events_fk0" FOREIGN KEY ("Host_ID") REFERENCES "Users"("User_ID");
ALTER TABLE "Events" ADD CONSTRAINT "Events_fk1" FOREIGN KEY ("Spot_ID") REFERENCES "Spots"("Spot_ID");
