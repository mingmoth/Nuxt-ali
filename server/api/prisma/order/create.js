import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async(event) => {
    const body = await readBody(event)

    try {
        const order = await prisma.orders.create({
            data: {
                userId: body.userId,
                stripeId: body.stripeId,
                name: body.name,
                address: body.address,
                zipcode: body.zipcode,
                city: body.city,
                country: body.country,
            }
        })
        console.log('order', order)

        body.products.forEach(async(product) => {
            try {
                await prisma.orderItem.create({
                    data: {
                        orderId: order.id,
                        productId: Number(product.id),
                    }
                })
            } catch (error) {
                console.error(`create orderItem error during put ${product.id} in order ${order.id}`, error)
                return
            }
        });

        return order
    } catch (error) {
        console.error(error)
        return error
    }

})