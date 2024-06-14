import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { dateToDMonthY } from "../common/utils";

export default async function getAllProductCategories(): Promise<ProductCategory[]> {
    const querySnapshot = await getDocs(collection(db, "productCategories"));
    let productCategories: ProductCategory[] = [];
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        data['id'] = doc.id;
        data['createdAt'] = dateToDMonthY(doc.data().createdAt.toDate())
        productCategories.push(data as ProductCategory);
    });
    return productCategories
}