const Product = require("../models/Product");
const ProductController = {
   index: (req, res) => {
      Product.getAll(function (data) {
         if (data == null) {
            return res.status(200).json({
               products: data,
               status: false,
               message: "Không tìm thấy dữ liệu",
            });
         } else {
            return res.status(200).json({
               products: data,
               status: true,
               message: "Tải dữ liệu thành công",
            });
         }
      });
   },
   show: (req, res) => {
      const id = req.params.id;
      Product.show(id, function (data) {
         if (data == null) {
            return res.status(200).json({
               products: null,
               status: false,
               message: "Khong tim thay du lieu",
            });
         } else {
            return res.status(200).json({
               products: data,
               status: true,
               message: "Tai du lieu thanh cong",
            });
         }
      });
   },

   store: (req, res) => {
      const bodyData = req.body;
      const mydata = {
         name: bodyData.name,
         category_id: bodyData.category_id,
         brand_id: bodyData.brand_id,
         slug: bodyData.slug,
         image: bodyData.image,
         detail: bodyData.detail,
         qty: bodyData.qty,
         price: bodyData.price,
         pricesale: bodyData.pricesale,
         description: bodyData.description,
         created_at: "2024-3-28 10:10:19",
         created_by: 1,
         status: bodyData.status,
      };

      Product.store(mydata, function (data) {
         return res.status(201).json({
            products: data,
            status: true,
            message: "Them du lieu thanh cong",
         });
      });
   },
   edit: (req, res) => {
      const id = req.params.id;
      const bodyData = req.body;
      //Lấy dũ liệu form
      const mydata = {
         name: bodyData.name,
         category_id: bodyData.category_id,
         brand_id: bodyData.brand_id,
         slug: bodyData.slug,
         image: bodyData.image,
         detail: bodyData.detail,
         qty: bodyData.qty,
         price: bodyData.price,
         pricesale: bodyData.pricesale,
         description: bodyData.description,
         created_at: "2024-3-28 10:10:19",
         created_by: 1,
         status: bodyData.status,
      };
      Product.edit(mydata, id, function (data) {
         //data thứ mà nó trả về
         console.log(data);
      });
   },
   remove: (req, res) => {
      const id = req.params.id;
      Product.remove(id, function (data) {
         console.log(data);
      });
   },
   listnew: async (req, res) => {
      try {
         const limit = req.params.limit;
         //
         await Product.getListNew(limit, function (products) {
            if (products == null) {
               const result = {
                  products: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               const result = {
                  products: products,
                  status: true,
                  message: "Tải dữ liệu thành công!",
               };
               return res.status(200).json(result);
            }
         });
      } catch (error) {
         const result = {
            products: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },
   list: async (req, res) => {
      try {
         const page = req.params.page;
         const limit = req.params.limit;
         //Xử lý page
         let offset = (page - 1) * limit;
         //
         await Product.getList(limit, offset, function (products) {
            if (products == null) {
               const result = {
                  products: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               const result = {
                  products: products,
                  status: true,
                  message: "Tải dữ liệu thành công!",
               };
               return res.status(200).json(result);
            }
         });
      } catch (error) {
         const result = {
            products: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },
   productdetail: async (req, res) => {
      try {
         const slug = req.params.slug;
         const limit = req.params.limit;
         await Product.getBySlug(slug, function (product) {
            if (product == null) {
               const result = {
                  product: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               Product.getListProductOther(product.category_id, product.id, limit, function (products) {
                  const result = {
                     product: product,
                     products: products,
                     status: true,
                     message: "Tải dữ liệu thành công!",
                  };
                  return res.status(200).json(result);
               });
            }
         });
      } catch (error) {
         const result = {
            products: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },
   list_product_category: async (req, res) => {
      try {
         const categoryid = req.params.categoryid;
         const page = req.params.page;
         const limit = req.params.limit;
         //Xử lý page
         let offset = (page - 1) * limit;
         //
         await Product.getListProductCategory(categoryid, limit, offset, function (products) {
            if (products == null) {
               const result = {
                  products: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               const result = {
                  products: products,
                  status: true,
                  message: "Tải dữ liệu thành công!",
               };
               return res.status(200).json(result);
            }
         });
      } catch (error) {
         const result = {
            products: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },
   list_brand: async (req, res) => {
      try {
         const brandid = req.params.brandid;
         const page = req.params.page;
         const limit = req.params.limit;
         let offset = (page - 1) * limit;
         await Product.getListByBrand(brandid, limit,offset, function (products) {
            if (products == null) {
               const result = {
                  products: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               const result = {
                  products: products,
                  status: true,
                  message: "Tải dữ liệu thành công!",
               };
               return res.status(200).json(result);
            }
         });
      } catch (error) {
         const result = {
            products: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },
   listsale: async (req, res) => {
      try {
         const limit = req.params.limit;
         //
         await Product.getListSale(limit, function (products) {
            if (products == null) {
               const result = {
                  products: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               const result = {
                  products: products,
                  status: true,
                  message: "Tải dữ liệu thành công!",
               };
               return res.status(200).json(result);
            }
         });
      } catch (error) {
         const result = {
            products: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },
   list_category: async (req, res) => {
      try {
         const slug = req.params.slug;
         const limit = req.params.limit;
         const page = req.params.page;
         let offset = (page - 1) * limit;
         await Product.getListByCategory(slug, limit,offset, function (products) {
            if (products == null) {
               const result = {
                  products: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
               };
               return res.status(200).json(result);
            } else {
               const result = {
                  products: products,
                  status: true,
                  message: "Tải dữ liệu thành công!",
               };
               return res.status(200).json(result);
            }
         });
      } catch (error) {
         const result = {
            products: null,
            status: false,
            message: error.message,
         };
         return res.status(200).json(result);
      }
   },









};
module.exports = ProductController;
