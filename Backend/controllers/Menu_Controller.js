const Menu = require("../models/Menu");
const MenuController = {
    index: (req, res) => {
        Menu.getAll(function (data) {
            if (data == null) {
                return res.status(200).json({
                    menus: data,
                    status: false,
                    message: "Không tìm thấy dữ liệu",
                });
            } else {
                return res.status(200).json({
                    menus: data,
                    status: true,
                    message: "Tải dữ liệu thành công",
                });
            }
        });
    },

    show: (req, res) => {
        const id = req.params.id;
        Menu.show(id, function (data) {
            if (data == null) {
                return res.status(200).json({
                    menus: null,
                    status: false,
                    message: "Khong tim thay du lieu",
                });
            } else {
                return res.status(200).json({
                    menus: data,
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
            
            type: bodyData.type,
            table_id: 1,
            link: bodyData.link,
            sort_order: 1,
            position: bodyData.position,
            level: 1,
            parent_id: 1,
            updated_at: "2024-3-28 10:10:19",
            updated_by: 0,
            created_at: "2024-3-28 10:10:19",
            created_by: 1,
            status: bodyData.status,
        };

        Menu.store(mydata, function (data) {
            return res.status(201).json({
                menus: data,
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
           
            type: bodyData.type,
            table_id: 1,
            link: bodyData.link,
            sort_order: 1,
            position: bodyData.position,
            level: 1,
            parent_id: 1,
            updated_at: "2024-3-28 10:10:19",
            updated_by: 0,
            created_at: "2024-3-28 10:10:19",
            created_by: 1,
            status: bodyData.status,
        };
        Menu.edit(mydata, id, function (data) {
            //data thứ mà nó trả về
            console.log(data);
        });
    },
    remove: (req, res) => {
        const id = req.params.id;
        Menu.remove(id, function (data) {
            console.log(data);
        });
    },
    list: async (req, res) => {
        try {
           const parentid = req.params.parentid;
           const limit = req.params.limit;
           await Menu.getList(parentid, limit, function (menus) {
              if (menus == null) {
                 const result = {
                    menus: null,
                    status: false,
                    message: "Không tìm thấy thông tin!",
                 };
                 return res.status(200).json(result);
              } else {
                 const result = {
                    menus: menus,
                    status: true,
                    message: "Tải dữ liệu thành công!",
                 };
                 return res.status(200).json(result);
              }
           });
        } catch (error) {
           const result = {
              menus: null,
              status: false,
              message: error.message,
           };
           return res.status(200).json(result);
        }
     },
     listfooter: async (req, res) => {
        try {
           const position = req.params.position;
           
           //
           await Menu.getListFooter(position, function (menus) {
              if (menus == null) {
                 const result = {
                    menus: null,
                    status: false,
                    message: "Không tìm thấy thông tin!",
                 };
                 return res.status(200).json(result);
              } else {
                 const result = {
                    menus: menus,
                    status: true,
                    message: "Tải dữ liệu thành công!",
                 };
                 return res.status(200).json(result);
              }
           });
        } catch (error) {
           const result = {
              menus: null,
              status: false,
              message: error.message,
           };
           return res.status(200).json(result);
        }
     },
  
};
module.exports = MenuController;
