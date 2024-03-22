import Head from "next/head";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const formRules = yup.object().shape({
    productName: yup.string().required("This field is Mandatory").min(3,"Minimum of 3 Characters Required").max(10, "Maximum of 10 characters required"),
    desc: yup.string().required("This field is Mandatory").min(16,"Minimum of 3 Characters Required").max(100000, "Maximum of 10,000 characters required"),
    price: yup.number().required().min().max(100),
    stock: yup.number().required().min().max(1),
});

export default function CreateAccount() {

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: { productName: "", desc: "", price: 0, stock: 1 },
        onSubmit: () => {
            console.log(values.productName)
        },
        validationSchema: formRules

    })
    return (
        <>
            <Head>
                <title>Irun Admin | Create a Product</title>
            </Head>
            <main className="bg-gray-300 h-screen flex justify-center py-4 md:py-8">
                <div className="w-full md:w-[400px] px-auto md:px-4 py-2 md:py-4 bg-gray-200 rounded-md">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="text-gray-500 text-sm">Product Name</label>
                            <TextField
                                id="productName"
                                placeholder="product name"
                                className="w-full"
                                value={values.productName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.productName && errors.productName
                                ? <span className="text-red-500 text-xs">{errors.productName}</span>
                                : null}
                        </div>

                        <div className="mb-2">
                            <label className="text-gray-500 text-sm">Product Description</label>
                            <TextField
                                id="desc"
                                placeholder="product description"
                                className="w-full"
                                value={values.desc}
                                multiline={true}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.desc && errors.desc
                                ? <span className="text-red-500 text-xs">{errors.desc}</span>
                                : null}
                        </div>

                        <div className="mb-2">
                            <label className="text-gray-500 text-sm">Product Price</label>
                            <TextField
                                id="price"
                                type="number"
                                placeholder="product price"
                                className="w-full"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.price && errors.price
                                ? <span className="text-red-500 text-xs">{errors.price}</span>
                                : null}
                        </div>
                        
                        <div className="mb-2">
                            <label className="text-gray-500 text-sm">Stock Availability</label>
                            <TextField
                                id="stock"
                                type="number"
                                placeholder="stock available"
                                className="w-full"
                                value={values.stock}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.stock && errors.stock
                                ? <span className="text-red-500 text-xs">{errors.stock}</span>
                                : null}
                        </div>

                        <Button
                            variant="contained"
                            color="secondary"
                            className="bg-red-900"
                            type="submit"

                        >CREATE PRODUCT</Button>
                    </form>
                </div>
            </main>
        </>
    )

}