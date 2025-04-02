"use client";

import { X } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
// import { UploadFileResponse } from 'uploadthing/client'

import { Button } from "@/components/ui/Button";
import { UploadButton } from "@/lib/uploadthing";
import { ClientUploadedFileData } from "uploadthing/types";
import { ControllerRenderProps } from "react-hook-form";

interface FileUploadProps {
    onChange: (value: ClientUploadedFileData<null>[]) => void;
    onRemove: (value: string) => void;
    value?: {
        url: string;
        name: string;
        size: number;
        key: string;
        fileKey: string;
        fileName: string;
        fileSize: number;
        fileUrl: string;
    }[];
    endpoint: "imageUploader";
}

export const FileUpload = ({
    onChange,
    onRemove,
    value,
    endpoint,
}: FileUploadProps) => {
    return (
        <>
            {value ? (
                <div className="pb-5 flex flex-wrap gap-4">
                    {value?.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[200px] h-[200px]"
                        >
                            <Button
                                type="button"
                                className="z-10 absolute -top-3 -right-3 hover:bg-destructive"
                                onClick={() => {
                                    onRemove(item.url);
                                }}
                                variant="destructive"
                                size="icon"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                            <Image
                                fill
                                className="rounded-md object-cover"
                                alt={item.name ?? "Image"}
                                src={item.url}
                            />
                        </div>
                    ))}
                </div>
            ) : null}
            <UploadButton
                endpoint={endpoint}
                onClientUploadComplete={(res) => {
                    onChange(res!);
                }}
                onUploadError={(error: Error) => {
                    toast.error(error.message);
                }}
            />
        </>
    );
};
