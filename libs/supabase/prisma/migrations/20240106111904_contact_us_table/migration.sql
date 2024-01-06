-- CreateTable
CREATE TABLE "ContactUs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" TEXT,
    "name" TEXT,
    "email" TEXT,
    "mobile" TEXT,
    "message" TEXT,

    CONSTRAINT "ContactUs_pkey" PRIMARY KEY ("id")
);
