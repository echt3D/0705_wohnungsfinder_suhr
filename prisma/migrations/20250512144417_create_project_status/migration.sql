-- CreateTable
CREATE TABLE "ProjectStatus" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,

    CONSTRAINT "ProjectStatus_pkey" PRIMARY KEY ("id")
);
