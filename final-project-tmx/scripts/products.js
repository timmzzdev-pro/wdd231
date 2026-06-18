export async function getProducts() {

    try {

        const response =
            await fetch("./data/products.json");

        if (!response.ok) {
            throw new Error(
                "Unable to load products."
            );
        }

        const products =
            await response.json();

        return products;

    } catch (error) {

        console.error(error);

        return [];
    }
}