import { OurFileRouter } from "@/app/(dashboard)/dashboard/uploadthing/core";
import {
    generateUploadButton,
    generateUploadDropzone,
    generateUploader,
} from "@uploadthing/react";

export const Uploader = generateUploader<OurFileRouter>();
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
