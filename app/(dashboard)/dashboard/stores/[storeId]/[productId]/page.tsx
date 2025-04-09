import { redirect } from "next/navigation";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card";
import prisma from "@/lib/db";
import { UpdateProductForm } from "@/components/forms/UpdateProductForm";

const NewProductPage = async ({
    params,
}: {
    params: Promise<{ storeId: string; productId: string }>;
}) => {
    const awaitedParams = await params;
    
    const product = await prisma.product.findUnique({
        where: {
            id: awaitedParams.productId,
        },
    });

    if (!product) {
        redirect(`/dashboard/stores/${awaitedParams.storeId}/products`);
    }

    return (
        <Card
            id="new-product-page-form-container"
            aria-labelledby="new-product-page-form-heading"
        >
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Update product</CardTitle>
                <CardDescription>
                    Update your product from your store
                </CardDescription>
            </CardHeader>
            <CardContent>
                <UpdateProductForm product={product!} />
            </CardContent>
        </Card>
    );
};

export default NewProductPage;
